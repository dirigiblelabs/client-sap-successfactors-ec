var method = RecurringDeductionItemEntityBuilder.prototype;

function RecurringDeductionItemEntityBuilder() {

}

method.RecurringDeduction_effectiveStartDate = function(RecurringDeduction_effectiveStartDate) {
	this.RecurringDeduction_effectiveStartDate = RecurringDeduction_effectiveStartDate;
	return this;
};

method.RecurringDeduction_userSysId = function(RecurringDeduction_userSysId) {
	this.RecurringDeduction_userSysId = RecurringDeduction_userSysId;
	return this;
};

method.additionalInfo = function(additionalInfo) {
	this.additionalInfo = additionalInfo;
	return this;
};

method.advanceId = function(advanceId) {
	this.advanceId = advanceId;
	return this;
};

method.amount = function(amount) {
	this.amount = amount;
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

method.editPermission = function(editPermission) {
	this.editPermission = editPermission;
	return this;
};

method.endDate = function(endDate) {
	this.endDate = endDate;
	return this;
};

method.equivalentAmount = function(equivalentAmount) {
	this.equivalentAmount = equivalentAmount;
	return this;
};

method.frequency = function(frequency) {
	this.frequency = frequency;
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

method.payComponentType = function(payComponentType) {
	this.payComponentType = payComponentType;
	return this;
};

method.referenceId = function(referenceId) {
	this.referenceId = referenceId;
	return this;
};

method.unitOfMeasure = function(unitOfMeasure) {
	this.unitOfMeasure = unitOfMeasure;
	return this;
};

method.build = function() {
	return {
		RecurringDeduction_effectiveStartDate: this.RecurringDeduction_effectiveStartDate,
		RecurringDeduction_userSysId: this.RecurringDeduction_userSysId,
		additionalInfo: this.additionalInfo,
		advanceId: this.advanceId,
		amount: this.amount,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		currency: this.currency,
		editPermission: this.editPermission,
		endDate: this.endDate,
		equivalentAmount: this.equivalentAmount,
		frequency: this.frequency,
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
		payComponentType: this.payComponentType,
		referenceId: this.referenceId,
		unitOfMeasure: this.unitOfMeasure
	};
};

module.exports = RecurringDeductionItemEntityBuilder;
