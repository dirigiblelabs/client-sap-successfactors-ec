var method = PerPhoneEntityBuilder.prototype;

function PerPhoneEntityBuilder() {

}

method.areaCode = function(areaCode) {
	this.areaCode = areaCode;
	return this;
};

method.countryCode = function(countryCode) {
	this.countryCode = countryCode;
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

method.createdOn = function(createdOn) {
	this.createdOn = createdOn;
	return this;
};

method.extension = function(extension) {
	this.extension = extension;
	return this;
};

method.includeAllRecords = function(includeAllRecords) {
	this.includeAllRecords = includeAllRecords;
	return this;
};

method.isPrimary = function(isPrimary) {
	this.isPrimary = isPrimary;
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

method.lastModifiedOn = function(lastModifiedOn) {
	this.lastModifiedOn = lastModifiedOn;
	return this;
};

method.operation = function(operation) {
	this.operation = operation;
	return this;
};

method.personIdExternal = function(personIdExternal) {
	this.personIdExternal = personIdExternal;
	return this;
};

method.phoneNumber = function(phoneNumber) {
	this.phoneNumber = phoneNumber;
	return this;
};

method.phoneType = function(phoneType) {
	this.phoneType = phoneType;
	return this;
};

method.personNav = function(personNav) {
	this.personNav = personNav;
	return this;
};

method.build = function() {
	return {
		areaCode: this.areaCode,
		countryCode: this.countryCode,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		extension: this.extension,
		includeAllRecords: this.includeAllRecords,
		isPrimary: this.isPrimary,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		operation: this.operation,
		personIdExternal: this.personIdExternal,
		phoneNumber: this.phoneNumber,
		phoneType: this.phoneType,
		personNav: this.personNav
	};
};

module.exports = PerPhoneEntityBuilder;
