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
import { JobSeeker } from '../models/job-seeker';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobSeekerService {
  private collectionPath = 'jobSeekers';

  constructor(private firestore: Firestore) {}

  /** Obtener todos los Job Seekers */
  getJobSeekers(): Observable<JobSeeker[]> {
    const jobSeekersRef = collection(this.firestore, this.collectionPath);
    return collectionData(jobSeekersRef, { idField: 'id' }) as Observable<JobSeeker[]>;
  }

  /** Obtener un Job Seeker por ID */
  getJobSeekerById(id: string): Observable<JobSeeker> {
    const jobSeekerRef = doc(this.firestore, `${this.collectionPath}/${id}`);
    return docData(jobSeekerRef, { idField: 'id' }) as Observable<JobSeeker>;
  }

  /** Añadir un nuevo Job Seeker con ID automático */
  addJobSeeker(jobSeeker: JobSeeker): Observable<void> {
    const jobSeekerRef = doc(this.firestore, `${this.collectionPath}/${jobSeeker.id}`);
    return from(setDoc(jobSeekerRef, jobSeeker));
  }


  /** Añadir o sobrescribir Job Seeker con ID específico */
  setJobSeeker(id: string, jobSeeker: JobSeeker): Observable<void> {
    const jobSeekerRef = doc(this.firestore, `${this.collectionPath}/${id}`);
    return from(setDoc(jobSeekerRef, jobSeeker));
  }

  /** Actualizar un Job Seeker (requiere .id) */
  updateJobSeeker(jobSeeker: JobSeeker): Observable<void> {
    const jobSeekerRef = doc(this.firestore, `${this.collectionPath}/${jobSeeker.id}`);
    return from(updateDoc(jobSeekerRef, { ...jobSeeker }));
  }

  /** Eliminar un Job Seeker por ID */
  deleteJobSeeker(id: string): Observable<void> {
    const jobSeekerRef = doc(this.firestore, `${this.collectionPath}/${id}`);
    return from(deleteDoc(jobSeekerRef));
  }
}
