var method = FOJobClassLocalUSAEntityBuilder.prototype;

function FOJobClassLocalUSAEntityBuilder() {

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

method.eeo1JobCategory = function(eeo1JobCategory) {
	this.eeo1JobCategory = eeo1JobCategory;
	return this;
};

method.eeo4JobCategory = function(eeo4JobCategory) {
	this.eeo4JobCategory = eeo4JobCategory;
	return this;
};

method.eeo5JobCategory = function(eeo5JobCategory) {
	this.eeo5JobCategory = eeo5JobCategory;
	return this;
};

method.eeo6JobCategory = function(eeo6JobCategory) {
	this.eeo6JobCategory = eeo6JobCategory;
	return this;
};

method.eeoJobGroup = function(eeoJobGroup) {
	this.eeoJobGroup = eeoJobGroup;
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

method.flsaStatusUSA = function(flsaStatusUSA) {
	this.flsaStatusUSA = flsaStatusUSA;
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

method.genericNumber3 = function(genericNumber3) {
	this.genericNumber3 = genericNumber3;
	return this;
};

method.genericNumber4 = function(genericNumber4) {
	this.genericNumber4 = genericNumber4;
	return this;
};

method.genericNumber5 = function(genericNumber5) {
	this.genericNumber5 = genericNumber5;
	return this;
};

method.genericNumber6 = function(genericNumber6) {
	this.genericNumber6 = genericNumber6;
	return this;
};

method.genericString1 = function(genericString1) {
	this.genericString1 = genericString1;
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
		eeo1JobCategory: this.eeo1JobCategory,
		eeo4JobCategory: this.eeo4JobCategory,
		eeo5JobCategory: this.eeo5JobCategory,
		eeo6JobCategory: this.eeo6JobCategory,
		eeoJobGroup: this.eeoJobGroup,
		endDate: this.endDate,
		externalCode: this.externalCode,
		flsaStatusUSA: this.flsaStatusUSA,
		genericNumber1: this.genericNumber1,
		genericNumber2: this.genericNumber2,
		genericNumber3: this.genericNumber3,
		genericNumber4: this.genericNumber4,
		genericNumber5: this.genericNumber5,
		genericNumber6: this.genericNumber6,
		genericString1: this.genericString1,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		startDate: this.startDate,
		status: this.status,
		countryNav: this.countryNav
	};
};

module.exports = FOJobClassLocalUSAEntityBuilder;
