var method = FOPayComponentGroupEntityBuilder.prototype;

function FOPayComponentGroupEntityBuilder() {

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

method.name = function(name) {
	this.name = name;
	return this;
};

method.payComponentFlx = function(payComponentFlx) {
	this.payComponentFlx = payComponentFlx;
	return this;
};

method.showOnCompUI = function(showOnCompUI) {
	this.showOnCompUI = showOnCompUI;
	return this;
};

method.sortOrder = function(sortOrder) {
	this.sortOrder = sortOrder;
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

method.useForComparatioCalc = function(useForComparatioCalc) {
	this.useForComparatioCalc = useForComparatioCalc;
	return this;
};

method.useForRangePenetration = function(useForRangePenetration) {
	this.useForRangePenetration = useForRangePenetration;
	return this;
};

method.descriptionTranslationNav = function(descriptionTranslationNav) {
	this.descriptionTranslationNav = descriptionTranslationNav;
	return this;
};

method.nameTranslationNav = function(nameTranslationNav) {
	this.nameTranslationNav = nameTranslationNav;
	return this;
};

method.payComponentFlxNav = function(payComponentFlxNav) {
	this.payComponentFlxNav = payComponentFlxNav;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		currency: this.currency,
		description: this.description,
		endDate: this.endDate,
		externalCode: this.externalCode,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		name: this.name,
		payComponentFlx: this.payComponentFlx,
		showOnCompUI: this.showOnCompUI,
		sortOrder: this.sortOrder,
		startDate: this.startDate,
		status: this.status,
		useForComparatioCalc: this.useForComparatioCalc,
		useForRangePenetration: this.useForRangePenetration,
		descriptionTranslationNav: this.descriptionTranslationNav,
		nameTranslationNav: this.nameTranslationNav,
		payComponentFlxNav: this.payComponentFlxNav
	};
};

module.exports = FOPayComponentGroupEntityBuilder;
