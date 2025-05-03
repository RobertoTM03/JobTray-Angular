import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  setDoc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore';
import { Vacancy } from '../models/vacancy';
import { Observable, from } from 'rxjs';
import {Applicant} from '../models/applicant';
import { arrayUnion, arrayRemove } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private collectionPath = 'vacancies';

  constructor(private firestore: Firestore) {}

  getVacancies(): Observable<Vacancy[]> {
    const vacanciesRef = collection(this.firestore, this.collectionPath);
    return collectionData(vacanciesRef, { idField: 'id' }) as Observable<Vacancy[]>;
  }

  getVacancyById(id: string): Observable<Vacancy> {
    const vacancyRef = doc(this.firestore, `${this.collectionPath}/${id}`);
    return docData(vacancyRef, { idField: 'id' }) as Observable<Vacancy>;
  }

  addVacancy(vacancy: Vacancy): Observable<void> {
    const vacancyRef = doc(this.firestore, `${this.collectionPath}/${vacancy.id}`);
    return from(setDoc(vacancyRef, vacancy));
  }

  setVacancy(id: string, vacancy: Vacancy): Observable<void> {
    const vacancyRef = doc(this.firestore, `${this.collectionPath}/${id}`);
    return from(setDoc(vacancyRef, vacancy));
  }

  updateVacancy(vacancy: Vacancy): Observable<void> {
    const vacancyRef = doc(this.firestore, `${this.collectionPath}/${vacancy.id}`);
    return from(updateDoc(vacancyRef, { ...vacancy }));
  }

  deleteVacancy(id: string): Observable<void> {
    const vacancyRef = doc(this.firestore, `${this.collectionPath}/${id}`);
    return from(deleteDoc(vacancyRef));
  }

  addApplicantToVacancy(vacancyId: string, applicant: Applicant): Observable<void> {
    const vacancyRef = doc(this.firestore, `${this.collectionPath}/${vacancyId}`);
    return from(updateDoc(vacancyRef, {
      applicants: arrayUnion(applicant)
    }));
  }

  removeApplicantFromVacancy(vacancyId: string, applicant: Applicant): Observable<void> {
    const vacancyRef = doc(this.firestore, `${this.collectionPath}/${vacancyId}`);
    return from(updateDoc(vacancyRef, {
      applicants: arrayRemove(applicant)
    }));
  }

  getApplicantsFromVacancy(vacancyId: string): Observable<Applicant[]> {
    const vacancyRef = doc(this.firestore, `${this.collectionPath}/${vacancyId}`);
    return docData(vacancyRef).pipe(
      map((vacancy: any) => vacancy.applicants || [])
    );
  }
}
