var method = FOLocationEntityBuilder.prototype;

function FOLocationEntityBuilder() {

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

method.addressAddress4 = function(addressAddress4) {
	this.addressAddress4 = addressAddress4;
	return this;
};

method.addressAddress5 = function(addressAddress5) {
	this.addressAddress5 = addressAddress5;
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

method.companyFlx = function(companyFlx) {
	this.companyFlx = companyFlx;
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

method.description = function(description) {
	this.description = description;
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

method.geozoneFlx = function(geozoneFlx) {
	this.geozoneFlx = geozoneFlx;
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

method.locationGroup = function(locationGroup) {
	this.locationGroup = locationGroup;
	return this;
};

method.name = function(name) {
	this.name = name;
	return this;
};

method.standardHours = function(standardHours) {
	this.standardHours = standardHours;
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

method.timezone = function(timezone) {
	this.timezone = timezone;
	return this;
};

method.addressNavDEFLT = function(addressNavDEFLT) {
	this.addressNavDEFLT = addressNavDEFLT;
	return this;
};

method.companyFlxNav = function(companyFlxNav) {
	this.companyFlxNav = companyFlxNav;
	return this;
};

method.descriptionTranslationNav = function(descriptionTranslationNav) {
	this.descriptionTranslationNav = descriptionTranslationNav;
	return this;
};

method.geozoneFlxNav = function(geozoneFlxNav) {
	this.geozoneFlxNav = geozoneFlxNav;
	return this;
};

method.locationGroupNav = function(locationGroupNav) {
	this.locationGroupNav = locationGroupNav;
	return this;
};

method.nameTranslationNav = function(nameTranslationNav) {
	this.nameTranslationNav = nameTranslationNav;
	return this;
};

method.build = function() {
	return {
		addressAddress1: this.addressAddress1,
		addressAddress2: this.addressAddress2,
		addressAddress3: this.addressAddress3,
		addressAddress4: this.addressAddress4,
		addressAddress5: this.addressAddress5,
		addressCity: this.addressCity,
		addressCountry: this.addressCountry,
		addressCounty: this.addressCounty,
		addressProvince: this.addressProvince,
		addressState: this.addressState,
		addressZipCode: this.addressZipCode,
		companyFlx: this.companyFlx,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		description: this.description,
		endDate: this.endDate,
		externalCode: this.externalCode,
		geozoneFlx: this.geozoneFlx,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		locationGroup: this.locationGroup,
		name: this.name,
		standardHours: this.standardHours,
		startDate: this.startDate,
		status: this.status,
		timezone: this.timezone,
		addressNavDEFLT: this.addressNavDEFLT,
		companyFlxNav: this.companyFlxNav,
		descriptionTranslationNav: this.descriptionTranslationNav,
		geozoneFlxNav: this.geozoneFlxNav,
		locationGroupNav: this.locationGroupNav,
		nameTranslationNav: this.nameTranslationNav
	};
};

module.exports = FOLocationEntityBuilder;
