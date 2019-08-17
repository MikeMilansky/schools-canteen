import { FeatureFlagsConfig } from './entities/feature-flags-config';

import { featureFlagsValues as aggregatorProviderEventsFeatureFlagsValues } from './config/school';
import { featureFlagsValues as analystEventsConsumerEventsFeatureFlagsValues } from './config/parent';

export const featureFlagsConfig: FeatureFlagsConfig = new FeatureFlagsConfig(
	{
		SCHOOL: aggregatorProviderEventsFeatureFlagsValues,
		PARENT: analystEventsConsumerEventsFeatureFlagsValues,
	}
);
