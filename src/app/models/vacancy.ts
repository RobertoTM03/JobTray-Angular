import { VacancyStage } from '../enums/vacancy-stage.enum';
import { JobType } from '../enums/job-type.enum';
import { EmploymentSector } from '../enums/employment-sector.enum';
import { EducationLevel } from '../enums/education-level.enum';
import { Applicant } from './applicant';

export interface Vacancy {
  id: string;
  ownerId: string;
  name: string;
  stage: VacancyStage;
  postedDate: string;
  dueDate: string;
  jobType: JobType;
  minimumSalary: number;
  maximumSalary: number;
  applicants: Applicant[];
  employmentSector: EmploymentSector;
  minimumEducationRequired: EducationLevel;
  description: string;
  image: string;
}
