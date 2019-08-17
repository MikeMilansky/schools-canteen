import { IFeatureFlagsMenuConfig } from '../interfaces/feature-flags-values';

export class FeatureFlagsMenuConfig implements IFeatureFlagsMenuConfig {
	public readonly HOME_PAGE: boolean;

	constructor(dto: IFeatureFlagsMenuConfig) {
		this.HOME_PAGE = dto.HOME_PAGE;
	}
}
