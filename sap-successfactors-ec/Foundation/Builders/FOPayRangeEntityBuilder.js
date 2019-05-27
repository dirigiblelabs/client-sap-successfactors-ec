var method = FOPayRangeEntityBuilder.prototype;

function FOPayRangeEntityBuilder() {

}

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

method.currency = function(currency) {
	this.currency = currency;
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

method.frequencyCode = function(frequencyCode) {
	this.frequencyCode = frequencyCode;
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

method.maximumPay = function(maximumPay) {
	this.maximumPay = maximumPay;
	return this;
};

method.midPoint = function(midPoint) {
	this.midPoint = midPoint;
	return this;
};

method.minimumPay = function(minimumPay) {
	this.minimumPay = minimumPay;
	return this;
};

method.name = function(name) {
	this.name = name;
	return this;
};

method.payGradeFlx = function(payGradeFlx) {
	this.payGradeFlx = payGradeFlx;
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

method.companyFlxNav = function(companyFlxNav) {
	this.companyFlxNav = companyFlxNav;
	return this;
};

method.descriptionTranslationNav = function(descriptionTranslationNav) {
	this.descriptionTranslationNav = descriptionTranslationNav;
	return this;
};

method.frequencyCodeNav = function(frequencyCodeNav) {
	this.frequencyCodeNav = frequencyCodeNav;
	return this;
};

method.geozoneFlxNav = function(geozoneFlxNav) {
	this.geozoneFlxNav = geozoneFlxNav;
	return this;
};

method.nameTranslationNav = function(nameTranslationNav) {
	this.nameTranslationNav = nameTranslationNav;
	return this;
};

method.payGradeFlxNav = function(payGradeFlxNav) {
	this.payGradeFlxNav = payGradeFlxNav;
	return this;
};

method.build = function() {
	return {
		companyFlx: this.companyFlx,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		currency: this.currency,
		description: this.description,
		endDate: this.endDate,
		externalCode: this.externalCode,
		frequencyCode: this.frequencyCode,
		geozoneFlx: this.geozoneFlx,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		maximumPay: this.maximumPay,
		midPoint: this.midPoint,
		minimumPay: this.minimumPay,
		name: this.name,
		payGradeFlx: this.payGradeFlx,
		startDate: this.startDate,
		status: this.status,
		companyFlxNav: this.companyFlxNav,
		descriptionTranslationNav: this.descriptionTranslationNav,
		frequencyCodeNav: this.frequencyCodeNav,
		geozoneFlxNav: this.geozoneFlxNav,
		nameTranslationNav: this.nameTranslationNav,
		payGradeFlxNav: this.payGradeFlxNav
	};
};

module.exports = FOPayRangeEntityBuilder;
