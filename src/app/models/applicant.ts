import { ApplicantStage } from '../enums/applicant-stage.enum';

export interface Applicant {
  id: number;
  stage: ApplicantStage;
  applyDate: string;
}
