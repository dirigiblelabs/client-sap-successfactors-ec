var method = PerPersonalEntityBuilder.prototype;

function PerPersonalEntityBuilder() {

}

method.attachmentId = function(attachmentId) {
	this.attachmentId = attachmentId;
	return this;
};

method.businessFirstName = function(businessFirstName) {
	this.businessFirstName = businessFirstName;
	return this;
};

method.businessLastName = function(businessLastName) {
	this.businessLastName = businessLastName;
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

method.displayName = function(displayName) {
	this.displayName = displayName;
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

method.gender = function(gender) {
	this.gender = gender;
	return this;
};

method.includeAllRecords = function(includeAllRecords) {
	this.includeAllRecords = includeAllRecords;
	return this;
};

method.initials = function(initials) {
	this.initials = initials;
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

method.maritalStatus = function(maritalStatus) {
	this.maritalStatus = maritalStatus;
	return this;
};

method.middleName = function(middleName) {
	this.middleName = middleName;
	return this;
};

method.nationality = function(nationality) {
	this.nationality = nationality;
	return this;
};

method.nativePreferredLang = function(nativePreferredLang) {
	this.nativePreferredLang = nativePreferredLang;
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

method.preferredName = function(preferredName) {
	this.preferredName = preferredName;
	return this;
};

method.salutation = function(salutation) {
	this.salutation = salutation;
	return this;
};

method.script = function(script) {
	this.script = script;
	return this;
};

method.startDate = function(startDate) {
	this.startDate = startDate;
	return this;
};

method.title = function(title) {
	this.title = title;
	return this;
};

method.personNav = function(personNav) {
	this.personNav = personNav;
	return this;
};

method.build = function() {
	return {
		attachmentId: this.attachmentId,
		businessFirstName: this.businessFirstName,
		businessLastName: this.businessLastName,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		displayName: this.displayName,
		endDate: this.endDate,
		firstName: this.firstName,
		gender: this.gender,
		includeAllRecords: this.includeAllRecords,
		initials: this.initials,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		lastName: this.lastName,
		maritalStatus: this.maritalStatus,
		middleName: this.middleName,
		nationality: this.nationality,
		nativePreferredLang: this.nativePreferredLang,
		operation: this.operation,
		personIdExternal: this.personIdExternal,
		preferredName: this.preferredName,
		salutation: this.salutation,
		script: this.script,
		startDate: this.startDate,
		title: this.title,
		personNav: this.personNav
	};
};

module.exports = PerPersonalEntityBuilder;
