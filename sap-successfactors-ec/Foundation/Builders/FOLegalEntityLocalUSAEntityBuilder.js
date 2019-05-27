var method = FOLegalEntityLocalUSAEntityBuilder.prototype;

function FOLegalEntityLocalUSAEntityBuilder() {

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

method.genericString1 = function(genericString1) {
	this.genericString1 = genericString1;
	return this;
};

method.genericString2 = function(genericString2) {
	this.genericString2 = genericString2;
	return this;
};

method.genericString3 = function(genericString3) {
	this.genericString3 = genericString3;
	return this;
};

method.genericString4 = function(genericString4) {
	this.genericString4 = genericString4;
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

method.legalEntityType = function(legalEntityType) {
	this.legalEntityType = legalEntityType;
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
		genericString1: this.genericString1,
		genericString2: this.genericString2,
		genericString3: this.genericString3,
		genericString4: this.genericString4,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		legalEntityType: this.legalEntityType,
		startDate: this.startDate,
		status: this.status,
		countryNav: this.countryNav
	};
};

module.exports = FOLegalEntityLocalUSAEntityBuilder;
