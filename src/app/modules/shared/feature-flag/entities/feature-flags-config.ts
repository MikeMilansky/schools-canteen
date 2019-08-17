import { IFeatureFlagsConfig } from '../interfaces/feature-flags-config';
import { FeatureFlagsValues } from './feature-flags-values';

export class FeatureFlagsConfig implements IFeatureFlagsConfig {
	public readonly SCHOOL: FeatureFlagsValues;
	public readonly PARENT: FeatureFlagsValues;


	constructor(dto: IFeatureFlagsConfig) {
		this.SCHOOL = dto.SCHOOL;
		this.PARENT = dto.PARENT;
	}
}
