import {Module} from '@nestjs/common';
import {ProfitabilityCalculationService} from './profitability-calculation.service';
import {ProfitabilityCalculationController} from './profitability-calculation.controller';
import {ProfitabilityCalculationService} from './profitability-calculation.service';

@Module({
	providers: [ProfitabilityCalculationService],
	controllers: [ProfitabilityCalculationController],
})
export class ProfitabilityCalculationModule {}
