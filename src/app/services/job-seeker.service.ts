import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JobSeeker} from '../models/job-seeker';

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

    deleteJobSeeker(id: string){
      let url = `${this.jobSeekersUrl}/${id}`;
      return this.http.delete<JobSeeker>(url);
    }

    updateJobSeeker(jobSeeker: JobSeeker){
      let url = `${this.jobSeekersUrl}/${jobSeeker.id}`;
      return this.http.put<JobSeeker>(url, jobSeeker, httpOptions);
    }

    addJobSeeker(jobSeeker: JobSeeker){
      let url = `${this.jobSeekersUrl}/${jobSeeker.id}`;
      return this.http.post<JobSeeker>(url, jobSeeker, httpOptions);
    }
}
