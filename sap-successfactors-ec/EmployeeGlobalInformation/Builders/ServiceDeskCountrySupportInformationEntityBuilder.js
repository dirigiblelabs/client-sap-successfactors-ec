var method = ServiceDeskCountrySupportInformationEntityBuilder.prototype;

function ServiceDeskCountrySupportInformationEntityBuilder() {

}

method.ServiceDeskContactSupportInformation_externalCode = function(ServiceDeskContactSupportInformation_externalCode) {
	this.ServiceDeskContactSupportInformation_externalCode = ServiceDeskContactSupportInformation_externalCode;
	return this;
};

method.country = function(country) {
	this.country = country;
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

method.email = function(email) {
	this.email = email;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.isInternationalSupport = function(isInternationalSupport) {
	this.isInternationalSupport = isInternationalSupport;
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

method.phoneNumber = function(phoneNumber) {
	this.phoneNumber = phoneNumber;
	return this;
};

method.place = function(place) {
	this.place = place;
	return this;
};

method.tollFreeNumber = function(tollFreeNumber) {
	this.tollFreeNumber = tollFreeNumber;
	return this;
};

method.build = function() {
	return {
		ServiceDeskContactSupportInformation_externalCode: this.ServiceDeskContactSupportInformation_externalCode,
		country: this.country,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		email: this.email,
		externalCode: this.externalCode,
		isInternationalSupport: this.isInternationalSupport,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		phoneNumber: this.phoneNumber,
		place: this.place,
		tollFreeNumber: this.tollFreeNumber
	};
};

module.exports = ServiceDeskCountrySupportInformationEntityBuilder;
