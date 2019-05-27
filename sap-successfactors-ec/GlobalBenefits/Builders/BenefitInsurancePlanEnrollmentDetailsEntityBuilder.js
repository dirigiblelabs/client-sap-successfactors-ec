var method = BenefitInsurancePlanEnrollmentDetailsEntityBuilder.prototype;

function BenefitInsurancePlanEnrollmentDetailsEntityBuilder() {

}

method.BenefitEnrollment_effectiveStartDate = function(BenefitEnrollment_effectiveStartDate) {
	this.BenefitEnrollment_effectiveStartDate = BenefitEnrollment_effectiveStartDate;
	return this;
};

method.BenefitEnrollment_id = function(BenefitEnrollment_id) {
	this.BenefitEnrollment_id = BenefitEnrollment_id;
	return this;
};

method.benefitSalaryAmount = function(benefitSalaryAmount) {
	this.benefitSalaryAmount = benefitSalaryAmount;
	return this;
};

method.coverage = function(coverage) {
	this.coverage = coverage;
	return this;
};

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.employeeContribution = function(employeeContribution) {
	this.employeeContribution = employeeContribution;
	return this;
};

method.employerContribution = function(employerContribution) {
	this.employerContribution = employerContribution;
	return this;
};

method.enrolleeOptions = function(enrolleeOptions) {
	this.enrolleeOptions = enrolleeOptions;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.lastModifiedBy = function(lastModifiedBy) {
	this.lastModifiedBy = lastModifiedBy;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.mdfSystemCreatedBy = function(mdfSystemCreatedBy) {
	this.mdfSystemCreatedBy = mdfSystemCreatedBy;
	return this;
};

method.mdfSystemCreatedDate = function(mdfSystemCreatedDate) {
	this.mdfSystemCreatedDate = mdfSystemCreatedDate;
	return this;
};

method.mdfSystemEffectiveEndDate = function(mdfSystemEffectiveEndDate) {
	this.mdfSystemEffectiveEndDate = mdfSystemEffectiveEndDate;
	return this;
};

method.mdfSystemEffectiveStartDate = function(mdfSystemEffectiveStartDate) {
	this.mdfSystemEffectiveStartDate = mdfSystemEffectiveStartDate;
	return this;
};

method.mdfSystemEntityId = function(mdfSystemEntityId) {
	this.mdfSystemEntityId = mdfSystemEntityId;
	return this;
};

method.mdfSystemLastModifiedBy = function(mdfSystemLastModifiedBy) {
	this.mdfSystemLastModifiedBy = mdfSystemLastModifiedBy;
	return this;
};

method.mdfSystemLastModifiedDate = function(mdfSystemLastModifiedDate) {
	this.mdfSystemLastModifiedDate = mdfSystemLastModifiedDate;
	return this;
};

method.mdfSystemLastModifiedDateWithTZ = function(mdfSystemLastModifiedDateWithTZ) {
	this.mdfSystemLastModifiedDateWithTZ = mdfSystemLastModifiedDateWithTZ;
	return this;
};

method.mdfSystemObjectType = function(mdfSystemObjectType) {
	this.mdfSystemObjectType = mdfSystemObjectType;
	return this;
};

method.mdfSystemRecordId = function(mdfSystemRecordId) {
	this.mdfSystemRecordId = mdfSystemRecordId;
	return this;
};

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.mdfSystemStatus = function(mdfSystemStatus) {
	this.mdfSystemStatus = mdfSystemStatus;
	return this;
};

method.mdfSystemTransactionSequence = function(mdfSystemTransactionSequence) {
	this.mdfSystemTransactionSequence = mdfSystemTransactionSequence;
	return this;
};

method.mdfSystemVersionId = function(mdfSystemVersionId) {
	this.mdfSystemVersionId = mdfSystemVersionId;
	return this;
};

method.plan = function(plan) {
	this.plan = plan;
	return this;
};

method.provider = function(provider) {
	this.provider = provider;
	return this;
};

method.roundedCoverageAmount = function(roundedCoverageAmount) {
	this.roundedCoverageAmount = roundedCoverageAmount;
	return this;
};

method.smoking = function(smoking) {
	this.smoking = smoking;
	return this;
};

method.benefitInsuranceDependentDetails = function(benefitInsuranceDependentDetails) {
	this.benefitInsuranceDependentDetails = benefitInsuranceDependentDetails;
	return this;
};

method.coverageNav = function(coverageNav) {
	this.coverageNav = coverageNav;
	return this;
};

method.enrolleeOptionsNav = function(enrolleeOptionsNav) {
	this.enrolleeOptionsNav = enrolleeOptionsNav;
	return this;
};

method.planNav = function(planNav) {
	this.planNav = planNav;
	return this;
};

method.providerNav = function(providerNav) {
	this.providerNav = providerNav;
	return this;
};

method.build = function() {
	return {
		BenefitEnrollment_effectiveStartDate: this.BenefitEnrollment_effectiveStartDate,
		BenefitEnrollment_id: this.BenefitEnrollment_id,
		benefitSalaryAmount: this.benefitSalaryAmount,
		coverage: this.coverage,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		employeeContribution: this.employeeContribution,
		employerContribution: this.employerContribution,
		enrolleeOptions: this.enrolleeOptions,
		externalCode: this.externalCode,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemCreatedBy: this.mdfSystemCreatedBy,
		mdfSystemCreatedDate: this.mdfSystemCreatedDate,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemEffectiveStartDate: this.mdfSystemEffectiveStartDate,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemLastModifiedBy: this.mdfSystemLastModifiedBy,
		mdfSystemLastModifiedDate: this.mdfSystemLastModifiedDate,
		mdfSystemLastModifiedDateWithTZ: this.mdfSystemLastModifiedDateWithTZ,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemStatus: this.mdfSystemStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		plan: this.plan,
		provider: this.provider,
		roundedCoverageAmount: this.roundedCoverageAmount,
		smoking: this.smoking,
		benefitInsuranceDependentDetails: this.benefitInsuranceDependentDetails,
		coverageNav: this.coverageNav,
		enrolleeOptionsNav: this.enrolleeOptionsNav,
		planNav: this.planNav,
		providerNav: this.providerNav
	};
};

module.exports = BenefitInsurancePlanEnrollmentDetailsEntityBuilder;
