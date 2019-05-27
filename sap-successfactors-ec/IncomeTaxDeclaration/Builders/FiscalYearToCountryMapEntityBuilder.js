var method = FiscalYearToCountryMapEntityBuilder.prototype;

function FiscalYearToCountryMapEntityBuilder() {

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

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.fiscalYearVariant = function(fiscalYearVariant) {
	this.fiscalYearVariant = fiscalYearVariant;
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

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.fiscalYearVariantNav = function(fiscalYearVariantNav) {
	this.fiscalYearVariantNav = fiscalYearVariantNav;
	return this;
};

method.build = function() {
	return {
		country: this.country,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		externalCode: this.externalCode,
		fiscalYearVariant: this.fiscalYearVariant,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		fiscalYearVariantNav: this.fiscalYearVariantNav
	};
};

module.exports = FiscalYearToCountryMapEntityBuilder;
