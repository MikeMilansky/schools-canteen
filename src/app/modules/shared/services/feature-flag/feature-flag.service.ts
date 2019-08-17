import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FeatureFlagsValues } from '../../feature-flag/entities/feature-flags-values';
import { featureFlagsConfig } from '../../feature-flag/root';
import { WorkflowTypes } from '../../enums/workflow-types';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {

  public featureFlags: FeatureFlagsValues;

  private _isInit$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  public get isInit$(): Observable<boolean> {
    return this._isInit$;
  }

  constructor() {
  }

  public init(workflowType: WorkflowTypes): void {
    if (!!workflowType) {
      this.featureFlags = featureFlagsConfig[workflowType];
      this._isInit$.next(true);
    } else {
      console.log('Feature flags service: parameters are not set!');
    }
  }
}
