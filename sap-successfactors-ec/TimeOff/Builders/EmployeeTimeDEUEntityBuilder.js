var method = EmployeeTimeDEUEntityBuilder.prototype;

function EmployeeTimeDEUEntityBuilder() {

}

method.EmployeeTime_externalCode = function(EmployeeTime_externalCode) {
	this.EmployeeTime_externalCode = EmployeeTime_externalCode;
	return this;
};

method.continuedPayCreditedDays = function(continuedPayCreditedDays) {
	this.continuedPayCreditedDays = continuedPayCreditedDays;
	return this;
};

method.continuedPayEndDate = function(continuedPayEndDate) {
	this.continuedPayEndDate = continuedPayEndDate;
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

method.identicalSicknessGroup = function(identicalSicknessGroup) {
	this.identicalSicknessGroup = identicalSicknessGroup;
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

method.overlappingSicknessGroup = function(overlappingSicknessGroup) {
	this.overlappingSicknessGroup = overlappingSicknessGroup;
	return this;
};

method.paySupplementEndDate = function(paySupplementEndDate) {
	this.paySupplementEndDate = paySupplementEndDate;
	return this;
};

method.paySupplementStartDate = function(paySupplementStartDate) {
	this.paySupplementStartDate = paySupplementStartDate;
	return this;
};

method.sicknessCertificateStartDate = function(sicknessCertificateStartDate) {
	this.sicknessCertificateStartDate = sicknessCertificateStartDate;
	return this;
};

method.identicalSicknessGroupNav = function(identicalSicknessGroupNav) {
	this.identicalSicknessGroupNav = identicalSicknessGroupNav;
	return this;
};

method.overlappingSicknessGroupNav = function(overlappingSicknessGroupNav) {
	this.overlappingSicknessGroupNav = overlappingSicknessGroupNav;
	return this;
};

method.build = function() {
	return {
		EmployeeTime_externalCode: this.EmployeeTime_externalCode,
		continuedPayCreditedDays: this.continuedPayCreditedDays,
		continuedPayEndDate: this.continuedPayEndDate,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		externalCode: this.externalCode,
		identicalSicknessGroup: this.identicalSicknessGroup,
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
		overlappingSicknessGroup: this.overlappingSicknessGroup,
		paySupplementEndDate: this.paySupplementEndDate,
		paySupplementStartDate: this.paySupplementStartDate,
		sicknessCertificateStartDate: this.sicknessCertificateStartDate,
		identicalSicknessGroupNav: this.identicalSicknessGroupNav,
		overlappingSicknessGroupNav: this.overlappingSicknessGroupNav
	};
};

module.exports = EmployeeTimeDEUEntityBuilder;
