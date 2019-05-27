var method = BenefitProgramEnrollmentDetailEntityBuilder.prototype;

function BenefitProgramEnrollmentDetailEntityBuilder() {

}

method.BenefitProgramEnrollment_effectiveStartDate = function(BenefitProgramEnrollment_effectiveStartDate) {
	this.BenefitProgramEnrollment_effectiveStartDate = BenefitProgramEnrollment_effectiveStartDate;
	return this;
};

method.BenefitProgramEnrollment_id = function(BenefitProgramEnrollment_id) {
	this.BenefitProgramEnrollment_id = BenefitProgramEnrollment_id;
	return this;
};

method.benefit = function(benefit) {
	this.benefit = benefit;
	return this;
};

method.benefitAmount = function(benefitAmount) {
	this.benefitAmount = benefitAmount;
	return this;
};

method.benefitAmountForComparison = function(benefitAmountForComparison) {
	this.benefitAmountForComparison = benefitAmountForComparison;
	return this;
};

method.benefitCurrency = function(benefitCurrency) {
	this.benefitCurrency = benefitCurrency;
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

method.selectionId = function(selectionId) {
	this.selectionId = selectionId;
	return this;
};

method.benefitNav = function(benefitNav) {
	this.benefitNav = benefitNav;
	return this;
};

method.build = function() {
	return {
		BenefitProgramEnrollment_effectiveStartDate: this.BenefitProgramEnrollment_effectiveStartDate,
		BenefitProgramEnrollment_id: this.BenefitProgramEnrollment_id,
		benefit: this.benefit,
		benefitAmount: this.benefitAmount,
		benefitAmountForComparison: this.benefitAmountForComparison,
		benefitCurrency: this.benefitCurrency,
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
		selectionId: this.selectionId,
		benefitNav: this.benefitNav
	};
};

module.exports = BenefitProgramEnrollmentDetailEntityBuilder;
