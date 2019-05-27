var method = BenefitPensionStatutoryMinimumLookupEntityBuilder.prototype;

function BenefitPensionStatutoryMinimumLookupEntityBuilder() {

}

method.country = function(country) {
	this.country = country;
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

method.effectiveEndDate = function(effectiveEndDate) {
	this.effectiveEndDate = effectiveEndDate;
	return this;
};

method.effectiveStartDate = function(effectiveStartDate) {
	this.effectiveStartDate = effectiveStartDate;
	return this;
};

method.employeeStatutoryMaximumAmount = function(employeeStatutoryMaximumAmount) {
	this.employeeStatutoryMaximumAmount = employeeStatutoryMaximumAmount;
	return this;
};

method.employeeStatutoryMaximumPercentage = function(employeeStatutoryMaximumPercentage) {
	this.employeeStatutoryMaximumPercentage = employeeStatutoryMaximumPercentage;
	return this;
};

method.employeeStatutoryMinimumAmount = function(employeeStatutoryMinimumAmount) {
	this.employeeStatutoryMinimumAmount = employeeStatutoryMinimumAmount;
	return this;
};

method.employeeStatutoryMinimumPercentage = function(employeeStatutoryMinimumPercentage) {
	this.employeeStatutoryMinimumPercentage = employeeStatutoryMinimumPercentage;
	return this;
};

method.employerStatutoryMaximumAmount = function(employerStatutoryMaximumAmount) {
	this.employerStatutoryMaximumAmount = employerStatutoryMaximumAmount;
	return this;
};

method.employerStatutoryMaximumPercentage = function(employerStatutoryMaximumPercentage) {
	this.employerStatutoryMaximumPercentage = employerStatutoryMaximumPercentage;
	return this;
};

method.employerStatutoryMinimumAmount = function(employerStatutoryMinimumAmount) {
	this.employerStatutoryMinimumAmount = employerStatutoryMinimumAmount;
	return this;
};

method.employerStatutoryMinimumPercentage = function(employerStatutoryMinimumPercentage) {
	this.employerStatutoryMinimumPercentage = employerStatutoryMinimumPercentage;
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

method.typeOfPension = function(typeOfPension) {
	this.typeOfPension = typeOfPension;
	return this;
};

method.build = function() {
	return {
		country: this.country,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		effectiveEndDate: this.effectiveEndDate,
		effectiveStartDate: this.effectiveStartDate,
		employeeStatutoryMaximumAmount: this.employeeStatutoryMaximumAmount,
		employeeStatutoryMaximumPercentage: this.employeeStatutoryMaximumPercentage,
		employeeStatutoryMinimumAmount: this.employeeStatutoryMinimumAmount,
		employeeStatutoryMinimumPercentage: this.employeeStatutoryMinimumPercentage,
		employerStatutoryMaximumAmount: this.employerStatutoryMaximumAmount,
		employerStatutoryMaximumPercentage: this.employerStatutoryMaximumPercentage,
		employerStatutoryMinimumAmount: this.employerStatutoryMinimumAmount,
		employerStatutoryMinimumPercentage: this.employerStatutoryMinimumPercentage,
		externalCode: this.externalCode,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedDateWithTZ: this.lastModifiedDateWithTZ,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemStatus: this.mdfSystemStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		typeOfPension: this.typeOfPension
	};
};

module.exports = BenefitPensionStatutoryMinimumLookupEntityBuilder;
