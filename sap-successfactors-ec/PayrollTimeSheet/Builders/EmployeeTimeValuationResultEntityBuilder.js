var method = EmployeeTimeValuationResultEntityBuilder.prototype;

function EmployeeTimeValuationResultEntityBuilder() {

}

method.EmployeeTimeSheet_externalCode = function(EmployeeTimeSheet_externalCode) {
	this.EmployeeTimeSheet_externalCode = EmployeeTimeSheet_externalCode;
	return this;
};

method.allowanceType = function(allowanceType) {
	this.allowanceType = allowanceType;
	return this;
};

method.approvalStatus = function(approvalStatus) {
	this.approvalStatus = approvalStatus;
	return this;
};

method.bookingDate = function(bookingDate) {
	this.bookingDate = bookingDate;
	return this;
};

method.costCenter = function(costCenter) {
	this.costCenter = costCenter;
	return this;
};

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDate = function(createdDate) {
	this.createdDate = createdDate;
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

method.hours = function(hours) {
	this.hours = hours;
	return this;
};

method.lastModifiedBy = function(lastModifiedBy) {
	this.lastModifiedBy = lastModifiedBy;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.lastModifiedDateWithTZ = function(lastModifiedDateWithTZ) {
	this.lastModifiedDateWithTZ = lastModifiedDateWithTZ;
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

method.payTypeExternalName = function(payTypeExternalName) {
	this.payTypeExternalName = payTypeExternalName;
	return this;
};

method.payTypeName = function(payTypeName) {
	this.payTypeName = payTypeName;
	return this;
};

method.postingTarget = function(postingTarget) {
	this.postingTarget = postingTarget;
	return this;
};

method.timeTypeGroup = function(timeTypeGroup) {
	this.timeTypeGroup = timeTypeGroup;
	return this;
};

method.build = function() {
	return {
		EmployeeTimeSheet_externalCode: this.EmployeeTimeSheet_externalCode,
		allowanceType: this.allowanceType,
		approvalStatus: this.approvalStatus,
		bookingDate: this.bookingDate,
		costCenter: this.costCenter,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		externalCode: this.externalCode,
		hours: this.hours,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedDateWithTZ: this.lastModifiedDateWithTZ,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemEffectiveStartDate: this.mdfSystemEffectiveStartDate,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemStatus: this.mdfSystemStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		payTypeExternalName: this.payTypeExternalName,
		payTypeName: this.payTypeName,
		postingTarget: this.postingTarget,
		timeTypeGroup: this.timeTypeGroup
	};
};

module.exports = EmployeeTimeValuationResultEntityBuilder;
