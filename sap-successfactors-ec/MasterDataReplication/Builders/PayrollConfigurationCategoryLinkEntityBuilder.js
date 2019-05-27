var method = PayrollConfigurationCategoryLinkEntityBuilder.prototype;

function PayrollConfigurationCategoryLinkEntityBuilder() {

}

method.PayrollConfigurationCategory_externalCode = function(PayrollConfigurationCategory_externalCode) {
	this.PayrollConfigurationCategory_externalCode = PayrollConfigurationCategory_externalCode;
	return this;
};

method.PayrollSystemConfiguration_externalCode = function(PayrollSystemConfiguration_externalCode) {
	this.PayrollSystemConfiguration_externalCode = PayrollSystemConfiguration_externalCode;
	return this;
};

method.adminService = function(adminService) {
	this.adminService = adminService;
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

method.externalLinkName_de_DE = function(externalLinkName_de_DE) {
	this.externalLinkName_de_DE = externalLinkName_de_DE;
	return this;
};

method.externalLinkName_defaultValue = function(externalLinkName_defaultValue) {
	this.externalLinkName_defaultValue = externalLinkName_defaultValue;
	return this;
};

method.externalLinkName_en_GB = function(externalLinkName_en_GB) {
	this.externalLinkName_en_GB = externalLinkName_en_GB;
	return this;
};

method.externalLinkName_en_US = function(externalLinkName_en_US) {
	this.externalLinkName_en_US = externalLinkName_en_US;
	return this;
};

method.externalLinkName_es_ES = function(externalLinkName_es_ES) {
	this.externalLinkName_es_ES = externalLinkName_es_ES;
	return this;
};

method.externalLinkName_fr_FR = function(externalLinkName_fr_FR) {
	this.externalLinkName_fr_FR = externalLinkName_fr_FR;
	return this;
};

method.externalLinkName_ja_JP = function(externalLinkName_ja_JP) {
	this.externalLinkName_ja_JP = externalLinkName_ja_JP;
	return this;
};

method.externalLinkName_ko_KR = function(externalLinkName_ko_KR) {
	this.externalLinkName_ko_KR = externalLinkName_ko_KR;
	return this;
};

method.externalLinkName_localized = function(externalLinkName_localized) {
	this.externalLinkName_localized = externalLinkName_localized;
	return this;
};

method.externalLinkName_nl_NL = function(externalLinkName_nl_NL) {
	this.externalLinkName_nl_NL = externalLinkName_nl_NL;
	return this;
};

method.externalLinkName_pt_BR = function(externalLinkName_pt_BR) {
	this.externalLinkName_pt_BR = externalLinkName_pt_BR;
	return this;
};

method.externalLinkName_pt_PT = function(externalLinkName_pt_PT) {
	this.externalLinkName_pt_PT = externalLinkName_pt_PT;
	return this;
};

method.externalLinkName_ru_RU = function(externalLinkName_ru_RU) {
	this.externalLinkName_ru_RU = externalLinkName_ru_RU;
	return this;
};

method.externalLinkName_zh_CN = function(externalLinkName_zh_CN) {
	this.externalLinkName_zh_CN = externalLinkName_zh_CN;
	return this;
};

method.externalLinkName_zh_TW = function(externalLinkName_zh_TW) {
	this.externalLinkName_zh_TW = externalLinkName_zh_TW;
	return this;
};

method.infotypeNumber = function(infotypeNumber) {
	this.infotypeNumber = infotypeNumber;
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

method.selfService = function(selfService) {
	this.selfService = selfService;
	return this;
};

method.service = function(service) {
	this.service = service;
	return this;
};

method.typeOfUrl = function(typeOfUrl) {
	this.typeOfUrl = typeOfUrl;
	return this;
};

method.url = function(url) {
	this.url = url;
	return this;
};

method.build = function() {
	return {
		PayrollConfigurationCategory_externalCode: this.PayrollConfigurationCategory_externalCode,
		PayrollSystemConfiguration_externalCode: this.PayrollSystemConfiguration_externalCode,
		adminService: this.adminService,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		externalCode: this.externalCode,
		externalLinkName_de_DE: this.externalLinkName_de_DE,
		externalLinkName_defaultValue: this.externalLinkName_defaultValue,
		externalLinkName_en_GB: this.externalLinkName_en_GB,
		externalLinkName_en_US: this.externalLinkName_en_US,
		externalLinkName_es_ES: this.externalLinkName_es_ES,
		externalLinkName_fr_FR: this.externalLinkName_fr_FR,
		externalLinkName_ja_JP: this.externalLinkName_ja_JP,
		externalLinkName_ko_KR: this.externalLinkName_ko_KR,
		externalLinkName_localized: this.externalLinkName_localized,
		externalLinkName_nl_NL: this.externalLinkName_nl_NL,
		externalLinkName_pt_BR: this.externalLinkName_pt_BR,
		externalLinkName_pt_PT: this.externalLinkName_pt_PT,
		externalLinkName_ru_RU: this.externalLinkName_ru_RU,
		externalLinkName_zh_CN: this.externalLinkName_zh_CN,
		externalLinkName_zh_TW: this.externalLinkName_zh_TW,
		infotypeNumber: this.infotypeNumber,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		selfService: this.selfService,
		service: this.service,
		typeOfUrl: this.typeOfUrl,
		url: this.url
	};
};

module.exports = PayrollConfigurationCategoryLinkEntityBuilder;
