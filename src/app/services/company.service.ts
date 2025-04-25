import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { Observable, from } from 'rxjs';
import { Firestore, collection, collectionData, doc, docData, setDoc, addDoc, updateDoc, deleteDoc, } from '@angular/fire/firestore';
//TODO: Pasar la base de datos a firebase
//TODO: Restringir usuarios que pueden hacer operaciones


@Injectable({
  providedIn: 'root'
})

export class CompanyService {
  private collectionPath = 'companies';

  constructor(private firestore: Firestore) {}

  getCompanies(): Observable<Company[]> {
    const companyRef =collection(this.firestore, this.collectionPath);
    return collectionData(companyRef, { idField: 'id' }) as Observable<Company[]>;
  }

  getCompanyById(id: string): Observable<Company> {
    const companyRef = doc(this.firestore, `${this.collectionPath}/${id}`);
    return docData(companyRef, { idField: 'id' }) as Observable<Company>;
  }

  deleteCompany(id: string): Observable<void>{
    const companyRef = doc(this.firestore, `${this.collectionPath}/${id}`);
    return from(deleteDoc(companyRef));
  }

  updateCompany(company: Company): Observable<void> {
    const companyRef = doc(this.firestore, `${this.collectionPath}/${company.id}`);
    return from(updateDoc(companyRef, {...company}));

  }
  addCompany(company: Company): Observable<void> {
    const companyRef = doc(this.firestore, `${this.collectionPath}/${company.id}`);
    return from(setDoc(companyRef, company));
  }
}
