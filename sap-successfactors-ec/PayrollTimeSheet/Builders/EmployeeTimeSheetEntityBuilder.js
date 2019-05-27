var method = EmployeeTimeSheetEntityBuilder.prototype;

function EmployeeTimeSheetEntityBuilder() {

}

method.approvalStatus = function(approvalStatus) {
	this.approvalStatus = approvalStatus;
	return this;
};

method.comment = function(comment) {
	this.comment = comment;
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

method.editable = function(editable) {
	this.editable = editable;
	return this;
};

method.endDate = function(endDate) {
	this.endDate = endDate;
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

method.plannedWorkingTime = function(plannedWorkingTime) {
	this.plannedWorkingTime = plannedWorkingTime;
	return this;
};

method.recordedWorkingTime = function(recordedWorkingTime) {
	this.recordedWorkingTime = recordedWorkingTime;
	return this;
};

method.replacedBy = function(replacedBy) {
	this.replacedBy = replacedBy;
	return this;
};

method.replaces = function(replaces) {
	this.replaces = replaces;
	return this;
};

method.startDate = function(startDate) {
	this.startDate = startDate;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.workflowAction = function(workflowAction) {
	this.workflowAction = workflowAction;
	return this;
};

method.workflowRequestId = function(workflowRequestId) {
	this.workflowRequestId = workflowRequestId;
	return this;
};

method.workingTimeAccount = function(workingTimeAccount) {
	this.workingTimeAccount = workingTimeAccount;
	return this;
};

method.employeeTimeSheetEntry = function(employeeTimeSheetEntry) {
	this.employeeTimeSheetEntry = employeeTimeSheetEntry;
	return this;
};

method.employeeTimeValuationResult = function(employeeTimeValuationResult) {
	this.employeeTimeValuationResult = employeeTimeValuationResult;
	return this;
};

method.replacedByNav = function(replacedByNav) {
	this.replacedByNav = replacedByNav;
	return this;
};

method.replacesNav = function(replacesNav) {
	this.replacesNav = replacesNav;
	return this;
};

method.build = function() {
	return {
		approvalStatus: this.approvalStatus,
		comment: this.comment,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		editable: this.editable,
		endDate: this.endDate,
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
		plannedWorkingTime: this.plannedWorkingTime,
		recordedWorkingTime: this.recordedWorkingTime,
		replacedBy: this.replacedBy,
		replaces: this.replaces,
		startDate: this.startDate,
		userId: this.userId,
		workflowAction: this.workflowAction,
		workflowRequestId: this.workflowRequestId,
		workingTimeAccount: this.workingTimeAccount,
		employeeTimeSheetEntry: this.employeeTimeSheetEntry,
		employeeTimeValuationResult: this.employeeTimeValuationResult,
		replacedByNav: this.replacedByNav,
		replacesNav: this.replacesNav
	};
};

module.exports = EmployeeTimeSheetEntityBuilder;
