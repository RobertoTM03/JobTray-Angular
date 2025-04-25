import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VacancyService } from './vacancy.service';
import { Vacancy } from '../models/vacancy';
import { Applicant } from '../models/applicant';
import { VacancyStage } from '../enums/vacancy-stage.enum';
import { JobType } from '../enums/job-type.enum';
import { EmploymentSector } from '../enums/employment-sector.enum';
import { EducationLevel } from '../enums/education-level.enum';
import { ApplicantStage } from '../enums/applicant-stage.enum';

describe('VacancyService', () => {
  let service: VacancyService;
  let httpMock: HttpTestingController;

  const mockVacancy: Vacancy = {
    id: '1',
    ownerId: "1",
    name: 'Software Engineer',
    stage: VacancyStage.Open,
    postedDate: '2000-01-01',
    dueDate: '2000-12-31',
    jobType: JobType.FullTime,
    minimumSalary: 1300,
    maximumSalary: 13000,
    applicants: [
      {
        id: "3",
        stage: ApplicantStage.New,
        applyDate: '2000-10-10'
      }
    ],
    employmentSector: EmploymentSector.Secondary,
    minimumEducationRequired: EducationLevel.University,
    description: 'Lorem ipsum dolor sit amet.',
    image: '/images/vacancies/vacancy-1.jpg'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VacancyService]
    });

    service = TestBed.inject(VacancyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería obtener una lista de vacantes', () => {
    service.getVacancies().subscribe(vacancies => {
      expect(vacancies.length).toBe(1);
      expect(vacancies[0]).toEqual(mockVacancy);
    });

    const req = httpMock.expectOne('http://localhost:3000/vacancies');
    expect(req.request.method).toBe('GET');
    req.flush([mockVacancy]);
  });

  it('debería eliminar una vacante', () => {
    service.deleteVacancy('1').subscribe(response => {
      // @ts-ignore
      return expect(response).toEqual(mockVacancy);
    });

    const req = httpMock.expectOne('http://localhost:3000/vacancies/1');
    expect(req.request.method).toBe('DELETE');
    req.flush(mockVacancy);
  });

  it('debería actualizar una vacante', () => {
    const updatedVacancy = { ...mockVacancy, name: 'Backend Developer' };

    service.updateVacancy(updatedVacancy).subscribe(response => {
      expect(response.name).toBe('Backend Developer');
    });

    const req = httpMock.expectOne('http://localhost:3000/vacancies/1');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body.name).toBe('Backend Developer');
    req.flush(updatedVacancy);
  });

  it('debería agregar una nueva vacante', () => {
    service.addVacancy(mockVacancy).subscribe(response => {
      expect(response).toEqual(mockVacancy);
    });

    const req = httpMock.expectOne('http://localhost:3000/vacancies/1');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockVacancy);
    req.flush(mockVacancy);
  });
});
