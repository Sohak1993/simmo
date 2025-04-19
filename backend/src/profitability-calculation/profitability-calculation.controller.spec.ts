import {Test, TestingModule} from '@nestjs/testing';
import {ProfitabilityCalculationController} from './profitability-calculation.controller';

describe('ProfitabilityCalculationController', () => {
	let controller: ProfitabilityCalculationController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [ProfitabilityCalculationController],
		}).compile();

		controller = module.get<ProfitabilityCalculationController>(
			ProfitabilityCalculationController,
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
