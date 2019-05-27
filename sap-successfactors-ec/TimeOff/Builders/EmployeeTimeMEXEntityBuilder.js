var method = EmployeeTimeMEXEntityBuilder.prototype;

function EmployeeTimeMEXEntityBuilder() {

}

method.EmployeeTime_externalCode = function(EmployeeTime_externalCode) {
	this.EmployeeTime_externalCode = EmployeeTime_externalCode;
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

method.daysAlreadyCumulatedForSameSickness = function(daysAlreadyCumulatedForSameSickness) {
	this.daysAlreadyCumulatedForSameSickness = daysAlreadyCumulatedForSameSickness;
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

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.referenceNumber = function(referenceNumber) {
	this.referenceNumber = referenceNumber;
	return this;
};

method.identicalSicknessGroupNav = function(identicalSicknessGroupNav) {
	this.identicalSicknessGroupNav = identicalSicknessGroupNav;
	return this;
};

method.build = function() {
	return {
		EmployeeTime_externalCode: this.EmployeeTime_externalCode,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		daysAlreadyCumulatedForSameSickness: this.daysAlreadyCumulatedForSameSickness,
		externalCode: this.externalCode,
		identicalSicknessGroup: this.identicalSicknessGroup,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		referenceNumber: this.referenceNumber,
		identicalSicknessGroupNav: this.identicalSicknessGroupNav
	};
};

module.exports = EmployeeTimeMEXEntityBuilder;
