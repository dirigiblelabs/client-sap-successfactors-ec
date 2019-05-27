var method = PerEmergencyContactsEntityBuilder.prototype;

function PerEmergencyContactsEntityBuilder() {

}

method.addressAddress1 = function(addressAddress1) {
	this.addressAddress1 = addressAddress1;
	return this;
};

method.addressAddress2 = function(addressAddress2) {
	this.addressAddress2 = addressAddress2;
	return this;
};

method.addressAddress3 = function(addressAddress3) {
	this.addressAddress3 = addressAddress3;
	return this;
};

method.addressCity = function(addressCity) {
	this.addressCity = addressCity;
	return this;
};

method.addressCountry = function(addressCountry) {
	this.addressCountry = addressCountry;
	return this;
};

method.addressCounty = function(addressCounty) {
	this.addressCounty = addressCounty;
	return this;
};

method.addressProvince = function(addressProvince) {
	this.addressProvince = addressProvince;
	return this;
};

method.addressState = function(addressState) {
	this.addressState = addressState;
	return this;
};

method.addressZipCode = function(addressZipCode) {
	this.addressZipCode = addressZipCode;
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

method.email = function(email) {
	this.email = email;
	return this;
};

method.isAddSameAsEmployee = function(isAddSameAsEmployee) {
	this.isAddSameAsEmployee = isAddSameAsEmployee;
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

method.name = function(name) {
	this.name = name;
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

method.phone = function(phone) {
	this.phone = phone;
	return this;
};

method.primaryFlag = function(primaryFlag) {
	this.primaryFlag = primaryFlag;
	return this;
};

method.relationship = function(relationship) {
	this.relationship = relationship;
	return this;
};

method.secondPhone = function(secondPhone) {
	this.secondPhone = secondPhone;
	return this;
};

method.addressNavDEFLT = function(addressNavDEFLT) {
	this.addressNavDEFLT = addressNavDEFLT;
	return this;
};

method.personNav = function(personNav) {
	this.personNav = personNav;
	return this;
};

method.build = function() {
	return {
		addressAddress1: this.addressAddress1,
		addressAddress2: this.addressAddress2,
		addressAddress3: this.addressAddress3,
		addressCity: this.addressCity,
		addressCountry: this.addressCountry,
		addressCounty: this.addressCounty,
		addressProvince: this.addressProvince,
		addressState: this.addressState,
		addressZipCode: this.addressZipCode,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		email: this.email,
		isAddSameAsEmployee: this.isAddSameAsEmployee,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		name: this.name,
		operation: this.operation,
		personIdExternal: this.personIdExternal,
		phone: this.phone,
		primaryFlag: this.primaryFlag,
		relationship: this.relationship,
		secondPhone: this.secondPhone,
		addressNavDEFLT: this.addressNavDEFLT,
		personNav: this.personNav
	};
};

module.exports = PerEmergencyContactsEntityBuilder;
