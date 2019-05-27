var method = ServiceDeskContactSupportInformationEntityBuilder.prototype;

function ServiceDeskContactSupportInformationEntityBuilder() {

}

method.centralSupportMail = function(centralSupportMail) {
	this.centralSupportMail = centralSupportMail;
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

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.serviceDeskCountrySupportInformation = function(serviceDeskCountrySupportInformation) {
	this.serviceDeskCountrySupportInformation = serviceDeskCountrySupportInformation;
	return this;
};

method.build = function() {
	return {
		centralSupportMail: this.centralSupportMail,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		externalCode: this.externalCode,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		serviceDeskCountrySupportInformation: this.serviceDeskCountrySupportInformation
	};
};

module.exports = ServiceDeskContactSupportInformationEntityBuilder;
