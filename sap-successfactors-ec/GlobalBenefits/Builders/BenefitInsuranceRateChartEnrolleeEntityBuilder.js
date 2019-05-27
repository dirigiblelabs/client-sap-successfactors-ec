var method = BenefitInsuranceRateChartEnrolleeEntityBuilder.prototype;

function BenefitInsuranceRateChartEnrolleeEntityBuilder() {

}

method.BenefitInsuranceRateChart_effectiveStartDate = function(BenefitInsuranceRateChart_effectiveStartDate) {
	this.BenefitInsuranceRateChart_effectiveStartDate = BenefitInsuranceRateChart_effectiveStartDate;
	return this;
};

method.BenefitInsuranceRateChart_rateChartId = function(BenefitInsuranceRateChart_rateChartId) {
	this.BenefitInsuranceRateChart_rateChartId = BenefitInsuranceRateChart_rateChartId;
	return this;
};

method.ageFrom = function(ageFrom) {
	this.ageFrom = ageFrom;
	return this;
};

method.ageTo = function(ageTo) {
	this.ageTo = ageTo;
	return this;
};

method.benefitInsuranceEnrolleeType = function(benefitInsuranceEnrolleeType) {
	this.benefitInsuranceEnrolleeType = benefitInsuranceEnrolleeType;
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

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.gender = function(gender) {
	this.gender = gender;
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

method.rateApplicableFor = function(rateApplicableFor) {
	this.rateApplicableFor = rateApplicableFor;
	return this;
};

method.smoking = function(smoking) {
	this.smoking = smoking;
	return this;
};

method.benefitInsuranceEnrolleeTypeNav = function(benefitInsuranceEnrolleeTypeNav) {
	this.benefitInsuranceEnrolleeTypeNav = benefitInsuranceEnrolleeTypeNav;
	return this;
};

method.build = function() {
	return {
		BenefitInsuranceRateChart_effectiveStartDate: this.BenefitInsuranceRateChart_effectiveStartDate,
		BenefitInsuranceRateChart_rateChartId: this.BenefitInsuranceRateChart_rateChartId,
		ageFrom: this.ageFrom,
		ageTo: this.ageTo,
		benefitInsuranceEnrolleeType: this.benefitInsuranceEnrolleeType,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		employeeContribution: this.employeeContribution,
		employerContribution: this.employerContribution,
		externalCode: this.externalCode,
		gender: this.gender,
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
		rateApplicableFor: this.rateApplicableFor,
		smoking: this.smoking,
		benefitInsuranceEnrolleeTypeNav: this.benefitInsuranceEnrolleeTypeNav
	};
};

module.exports = BenefitInsuranceRateChartEnrolleeEntityBuilder;
