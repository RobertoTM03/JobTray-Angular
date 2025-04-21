import { ApplicantStage } from '../enums/applicant-stage.enum';

export interface Applicant {
  id: string;
  stage: ApplicantStage;
  applyDate: string;
}
