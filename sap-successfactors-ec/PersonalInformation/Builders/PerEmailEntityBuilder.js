var method = PerEmailEntityBuilder.prototype;

function PerEmailEntityBuilder() {

}

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

method.emailAddress = function(emailAddress) {
	this.emailAddress = emailAddress;
	return this;
};

method.emailType = function(emailType) {
	this.emailType = emailType;
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

method.personNav = function(personNav) {
	this.personNav = personNav;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		emailAddress: this.emailAddress,
		emailType: this.emailType,
		includeAllRecords: this.includeAllRecords,
		isPrimary: this.isPrimary,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		operation: this.operation,
		personIdExternal: this.personIdExternal,
		personNav: this.personNav
	};
};

module.exports = PerEmailEntityBuilder;
