var method = EmployeePayrollRunResultsItemsEntityBuilder.prototype;

function EmployeePayrollRunResultsItemsEntityBuilder() {

}

method.EmployeePayrollRunResults_externalCode = function(EmployeePayrollRunResults_externalCode) {
	this.EmployeePayrollRunResults_externalCode = EmployeePayrollRunResults_externalCode;
	return this;
};

method.EmployeePayrollRunResults_mdfSystemEffectiveStartDate = function(EmployeePayrollRunResults_mdfSystemEffectiveStartDate) {
	this.EmployeePayrollRunResults_mdfSystemEffectiveStartDate = EmployeePayrollRunResults_mdfSystemEffectiveStartDate;
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

method.createdDate = function(createdDate) {
	this.createdDate = createdDate;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.endDateWhenEarned = function(endDateWhenEarned) {
	this.endDateWhenEarned = endDateWhenEarned;
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

method.groupingReason = function(groupingReason) {
	this.groupingReason = groupingReason;
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

method.payrollProviderGroupingReason = function(payrollProviderGroupingReason) {
	this.payrollProviderGroupingReason = payrollProviderGroupingReason;
	return this;
};

method.payrollProviderGroupingValue = function(payrollProviderGroupingValue) {
	this.payrollProviderGroupingValue = payrollProviderGroupingValue;
	return this;
};

method.payrollProviderUnitOfMeasurement = function(payrollProviderUnitOfMeasurement) {
	this.payrollProviderUnitOfMeasurement = payrollProviderUnitOfMeasurement;
	return this;
};

method.payrollProviderWageType = function(payrollProviderWageType) {
	this.payrollProviderWageType = payrollProviderWageType;
	return this;
};

method.quantity = function(quantity) {
	this.quantity = quantity;
	return this;
};

method.startDateWhenEarned = function(startDateWhenEarned) {
	this.startDateWhenEarned = startDateWhenEarned;
	return this;
};

method.unitOfMeasurement = function(unitOfMeasurement) {
	this.unitOfMeasurement = unitOfMeasurement;
	return this;
};

method.wageType = function(wageType) {
	this.wageType = wageType;
	return this;
};

method.build = function() {
	return {
		EmployeePayrollRunResults_externalCode: this.EmployeePayrollRunResults_externalCode,
		EmployeePayrollRunResults_mdfSystemEffectiveStartDate: this.EmployeePayrollRunResults_mdfSystemEffectiveStartDate,
		amount: this.amount,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		endDateWhenEarned: this.endDateWhenEarned,
		externalCode: this.externalCode,
		externalName: this.externalName,
		groupingReason: this.groupingReason,
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
		payrollProviderGroupingReason: this.payrollProviderGroupingReason,
		payrollProviderGroupingValue: this.payrollProviderGroupingValue,
		payrollProviderUnitOfMeasurement: this.payrollProviderUnitOfMeasurement,
		payrollProviderWageType: this.payrollProviderWageType,
		quantity: this.quantity,
		startDateWhenEarned: this.startDateWhenEarned,
		unitOfMeasurement: this.unitOfMeasurement,
		wageType: this.wageType
	};
};

module.exports = EmployeePayrollRunResultsItemsEntityBuilder;
