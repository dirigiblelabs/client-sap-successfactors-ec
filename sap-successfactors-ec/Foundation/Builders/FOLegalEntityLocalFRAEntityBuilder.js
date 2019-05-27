var method = FOLegalEntityLocalFRAEntityBuilder.prototype;

function FOLegalEntityLocalFRAEntityBuilder() {

}

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

method.endDate = function(endDate) {
	this.endDate = endDate;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.genericNumber1 = function(genericNumber1) {
	this.genericNumber1 = genericNumber1;
	return this;
};

method.genericNumber2 = function(genericNumber2) {
	this.genericNumber2 = genericNumber2;
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

method.nafCodePost2008 = function(nafCodePost2008) {
	this.nafCodePost2008 = nafCodePost2008;
	return this;
};

method.startDate = function(startDate) {
	this.startDate = startDate;
	return this;
};

method.status = function(status) {
	this.status = status;
	return this;
};

method.countryNav = function(countryNav) {
	this.countryNav = countryNav;
	return this;
};

method.build = function() {
	return {
		country: this.country,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		endDate: this.endDate,
		externalCode: this.externalCode,
		genericNumber1: this.genericNumber1,
		genericNumber2: this.genericNumber2,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		nafCodePost2008: this.nafCodePost2008,
		startDate: this.startDate,
		status: this.status,
		countryNav: this.countryNav
	};
};

module.exports = FOLegalEntityLocalFRAEntityBuilder;
