import { Injectable } from '@angular/core';
import { Firestore, collection, deleteDoc, doc, getDoc, addDoc, updateDoc, getDocs } from '@angular/fire/firestore';
import { Vacancy } from '../models/vacancy';
import { Observable, from, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { getAuth } from '@angular/fire/auth';
import { NgZone } from '@angular/core';  // Importar NgZone

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  constructor(private firestore: Firestore, private zone: NgZone) {}  // Inyectar NgZone

  // Obtener vacantes
  getVacancies(): Observable<Vacancy[]> {
    const ref = collection(this.firestore, 'vacancy');
    return from(getDocs(ref)).pipe(
      map(snapshot => snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Vacancy)))
    );
  }

  getVacancyById(id: string): Observable<Vacancy | null> {
    const ref = collection(this.firestore, 'vacancy');
    console.log('Buscando vacante con ID:', id);

    return from(getDocs(ref)).pipe(
      map(snapshot => {
        const doc = snapshot.docs.find(doc => doc.data()['id'] === id);

        if (doc) {
          const data = doc.data();
          const firebaseId = doc.id;  // Firebase ID
          const documentId = data?.['id'];

          console.log('ID de Firebase:', firebaseId);
          console.log('Campo id dentro del documento:', documentId);

          return {...data, firebaseId, id: firebaseId} as unknown as Vacancy;
        } else {
          console.error('Vacante no encontrada con ID:', id);
          return null;  // Si no se encuentra, devolvemos null
        }
      })
    );
  }

  deleteVacancy(firebaseId: string): Observable<void> {
    const ref = doc(this.firestore, `vacancy/${firebaseId}`);

    // @ts-ignore
    return from(getDoc(ref)).pipe(
      switchMap(snapshot => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          const ownerId = data?.['ownerId'];

          const auth = getAuth();
          const currentUserId = auth.currentUser?.uid;

          console.log('Propietario de la vacante:', ownerId);
          console.log('Usuario autenticado:', currentUserId);

          if (ownerId === currentUserId) {
            // Aquí usamos NgZone para ejecutar la eliminación dentro del ciclo de vida de Angular
            return this.zone.run(() => {
              return from(deleteDoc(ref)).pipe(
                map(() => {
                  console.log(`Vacante ${firebaseId} eliminada correctamente.`);
                })
              );
            });
          } else {
            console.error('No tienes permiso para eliminar esta vacante.');
            return of(null);  // Si el usuario no tiene permiso, retornamos null
          }
        } else {
          console.error('Vacante no encontrada con ID:', firebaseId);
          return of(null);  // Si la vacante no existe, retornamos null
        }
      })
    );
  }

  addVacancy(vacancy: Vacancy): Observable<Vacancy> {
    const ref = collection(this.firestore, 'vacancy');
    return from(addDoc(ref, vacancy)).pipe(
      map((docRef) => {
        const firebaseId = docRef.id;
        console.log('ID generado por Firebase:', firebaseId);

        const vacancyWithId = { ...vacancy, id: firebaseId };

        return vacancyWithId;
      })
    );
  }

  updateVacancy(vacancy: Vacancy): Observable<Vacancy> {
    const ref = doc(this.firestore, `vacancy/${vacancy.id}`);
    return from(updateDoc(ref, { ...vacancy })).pipe(
      map(() => vacancy)
    );
  }
}
