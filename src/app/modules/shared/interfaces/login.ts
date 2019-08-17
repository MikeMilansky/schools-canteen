import { WorkflowTypes } from '../enums/workflow-types';

export interface ILogin {
  user: string;
  // token: string;
  role: WorkflowTypes;
}
