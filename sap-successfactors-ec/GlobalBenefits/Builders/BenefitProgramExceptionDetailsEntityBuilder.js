var method = BenefitProgramExceptionDetailsEntityBuilder.prototype;

function BenefitProgramExceptionDetailsEntityBuilder() {

}

method.BenefitsException_exceptionId = function(BenefitsException_exceptionId) {
	this.BenefitsException_exceptionId = BenefitsException_exceptionId;
	return this;
};

method.adjustmentAmount = function(adjustmentAmount) {
	this.adjustmentAmount = adjustmentAmount;
	return this;
};

method.benefitProgram = function(benefitProgram) {
	this.benefitProgram = benefitProgram;
	return this;
};

method.benefitSchedulePeriodDataSourceWithExternalCode = function(benefitSchedulePeriodDataSourceWithExternalCode) {
	this.benefitSchedulePeriodDataSourceWithExternalCode = benefitSchedulePeriodDataSourceWithExternalCode;
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

method.schedulePeriod = function(schedulePeriod) {
	this.schedulePeriod = schedulePeriod;
	return this;
};

method.benefitProgramNav = function(benefitProgramNav) {
	this.benefitProgramNav = benefitProgramNav;
	return this;
};

method.schedulePeriodNav = function(schedulePeriodNav) {
	this.schedulePeriodNav = schedulePeriodNav;
	return this;
};

method.build = function() {
	return {
		BenefitsException_exceptionId: this.BenefitsException_exceptionId,
		adjustmentAmount: this.adjustmentAmount,
		benefitProgram: this.benefitProgram,
		benefitSchedulePeriodDataSourceWithExternalCode: this.benefitSchedulePeriodDataSourceWithExternalCode,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
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
		schedulePeriod: this.schedulePeriod,
		benefitProgramNav: this.benefitProgramNav,
		schedulePeriodNav: this.schedulePeriodNav
	};
};

module.exports = BenefitProgramExceptionDetailsEntityBuilder;
