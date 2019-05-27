var method = EmployeeTimeCalendarEntityBuilder.prototype;

function EmployeeTimeCalendarEntityBuilder() {

}

method.EmployeeTime_externalCode = function(EmployeeTime_externalCode) {
	this.EmployeeTime_externalCode = EmployeeTime_externalCode;
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

method.date = function(date) {
	this.date = date;
	return this;
};

method.deductionQuantity = function(deductionQuantity) {
	this.deductionQuantity = deductionQuantity;
	return this;
};

method.endTime = function(endTime) {
	this.endTime = endTime;
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

method.quantityInDays = function(quantityInDays) {
	this.quantityInDays = quantityInDays;
	return this;
};

method.quantityInHours = function(quantityInHours) {
	this.quantityInHours = quantityInHours;
	return this;
};

method.startTime = function(startTime) {
	this.startTime = startTime;
	return this;
};

method.workScheduleInternalId = function(workScheduleInternalId) {
	this.workScheduleInternalId = workScheduleInternalId;
	return this;
};

method.timeAccountDetail = function(timeAccountDetail) {
	this.timeAccountDetail = timeAccountDetail;
	return this;
};

method.build = function() {
	return {
		EmployeeTime_externalCode: this.EmployeeTime_externalCode,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		date: this.date,
		deductionQuantity: this.deductionQuantity,
		endTime: this.endTime,
		externalCode: this.externalCode,
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
		quantityInDays: this.quantityInDays,
		quantityInHours: this.quantityInHours,
		startTime: this.startTime,
		workScheduleInternalId: this.workScheduleInternalId,
		timeAccountDetail: this.timeAccountDetail
	};
};

module.exports = EmployeeTimeCalendarEntityBuilder;
