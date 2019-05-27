var method = PayrollConfigurationCategoryEntityBuilder.prototype;

function PayrollConfigurationCategoryEntityBuilder() {

}

method.PayrollSystemConfiguration_externalCode = function(PayrollSystemConfiguration_externalCode) {
	this.PayrollSystemConfiguration_externalCode = PayrollSystemConfiguration_externalCode;
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

method.externalCategoryName_de_DE = function(externalCategoryName_de_DE) {
	this.externalCategoryName_de_DE = externalCategoryName_de_DE;
	return this;
};

method.externalCategoryName_defaultValue = function(externalCategoryName_defaultValue) {
	this.externalCategoryName_defaultValue = externalCategoryName_defaultValue;
	return this;
};

method.externalCategoryName_en_GB = function(externalCategoryName_en_GB) {
	this.externalCategoryName_en_GB = externalCategoryName_en_GB;
	return this;
};

method.externalCategoryName_en_US = function(externalCategoryName_en_US) {
	this.externalCategoryName_en_US = externalCategoryName_en_US;
	return this;
};

method.externalCategoryName_es_ES = function(externalCategoryName_es_ES) {
	this.externalCategoryName_es_ES = externalCategoryName_es_ES;
	return this;
};

method.externalCategoryName_fr_FR = function(externalCategoryName_fr_FR) {
	this.externalCategoryName_fr_FR = externalCategoryName_fr_FR;
	return this;
};

method.externalCategoryName_ja_JP = function(externalCategoryName_ja_JP) {
	this.externalCategoryName_ja_JP = externalCategoryName_ja_JP;
	return this;
};

method.externalCategoryName_ko_KR = function(externalCategoryName_ko_KR) {
	this.externalCategoryName_ko_KR = externalCategoryName_ko_KR;
	return this;
};

method.externalCategoryName_localized = function(externalCategoryName_localized) {
	this.externalCategoryName_localized = externalCategoryName_localized;
	return this;
};

method.externalCategoryName_nl_NL = function(externalCategoryName_nl_NL) {
	this.externalCategoryName_nl_NL = externalCategoryName_nl_NL;
	return this;
};

method.externalCategoryName_pt_BR = function(externalCategoryName_pt_BR) {
	this.externalCategoryName_pt_BR = externalCategoryName_pt_BR;
	return this;
};

method.externalCategoryName_pt_PT = function(externalCategoryName_pt_PT) {
	this.externalCategoryName_pt_PT = externalCategoryName_pt_PT;
	return this;
};

method.externalCategoryName_ru_RU = function(externalCategoryName_ru_RU) {
	this.externalCategoryName_ru_RU = externalCategoryName_ru_RU;
	return this;
};

method.externalCategoryName_zh_CN = function(externalCategoryName_zh_CN) {
	this.externalCategoryName_zh_CN = externalCategoryName_zh_CN;
	return this;
};

method.externalCategoryName_zh_TW = function(externalCategoryName_zh_TW) {
	this.externalCategoryName_zh_TW = externalCategoryName_zh_TW;
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

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.links = function(links) {
	this.links = links;
	return this;
};

method.build = function() {
	return {
		PayrollSystemConfiguration_externalCode: this.PayrollSystemConfiguration_externalCode,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		externalCategoryName_de_DE: this.externalCategoryName_de_DE,
		externalCategoryName_defaultValue: this.externalCategoryName_defaultValue,
		externalCategoryName_en_GB: this.externalCategoryName_en_GB,
		externalCategoryName_en_US: this.externalCategoryName_en_US,
		externalCategoryName_es_ES: this.externalCategoryName_es_ES,
		externalCategoryName_fr_FR: this.externalCategoryName_fr_FR,
		externalCategoryName_ja_JP: this.externalCategoryName_ja_JP,
		externalCategoryName_ko_KR: this.externalCategoryName_ko_KR,
		externalCategoryName_localized: this.externalCategoryName_localized,
		externalCategoryName_nl_NL: this.externalCategoryName_nl_NL,
		externalCategoryName_pt_BR: this.externalCategoryName_pt_BR,
		externalCategoryName_pt_PT: this.externalCategoryName_pt_PT,
		externalCategoryName_ru_RU: this.externalCategoryName_ru_RU,
		externalCategoryName_zh_CN: this.externalCategoryName_zh_CN,
		externalCategoryName_zh_TW: this.externalCategoryName_zh_TW,
		externalCode: this.externalCode,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		links: this.links
	};
};

module.exports = PayrollConfigurationCategoryEntityBuilder;
