import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Vacancy } from '../models/vacancy';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})

export class VacancyService {
  private vacanciesUrl = 'http://localhost:3000/vacancies';

  constructor(private http: HttpClient) {}

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.vacanciesUrl);
  }

  deleteVacancy(id: string): Observable<Vacancy> {
    let url = `${this.vacanciesUrl}/${id}`;
    return this.http.delete<Vacancy>(url);
  }

  updateVacancy(vacancy: Vacancy): Observable<Vacancy> {
    let url = `${this.vacanciesUrl}/${vacancy.id}`;
    return this.http.put<Vacancy>(url, vacancy, httpOptions);
  }

  addVacancy(vacancy: Vacancy): Observable<Vacancy> {
    let url = `${this.vacanciesUrl}/${vacancy.id}`;
    return this.http.post<Vacancy>(url, vacancy, httpOptions);
  }
}
