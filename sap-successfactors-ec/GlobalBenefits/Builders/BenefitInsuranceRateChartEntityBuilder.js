var method = BenefitInsuranceRateChartEntityBuilder.prototype;

function BenefitInsuranceRateChartEntityBuilder() {

}

method.ageAsOfDay = function(ageAsOfDay) {
	this.ageAsOfDay = ageAsOfDay;
	return this;
};

method.ageAsOfMonth = function(ageAsOfMonth) {
	this.ageAsOfMonth = ageAsOfMonth;
	return this;
};

method.ageAsOfYear = function(ageAsOfYear) {
	this.ageAsOfYear = ageAsOfYear;
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

method.currency = function(currency) {
	this.currency = currency;
	return this;
};

method.effectiveStartDate = function(effectiveStartDate) {
	this.effectiveStartDate = effectiveStartDate;
	return this;
};

method.factor = function(factor) {
	this.factor = factor;
	return this;
};

method.genderRelevant = function(genderRelevant) {
	this.genderRelevant = genderRelevant;
	return this;
};

method.insurancePlan = function(insurancePlan) {
	this.insurancePlan = insurancePlan;
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

method.provider = function(provider) {
	this.provider = provider;
	return this;
};

method.rateChartId = function(rateChartId) {
	this.rateChartId = rateChartId;
	return this;
};

method.coverageNav = function(coverageNav) {
	this.coverageNav = coverageNav;
	return this;
};

method.insurancePlanNav = function(insurancePlanNav) {
	this.insurancePlanNav = insurancePlanNav;
	return this;
};

method.providerNav = function(providerNav) {
	this.providerNav = providerNav;
	return this;
};

method.rateChartEnrollee = function(rateChartEnrollee) {
	this.rateChartEnrollee = rateChartEnrollee;
	return this;
};

method.rateChartFixedAmount = function(rateChartFixedAmount) {
	this.rateChartFixedAmount = rateChartFixedAmount;
	return this;
};

method.build = function() {
	return {
		ageAsOfDay: this.ageAsOfDay,
		ageAsOfMonth: this.ageAsOfMonth,
		ageAsOfYear: this.ageAsOfYear,
		coverage: this.coverage,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		currency: this.currency,
		effectiveStartDate: this.effectiveStartDate,
		factor: this.factor,
		genderRelevant: this.genderRelevant,
		insurancePlan: this.insurancePlan,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemCreatedBy: this.mdfSystemCreatedBy,
		mdfSystemCreatedDate: this.mdfSystemCreatedDate,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
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
		provider: this.provider,
		rateChartId: this.rateChartId,
		coverageNav: this.coverageNav,
		insurancePlanNav: this.insurancePlanNav,
		providerNav: this.providerNav,
		rateChartEnrollee: this.rateChartEnrollee,
		rateChartFixedAmount: this.rateChartFixedAmount
	};
};

module.exports = BenefitInsuranceRateChartEntityBuilder;
