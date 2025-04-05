import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Company } from '../models/company';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})

export class CompanyService {
  private companiesUrl = 'http://localhost:3000/companies';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl);
  }

  deleteCompany(id: string): Observable<Company> {
    let url = `${this.companiesUrl}/${id}`;
    return this.http.delete<Company>(url);
  }

  updateCompany(company: Company): Observable<Company> {
    let url = `${this.companiesUrl}/${company.id}`;
    return this.http.put<Company>(url, company, httpOptions);
  }

  addCompany(company: Company): Observable<Company> {
    let url = `${this.companiesUrl}/${company.id}`;
    return this.http.post<Company>(url, company, httpOptions);
  }
}
