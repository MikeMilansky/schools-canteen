import { IFeatureFlagsValues } from '../interfaces/feature-flags-values';
import { FeatureFlagsMenuConfig } from './feature-flags-menu-config';

export class FeatureFlagsValues implements IFeatureFlagsValues {
  public readonly MENU: FeatureFlagsMenuConfig;

	constructor(dto: IFeatureFlagsValues) {
		this.MENU = dto.MENU;
	}
}
