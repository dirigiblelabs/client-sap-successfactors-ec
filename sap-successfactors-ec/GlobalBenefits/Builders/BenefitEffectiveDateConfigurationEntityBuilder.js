var method = BenefitEffectiveDateConfigurationEntityBuilder.prototype;

function BenefitEffectiveDateConfigurationEntityBuilder() {

}

method.BenefitLifeEventConfiguration_configurationId = function(BenefitLifeEventConfiguration_configurationId) {
	this.BenefitLifeEventConfiguration_configurationId = BenefitLifeEventConfiguration_configurationId;
	return this;
};

method.BenefitLifeEventConfiguration_effectiveStartDate = function(BenefitLifeEventConfiguration_effectiveStartDate) {
	this.BenefitLifeEventConfiguration_effectiveStartDate = BenefitLifeEventConfiguration_effectiveStartDate;
	return this;
};

method.benefit = function(benefit) {
	this.benefit = benefit;
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

method.deductionRule = function(deductionRule) {
	this.deductionRule = deductionRule;
	return this;
};

method.exceptionFor = function(exceptionFor) {
	this.exceptionFor = exceptionFor;
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

method.rule = function(rule) {
	this.rule = rule;
	return this;
};

method.benefitNav = function(benefitNav) {
	this.benefitNav = benefitNav;
	return this;
};

method.build = function() {
	return {
		BenefitLifeEventConfiguration_configurationId: this.BenefitLifeEventConfiguration_configurationId,
		BenefitLifeEventConfiguration_effectiveStartDate: this.BenefitLifeEventConfiguration_effectiveStartDate,
		benefit: this.benefit,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		deductionRule: this.deductionRule,
		exceptionFor: this.exceptionFor,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		rule: this.rule,
		benefitNav: this.benefitNav
	};
};

module.exports = BenefitEffectiveDateConfigurationEntityBuilder;
