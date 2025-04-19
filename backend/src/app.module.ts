import {Module} from '@nestjs/common';
import {ProfitabilityCalculationModule} from './profitability-calculation/profitability-calculation.module';
@Module({
	imports: [ProfitabilityCalculationModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
