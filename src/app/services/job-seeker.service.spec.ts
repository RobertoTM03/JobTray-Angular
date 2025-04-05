import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JobSeekerService } from './job-seeker.service';
import { JobSeeker } from '../models/job-seeker';

describe('JobSeekerService', () => {
  let service: JobSeekerService;
  let httpMock: HttpTestingController;

  const mockJobSeeker: JobSeeker = {
    id: '1',
    fullName: 'Roberto Tejero Martín',
    email: 'roberto@email.com',
    phoneNumber: '+34 123 456 799',
    otherContactMethod: 'Empty',
    userProfileDescription: 'Empty',
    portfolioLink: 'Empty',
    image: '/images/jobSeekers/jobSeeker-default.jpg'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JobSeekerService]
    });

    service = TestBed.inject(JobSeekerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería obtener una lista de job seekers', () => {
    service.getJobSeekers().subscribe(jobSeekers => {
      expect(jobSeekers.length).toBe(1);
      expect(jobSeekers[0]).toEqual(mockJobSeeker);
    });

    const req = httpMock.expectOne('http://localhost:3000/jobSeekers');
    expect(req.request.method).toBe('GET');
    req.flush([mockJobSeeker]);
  });

  it('debería eliminar un job seeker', () => {
    service.deleteJobSeeker('1').subscribe(response => {
      expect(response).toEqual(mockJobSeeker);
    });

    const req = httpMock.expectOne('http://localhost:3000/jobSeekers/1');
    expect(req.request.method).toBe('DELETE');
    req.flush(mockJobSeeker);
  });

  it('debería actualizar un job seeker', () => {
    const updatedJobSeeker = { ...mockJobSeeker, fullName: 'Nombre Actualizado' };

    service.updateJobSeeker(updatedJobSeeker).subscribe(response => {
      expect(response.fullName).toBe('Nombre Actualizado');
    });

    const req = httpMock.expectOne('http://localhost:3000/jobSeekers/1');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body.fullName).toBe('Nombre Actualizado');
    req.flush(updatedJobSeeker);
  });

  it('debería agregar un nuevo job seeker', () => {
    service.addJobSeeker(mockJobSeeker).subscribe(response => {
      expect(response).toEqual(mockJobSeeker);
    });

    const req = httpMock.expectOne('http://localhost:3000/jobSeekers/1');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockJobSeeker);
    req.flush(mockJobSeeker);
  });
});
