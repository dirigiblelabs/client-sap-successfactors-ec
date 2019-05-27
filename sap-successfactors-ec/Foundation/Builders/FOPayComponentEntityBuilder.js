var method = FOPayComponentEntityBuilder.prototype;

function FOPayComponentEntityBuilder() {

}

method.basePayComponentGroup = function(basePayComponentGroup) {
	this.basePayComponentGroup = basePayComponentGroup;
	return this;
};

method.canOverride = function(canOverride) {
	this.canOverride = canOverride;
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

method.displayOnSelfService = function(displayOnSelfService) {
	this.displayOnSelfService = displayOnSelfService;
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

method.isEarning = function(isEarning) {
	this.isEarning = isEarning;
	return this;
};

method.isEndDatedPayment = function(isEndDatedPayment) {
	this.isEndDatedPayment = isEndDatedPayment;
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

method.maxFractionDigits = function(maxFractionDigits) {
	this.maxFractionDigits = maxFractionDigits;
	return this;
};

method.name = function(name) {
	this.name = name;
	return this;
};

method.payComponentType = function(payComponentType) {
	this.payComponentType = payComponentType;
	return this;
};

method.payComponentValue = function(payComponentValue) {
	this.payComponentValue = payComponentValue;
	return this;
};

method.recurring = function(recurring) {
	this.recurring = recurring;
	return this;
};

method.selfServiceDescription = function(selfServiceDescription) {
	this.selfServiceDescription = selfServiceDescription;
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

method.target = function(target) {
	this.target = target;
	return this;
};

method.taxTreatment = function(taxTreatment) {
	this.taxTreatment = taxTreatment;
	return this;
};

method.usedForCompPlanning = function(usedForCompPlanning) {
	this.usedForCompPlanning = usedForCompPlanning;
	return this;
};

method.basePayComponentGroupNav = function(basePayComponentGroupNav) {
	this.basePayComponentGroupNav = basePayComponentGroupNav;
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

method.nameTranslationNav = function(nameTranslationNav) {
	this.nameTranslationNav = nameTranslationNav;
	return this;
};

method.build = function() {
	return {
		basePayComponentGroup: this.basePayComponentGroup,
		canOverride: this.canOverride,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		currency: this.currency,
		description: this.description,
		displayOnSelfService: this.displayOnSelfService,
		endDate: this.endDate,
		externalCode: this.externalCode,
		frequencyCode: this.frequencyCode,
		isEarning: this.isEarning,
		isEndDatedPayment: this.isEndDatedPayment,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		maxFractionDigits: this.maxFractionDigits,
		name: this.name,
		payComponentType: this.payComponentType,
		payComponentValue: this.payComponentValue,
		recurring: this.recurring,
		selfServiceDescription: this.selfServiceDescription,
		startDate: this.startDate,
		status: this.status,
		target: this.target,
		taxTreatment: this.taxTreatment,
		usedForCompPlanning: this.usedForCompPlanning,
		basePayComponentGroupNav: this.basePayComponentGroupNav,
		descriptionTranslationNav: this.descriptionTranslationNav,
		frequencyCodeNav: this.frequencyCodeNav,
		nameTranslationNav: this.nameTranslationNav
	};
};

module.exports = FOPayComponentEntityBuilder;
