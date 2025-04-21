import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JobSeeker} from '../models/job-seeker';

//TODO: Pasar la base de datos a firebase
//TODO: Restringir usuarios que pueden hacer operaciones

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})

export class JobSeekerService {
    private jobSeekersUrl = "http://localhost:3000/jobSeekers"

    constructor(private http: HttpClient) {
    }

    getJobSeekers(){
      return this.http.get<JobSeeker[]>(this.jobSeekersUrl)
    }

    getJobSeekerById(id: string) {
      const url = `${this.jobSeekersUrl}/${id}`;
      return this.http.get<JobSeeker>(url);
    }

    deleteJobSeeker(id: string){
      let url = `${this.jobSeekersUrl}/${id}`;
      return this.http.delete<JobSeeker>(url);
    }

    updateJobSeeker(jobSeeker: JobSeeker){
      let url = `${this.jobSeekersUrl}/${jobSeeker.id}`;
      return this.http.put<JobSeeker>(url, jobSeeker, httpOptions);
    }

    addJobSeeker(jobSeeker: JobSeeker) {
      return this.http.post<JobSeeker>(this.jobSeekersUrl, jobSeeker, httpOptions);
    }
}
