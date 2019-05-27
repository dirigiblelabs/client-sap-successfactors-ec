var method = BenefitInsuranceCoverageDetailsEntityBuilder.prototype;

function BenefitInsuranceCoverageDetailsEntityBuilder() {

}

method.BenefitInsuranceCoverageOptions_externalCode = function(BenefitInsuranceCoverageOptions_externalCode) {
	this.BenefitInsuranceCoverageOptions_externalCode = BenefitInsuranceCoverageOptions_externalCode;
	return this;
};

method.BenefitInsurancePlan_effectiveStartDate = function(BenefitInsurancePlan_effectiveStartDate) {
	this.BenefitInsurancePlan_effectiveStartDate = BenefitInsurancePlan_effectiveStartDate;
	return this;
};

method.BenefitInsurancePlan_id = function(BenefitInsurancePlan_id) {
	this.BenefitInsurancePlan_id = BenefitInsurancePlan_id;
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

method.rateChart = function(rateChart) {
	this.rateChart = rateChart;
	return this;
};

method.coverageNav = function(coverageNav) {
	this.coverageNav = coverageNav;
	return this;
};

method.rateChartNav = function(rateChartNav) {
	this.rateChartNav = rateChartNav;
	return this;
};

method.build = function() {
	return {
		BenefitInsuranceCoverageOptions_externalCode: this.BenefitInsuranceCoverageOptions_externalCode,
		BenefitInsurancePlan_effectiveStartDate: this.BenefitInsurancePlan_effectiveStartDate,
		BenefitInsurancePlan_id: this.BenefitInsurancePlan_id,
		coverage: this.coverage,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
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
		rateChart: this.rateChart,
		coverageNav: this.coverageNav,
		rateChartNav: this.rateChartNav
	};
};

module.exports = BenefitInsuranceCoverageDetailsEntityBuilder;
