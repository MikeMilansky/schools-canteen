import { menuConfig } from './menu';
import { FeatureFlagsValues } from '../../entities/feature-flags-values';

export const featureFlagsValues: FeatureFlagsValues = new FeatureFlagsValues(
	{
		MENU: menuConfig,
	}
);
