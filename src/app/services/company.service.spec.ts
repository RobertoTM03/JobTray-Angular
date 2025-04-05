import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CompanyService } from './company.service';
import { Company } from '../models/company';

describe('CompanyService', () => {
  let service: CompanyService;
  let httpMock: HttpTestingController;

  const mockCompany: Company = {
    id: '1',
    name: 'Apple',
    cifNif: 'A12345678',
    email: 'apple@email.com',
    image: '/images/companies/company-default.jpg'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CompanyService]
    });

    service = TestBed.inject(CompanyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería obtener una lista de compañías', () => {
    service.getCompanies().subscribe(companies => {
      expect(companies.length).toBe(1);
      expect(companies[0]).toEqual(mockCompany);
    });

    const req = httpMock.expectOne('http://localhost:3000/companies');
    expect(req.request.method).toBe('GET');
    req.flush([mockCompany]);
  });

  it('debería eliminar una compañía', () => {
    service.deleteCompany('1').subscribe(response => {
      expect(response).toEqual(mockCompany);
    });

    const req = httpMock.expectOne('http://localhost:3000/companies/1');
    expect(req.request.method).toBe('DELETE');
    req.flush(mockCompany);
  });

  it('debería actualizar una compañía', () => {
    const updatedCompany = { ...mockCompany, name: 'Apple Inc.' };

    service.updateCompany(updatedCompany).subscribe(response => {
      expect(response.name).toBe('Apple Inc.');
    });

    const req = httpMock.expectOne('http://localhost:3000/companies/1');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body.name).toBe('Apple Inc.');
    req.flush(updatedCompany);
  });

  it('debería agregar una nueva compañía', () => {
    service.addCompany(mockCompany).subscribe(response => {
      expect(response).toEqual(mockCompany);
    });

    const req = httpMock.expectOne('http://localhost:3000/companies/1');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockCompany);
    req.flush(mockCompany);
  });
});
