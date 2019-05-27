var method = PerNationalIdEntityBuilder.prototype;

function PerNationalIdEntityBuilder() {

}

method.cardType = function(cardType) {
	this.cardType = cardType;
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

method.createdOn = function(createdOn) {
	this.createdOn = createdOn;
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

method.nationalId = function(nationalId) {
	this.nationalId = nationalId;
	return this;
};

method.notes = function(notes) {
	this.notes = notes;
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
		cardType: this.cardType,
		country: this.country,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		isPrimary: this.isPrimary,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		nationalId: this.nationalId,
		notes: this.notes,
		operation: this.operation,
		personIdExternal: this.personIdExternal,
		personNav: this.personNav
	};
};

module.exports = PerNationalIdEntityBuilder;
