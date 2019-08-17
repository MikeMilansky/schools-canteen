import { WorkflowTypes } from '../enums/workflow-types';

export interface ILogin {
  User: string;
  Token: string;
  Role: WorkflowTypes;
}
