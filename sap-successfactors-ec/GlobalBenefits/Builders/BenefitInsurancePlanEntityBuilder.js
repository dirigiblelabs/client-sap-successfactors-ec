var method = BenefitInsurancePlanEntityBuilder.prototype;

function BenefitInsurancePlanEntityBuilder() {

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

method.effectiveStartDate = function(effectiveStartDate) {
	this.effectiveStartDate = effectiveStartDate;
	return this;
};

method.eligibilityRuleForCoverage = function(eligibilityRuleForCoverage) {
	this.eligibilityRuleForCoverage = eligibilityRuleForCoverage;
	return this;
};

method.employeeContribution = function(employeeContribution) {
	this.employeeContribution = employeeContribution;
	return this;
};

method.employerContribution = function(employerContribution) {
	this.employerContribution = employerContribution;
	return this;
};

method.frequency = function(frequency) {
	this.frequency = frequency;
	return this;
};

method.id = function(id) {
	this.id = id;
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

method.mdfSystemCreatedBy = function(mdfSystemCreatedBy) {
	this.mdfSystemCreatedBy = mdfSystemCreatedBy;
	return this;
};

method.mdfSystemCreatedDate = function(mdfSystemCreatedDate) {
	this.mdfSystemCreatedDate = mdfSystemCreatedDate;
	return this;
};

method.mdfSystemEffectiveEndDate = function(mdfSystemEffectiveEndDate) {
	this.mdfSystemEffectiveEndDate = mdfSystemEffectiveEndDate;
	return this;
};

method.mdfSystemEntityId = function(mdfSystemEntityId) {
	this.mdfSystemEntityId = mdfSystemEntityId;
	return this;
};

method.mdfSystemLastModifiedBy = function(mdfSystemLastModifiedBy) {
	this.mdfSystemLastModifiedBy = mdfSystemLastModifiedBy;
	return this;
};

method.mdfSystemLastModifiedDate = function(mdfSystemLastModifiedDate) {
	this.mdfSystemLastModifiedDate = mdfSystemLastModifiedDate;
	return this;
};

method.mdfSystemLastModifiedDateWithTZ = function(mdfSystemLastModifiedDateWithTZ) {
	this.mdfSystemLastModifiedDateWithTZ = mdfSystemLastModifiedDateWithTZ;
	return this;
};

method.mdfSystemObjectType = function(mdfSystemObjectType) {
	this.mdfSystemObjectType = mdfSystemObjectType;
	return this;
};

method.mdfSystemRecordId = function(mdfSystemRecordId) {
	this.mdfSystemRecordId = mdfSystemRecordId;
	return this;
};

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.mdfSystemStatus = function(mdfSystemStatus) {
	this.mdfSystemStatus = mdfSystemStatus;
	return this;
};

method.mdfSystemTransactionSequence = function(mdfSystemTransactionSequence) {
	this.mdfSystemTransactionSequence = mdfSystemTransactionSequence;
	return this;
};

method.mdfSystemVersionId = function(mdfSystemVersionId) {
	this.mdfSystemVersionId = mdfSystemVersionId;
	return this;
};

method.planName_de_DE = function(planName_de_DE) {
	this.planName_de_DE = planName_de_DE;
	return this;
};

method.planName_defaultValue = function(planName_defaultValue) {
	this.planName_defaultValue = planName_defaultValue;
	return this;
};

method.planName_en_GB = function(planName_en_GB) {
	this.planName_en_GB = planName_en_GB;
	return this;
};

method.planName_en_US = function(planName_en_US) {
	this.planName_en_US = planName_en_US;
	return this;
};

method.planName_es_ES = function(planName_es_ES) {
	this.planName_es_ES = planName_es_ES;
	return this;
};

method.planName_fr_FR = function(planName_fr_FR) {
	this.planName_fr_FR = planName_fr_FR;
	return this;
};

method.planName_ja_JP = function(planName_ja_JP) {
	this.planName_ja_JP = planName_ja_JP;
	return this;
};

method.planName_ko_KR = function(planName_ko_KR) {
	this.planName_ko_KR = planName_ko_KR;
	return this;
};

method.planName_localized = function(planName_localized) {
	this.planName_localized = planName_localized;
	return this;
};

method.planName_nl_NL = function(planName_nl_NL) {
	this.planName_nl_NL = planName_nl_NL;
	return this;
};

method.planName_pt_BR = function(planName_pt_BR) {
	this.planName_pt_BR = planName_pt_BR;
	return this;
};

method.planName_pt_PT = function(planName_pt_PT) {
	this.planName_pt_PT = planName_pt_PT;
	return this;
};

method.planName_ru_RU = function(planName_ru_RU) {
	this.planName_ru_RU = planName_ru_RU;
	return this;
};

method.planName_zh_CN = function(planName_zh_CN) {
	this.planName_zh_CN = planName_zh_CN;
	return this;
};

method.planName_zh_TW = function(planName_zh_TW) {
	this.planName_zh_TW = planName_zh_TW;
	return this;
};

method.premiumType = function(premiumType) {
	this.premiumType = premiumType;
	return this;
};

method.provider = function(provider) {
	this.provider = provider;
	return this;
};

method.coverageOptions = function(coverageOptions) {
	this.coverageOptions = coverageOptions;
	return this;
};

method.insurancePlanUSA = function(insurancePlanUSA) {
	this.insurancePlanUSA = insurancePlanUSA;
	return this;
};

method.providerNav = function(providerNav) {
	this.providerNav = providerNav;
	return this;
};

method.build = function() {
	return {
		country: this.country,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		effectiveStartDate: this.effectiveStartDate,
		eligibilityRuleForCoverage: this.eligibilityRuleForCoverage,
		employeeContribution: this.employeeContribution,
		employerContribution: this.employerContribution,
		frequency: this.frequency,
		id: this.id,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemCreatedBy: this.mdfSystemCreatedBy,
		mdfSystemCreatedDate: this.mdfSystemCreatedDate,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemLastModifiedBy: this.mdfSystemLastModifiedBy,
		mdfSystemLastModifiedDate: this.mdfSystemLastModifiedDate,
		mdfSystemLastModifiedDateWithTZ: this.mdfSystemLastModifiedDateWithTZ,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemStatus: this.mdfSystemStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		planName_de_DE: this.planName_de_DE,
		planName_defaultValue: this.planName_defaultValue,
		planName_en_GB: this.planName_en_GB,
		planName_en_US: this.planName_en_US,
		planName_es_ES: this.planName_es_ES,
		planName_fr_FR: this.planName_fr_FR,
		planName_ja_JP: this.planName_ja_JP,
		planName_ko_KR: this.planName_ko_KR,
		planName_localized: this.planName_localized,
		planName_nl_NL: this.planName_nl_NL,
		planName_pt_BR: this.planName_pt_BR,
		planName_pt_PT: this.planName_pt_PT,
		planName_ru_RU: this.planName_ru_RU,
		planName_zh_CN: this.planName_zh_CN,
		planName_zh_TW: this.planName_zh_TW,
		premiumType: this.premiumType,
		provider: this.provider,
		coverageOptions: this.coverageOptions,
		insurancePlanUSA: this.insurancePlanUSA,
		providerNav: this.providerNav
	};
};

module.exports = BenefitInsurancePlanEntityBuilder;
