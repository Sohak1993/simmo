export class ProfitabilityCalculationDto {
	constructor(
		public propertyPrice: number,
		public notaryFees: number,
		public renovationCosts: number,
		public monthlyRent: number,
		public annualCharges: number,
		public loanInterestRate: number,
		public loanDurationYears: number,
		public downPayment: number,
		public managementFeesPercentage: number,
		public propertyTax: number,
	) { }

	static toDto(
		dto: Partial<ProfitabilityCalculationDto>,
	): ProfitabilityCalculationDto {
		return new ProfitabilityCalculationDto(
			dto.propertyPrice ?? 0,
			dto.notaryFees ?? 0,
			dto.renovationCosts ?? 0,
			dto.monthlyRent ?? 0,
			dto.annualCharges ?? 0,
			dto.loanInterestRate ?? 0,
			dto.loanDurationYears ?? 0,
			dto.downPayment ?? 0,
			dto.managementFeesPercentage ?? 0,
			dto.propertyTax ?? 0,
		);
	}
}
