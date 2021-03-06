var method = DeductionScreenIdEntityBuilder.prototype;

function DeductionScreenIdEntityBuilder() {

}

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.dummyFieldValue = function(dummyFieldValue) {
	this.dummyFieldValue = dummyFieldValue;
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

method.onetimeDeductionId = function(onetimeDeductionId) {
	this.onetimeDeductionId = onetimeDeductionId;
	return this;
};

method.onetimeDeductionUserGoAdminId = function(onetimeDeductionUserGoAdminId) {
	this.onetimeDeductionUserGoAdminId = onetimeDeductionUserGoAdminId;
	return this;
};

method.onetimeDeductionUserGoEmployeeEditId = function(onetimeDeductionUserGoEmployeeEditId) {
	this.onetimeDeductionUserGoEmployeeEditId = onetimeDeductionUserGoEmployeeEditId;
	return this;
};

method.onetimeDeductionUserGoEmployeeId = function(onetimeDeductionUserGoEmployeeId) {
	this.onetimeDeductionUserGoEmployeeId = onetimeDeductionUserGoEmployeeId;
	return this;
};

method.recurringDeductionId = function(recurringDeductionId) {
	this.recurringDeductionId = recurringDeductionId;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		dummyFieldValue: this.dummyFieldValue,
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
		onetimeDeductionId: this.onetimeDeductionId,
		onetimeDeductionUserGoAdminId: this.onetimeDeductionUserGoAdminId,
		onetimeDeductionUserGoEmployeeEditId: this.onetimeDeductionUserGoEmployeeEditId,
		onetimeDeductionUserGoEmployeeId: this.onetimeDeductionUserGoEmployeeId,
		recurringDeductionId: this.recurringDeductionId
	};
};

module.exports = DeductionScreenIdEntityBuilder;
