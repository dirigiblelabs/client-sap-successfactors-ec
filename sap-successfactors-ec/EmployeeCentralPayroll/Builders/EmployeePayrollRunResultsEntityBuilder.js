var method = EmployeePayrollRunResultsEntityBuilder.prototype;

function EmployeePayrollRunResultsEntityBuilder() {

}

method.clientId = function(clientId) {
	this.clientId = clientId;
	return this;
};

method.companyId = function(companyId) {
	this.companyId = companyId;
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

method.currency = function(currency) {
	this.currency = currency;
	return this;
};

method.employmentId = function(employmentId) {
	this.employmentId = employmentId;
	return this;
};

method.endDateWhenPaid = function(endDateWhenPaid) {
	this.endDateWhenPaid = endDateWhenPaid;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.externalName = function(externalName) {
	this.externalName = externalName;
	return this;
};

method.isVoid = function(isVoid) {
	this.isVoid = isVoid;
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

method.payDate = function(payDate) {
	this.payDate = payDate;
	return this;
};

method.payrollId = function(payrollId) {
	this.payrollId = payrollId;
	return this;
};

method.payrollProviderId = function(payrollProviderId) {
	this.payrollProviderId = payrollProviderId;
	return this;
};

method.payrollProviderPayrollRunType = function(payrollProviderPayrollRunType) {
	this.payrollProviderPayrollRunType = payrollProviderPayrollRunType;
	return this;
};

method.payrollRunType = function(payrollRunType) {
	this.payrollRunType = payrollRunType;
	return this;
};

method.personId = function(personId) {
	this.personId = personId;
	return this;
};

method.sequenceNumber = function(sequenceNumber) {
	this.sequenceNumber = sequenceNumber;
	return this;
};

method.startDateWhenPaid = function(startDateWhenPaid) {
	this.startDateWhenPaid = startDateWhenPaid;
	return this;
};

method.systemId = function(systemId) {
	this.systemId = systemId;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.employeePayrollRunResultsItems = function(employeePayrollRunResultsItems) {
	this.employeePayrollRunResultsItems = employeePayrollRunResultsItems;
	return this;
};

method.build = function() {
	return {
		clientId: this.clientId,
		companyId: this.companyId,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		currency: this.currency,
		employmentId: this.employmentId,
		endDateWhenPaid: this.endDateWhenPaid,
		externalCode: this.externalCode,
		externalName: this.externalName,
		isVoid: this.isVoid,
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
		payDate: this.payDate,
		payrollId: this.payrollId,
		payrollProviderId: this.payrollProviderId,
		payrollProviderPayrollRunType: this.payrollProviderPayrollRunType,
		payrollRunType: this.payrollRunType,
		personId: this.personId,
		sequenceNumber: this.sequenceNumber,
		startDateWhenPaid: this.startDateWhenPaid,
		systemId: this.systemId,
		userId: this.userId,
		employeePayrollRunResultsItems: this.employeePayrollRunResultsItems
	};
};

module.exports = EmployeePayrollRunResultsEntityBuilder;
