var method = PerPersonRelationshipEntityBuilder.prototype;

function PerPersonRelationshipEntityBuilder() {

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

method.attachmentId = function(attachmentId) {
	this.attachmentId = attachmentId;
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

method.endDate = function(endDate) {
	this.endDate = endDate;
	return this;
};

method.firstName = function(firstName) {
	this.firstName = firstName;
	return this;
};

method.isAccompanyingDependent = function(isAccompanyingDependent) {
	this.isAccompanyingDependent = isAccompanyingDependent;
	return this;
};

method.isAddressSameAsPerson = function(isAddressSameAsPerson) {
	this.isAddressSameAsPerson = isAddressSameAsPerson;
	return this;
};

method.isBeneficiary = function(isBeneficiary) {
	this.isBeneficiary = isBeneficiary;
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

method.lastName = function(lastName) {
	this.lastName = lastName;
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

method.relatedPersonIdExternal = function(relatedPersonIdExternal) {
	this.relatedPersonIdExternal = relatedPersonIdExternal;
	return this;
};

method.relationshipType = function(relationshipType) {
	this.relationshipType = relationshipType;
	return this;
};

method.startDate = function(startDate) {
	this.startDate = startDate;
	return this;
};

method.personNav = function(personNav) {
	this.personNav = personNav;
	return this;
};

method.relNationalIdNav = function(relNationalIdNav) {
	this.relNationalIdNav = relNationalIdNav;
	return this;
};

method.relPersonNav = function(relPersonNav) {
	this.relPersonNav = relPersonNav;
	return this;
};

method.relPersonalNav = function(relPersonalNav) {
	this.relPersonalNav = relPersonalNav;
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
		attachmentId: this.attachmentId,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		endDate: this.endDate,
		firstName: this.firstName,
		isAccompanyingDependent: this.isAccompanyingDependent,
		isAddressSameAsPerson: this.isAddressSameAsPerson,
		isBeneficiary: this.isBeneficiary,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		lastName: this.lastName,
		operation: this.operation,
		personIdExternal: this.personIdExternal,
		relatedPersonIdExternal: this.relatedPersonIdExternal,
		relationshipType: this.relationshipType,
		startDate: this.startDate,
		personNav: this.personNav,
		relNationalIdNav: this.relNationalIdNav,
		relPersonNav: this.relPersonNav,
		relPersonalNav: this.relPersonalNav
	};
};

module.exports = PerPersonRelationshipEntityBuilder;
