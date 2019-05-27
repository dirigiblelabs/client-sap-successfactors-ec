var method = BenefitLifeEventConfigurationEntityBuilder.prototype;

function BenefitLifeEventConfigurationEntityBuilder() {

}

method.benefitEvent = function(benefitEvent) {
	this.benefitEvent = benefitEvent;
	return this;
};

method.configurationId = function(configurationId) {
	this.configurationId = configurationId;
	return this;
};

method.configurationName = function(configurationName) {
	this.configurationName = configurationName;
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

method.effectiveStartDate = function(effectiveStartDate) {
	this.effectiveStartDate = effectiveStartDate;
	return this;
};

method.exceptionForPeriod = function(exceptionForPeriod) {
	this.exceptionForPeriod = exceptionForPeriod;
	return this;
};

method.exceptionWindowRule = function(exceptionWindowRule) {
	this.exceptionWindowRule = exceptionWindowRule;
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

method.legalEntity = function(legalEntity) {
	this.legalEntity = legalEntity;
	return this;
};

method.mdfSystemEffectiveEndDate = function(mdfSystemEffectiveEndDate) {
	this.mdfSystemEffectiveEndDate = mdfSystemEffectiveEndDate;
	return this;
};

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.benefitEffectiveDateConfiguration = function(benefitEffectiveDateConfiguration) {
	this.benefitEffectiveDateConfiguration = benefitEffectiveDateConfiguration;
	return this;
};

method.benefitEventNav = function(benefitEventNav) {
	this.benefitEventNav = benefitEventNav;
	return this;
};

method.legalEntityNav = function(legalEntityNav) {
	this.legalEntityNav = legalEntityNav;
	return this;
};

method.build = function() {
	return {
		benefitEvent: this.benefitEvent,
		configurationId: this.configurationId,
		configurationName: this.configurationName,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		effectiveStartDate: this.effectiveStartDate,
		exceptionForPeriod: this.exceptionForPeriod,
		exceptionWindowRule: this.exceptionWindowRule,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		legalEntity: this.legalEntity,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		benefitEffectiveDateConfiguration: this.benefitEffectiveDateConfiguration,
		benefitEventNav: this.benefitEventNav,
		legalEntityNav: this.legalEntityNav
	};
};

module.exports = BenefitLifeEventConfigurationEntityBuilder;
