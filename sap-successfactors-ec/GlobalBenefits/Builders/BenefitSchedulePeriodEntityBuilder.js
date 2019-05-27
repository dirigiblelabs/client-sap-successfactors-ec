var method = BenefitSchedulePeriodEntityBuilder.prototype;

function BenefitSchedulePeriodEntityBuilder() {

}

method.balanceCarryForwardUptoDate = function(balanceCarryForwardUptoDate) {
	this.balanceCarryForwardUptoDate = balanceCarryForwardUptoDate;
	return this;
};

method.claimWindowEndDate = function(claimWindowEndDate) {
	this.claimWindowEndDate = claimWindowEndDate;
	return this;
};

method.claimWindowStartDate = function(claimWindowStartDate) {
	this.claimWindowStartDate = claimWindowStartDate;
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

method.enrollmentEffectiveFrom = function(enrollmentEffectiveFrom) {
	this.enrollmentEffectiveFrom = enrollmentEffectiveFrom;
	return this;
};

method.enrollmentValidityEndDate = function(enrollmentValidityEndDate) {
	this.enrollmentValidityEndDate = enrollmentValidityEndDate;
	return this;
};

method.enrollmentWindowEndDate = function(enrollmentWindowEndDate) {
	this.enrollmentWindowEndDate = enrollmentWindowEndDate;
	return this;
};

method.enrollmentWindowStartDate = function(enrollmentWindowStartDate) {
	this.enrollmentWindowStartDate = enrollmentWindowStartDate;
	return this;
};

method.id = function(id) {
	this.id = id;
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

method.periodName = function(periodName) {
	this.periodName = periodName;
	return this;
};

method.build = function() {
	return {
		balanceCarryForwardUptoDate: this.balanceCarryForwardUptoDate,
		claimWindowEndDate: this.claimWindowEndDate,
		claimWindowStartDate: this.claimWindowStartDate,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		enrollmentEffectiveFrom: this.enrollmentEffectiveFrom,
		enrollmentValidityEndDate: this.enrollmentValidityEndDate,
		enrollmentWindowEndDate: this.enrollmentWindowEndDate,
		enrollmentWindowStartDate: this.enrollmentWindowStartDate,
		id: this.id,
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
		periodName: this.periodName
	};
};

module.exports = BenefitSchedulePeriodEntityBuilder;
