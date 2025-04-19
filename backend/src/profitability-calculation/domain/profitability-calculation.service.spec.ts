import {Test, TestingModule} from '@nestjs/testing';
import {ProfitabilityCalculationService} from './profitability-calculation.service';

describe('ProfitabilityCalculationService', () => {
	let service: ProfitabilityCalculationService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ProfitabilityCalculationService],
		}).compile();

		service = module.get<ProfitabilityCalculationService>(
			ProfitabilityCalculationService,
		);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
