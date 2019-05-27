var method = ApprenticeEventTypeEntityBuilder.prototype;

function ApprenticeEventTypeEntityBuilder() {

}

method.apprenticeEventTypeCategory = function(apprenticeEventTypeCategory) {
	this.apprenticeEventTypeCategory = apprenticeEventTypeCategory;
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

method.eventTypeDescription_de_DE = function(eventTypeDescription_de_DE) {
	this.eventTypeDescription_de_DE = eventTypeDescription_de_DE;
	return this;
};

method.eventTypeDescription_defaultValue = function(eventTypeDescription_defaultValue) {
	this.eventTypeDescription_defaultValue = eventTypeDescription_defaultValue;
	return this;
};

method.eventTypeDescription_en_GB = function(eventTypeDescription_en_GB) {
	this.eventTypeDescription_en_GB = eventTypeDescription_en_GB;
	return this;
};

method.eventTypeDescription_en_US = function(eventTypeDescription_en_US) {
	this.eventTypeDescription_en_US = eventTypeDescription_en_US;
	return this;
};

method.eventTypeDescription_es_ES = function(eventTypeDescription_es_ES) {
	this.eventTypeDescription_es_ES = eventTypeDescription_es_ES;
	return this;
};

method.eventTypeDescription_fr_FR = function(eventTypeDescription_fr_FR) {
	this.eventTypeDescription_fr_FR = eventTypeDescription_fr_FR;
	return this;
};

method.eventTypeDescription_ja_JP = function(eventTypeDescription_ja_JP) {
	this.eventTypeDescription_ja_JP = eventTypeDescription_ja_JP;
	return this;
};

method.eventTypeDescription_ko_KR = function(eventTypeDescription_ko_KR) {
	this.eventTypeDescription_ko_KR = eventTypeDescription_ko_KR;
	return this;
};

method.eventTypeDescription_localized = function(eventTypeDescription_localized) {
	this.eventTypeDescription_localized = eventTypeDescription_localized;
	return this;
};

method.eventTypeDescription_nl_NL = function(eventTypeDescription_nl_NL) {
	this.eventTypeDescription_nl_NL = eventTypeDescription_nl_NL;
	return this;
};

method.eventTypeDescription_pt_BR = function(eventTypeDescription_pt_BR) {
	this.eventTypeDescription_pt_BR = eventTypeDescription_pt_BR;
	return this;
};

method.eventTypeDescription_pt_PT = function(eventTypeDescription_pt_PT) {
	this.eventTypeDescription_pt_PT = eventTypeDescription_pt_PT;
	return this;
};

method.eventTypeDescription_ru_RU = function(eventTypeDescription_ru_RU) {
	this.eventTypeDescription_ru_RU = eventTypeDescription_ru_RU;
	return this;
};

method.eventTypeDescription_zh_CN = function(eventTypeDescription_zh_CN) {
	this.eventTypeDescription_zh_CN = eventTypeDescription_zh_CN;
	return this;
};

method.eventTypeDescription_zh_TW = function(eventTypeDescription_zh_TW) {
	this.eventTypeDescription_zh_TW = eventTypeDescription_zh_TW;
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

method.build = function() {
	return {
		apprenticeEventTypeCategory: this.apprenticeEventTypeCategory,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		eventTypeDescription_de_DE: this.eventTypeDescription_de_DE,
		eventTypeDescription_defaultValue: this.eventTypeDescription_defaultValue,
		eventTypeDescription_en_GB: this.eventTypeDescription_en_GB,
		eventTypeDescription_en_US: this.eventTypeDescription_en_US,
		eventTypeDescription_es_ES: this.eventTypeDescription_es_ES,
		eventTypeDescription_fr_FR: this.eventTypeDescription_fr_FR,
		eventTypeDescription_ja_JP: this.eventTypeDescription_ja_JP,
		eventTypeDescription_ko_KR: this.eventTypeDescription_ko_KR,
		eventTypeDescription_localized: this.eventTypeDescription_localized,
		eventTypeDescription_nl_NL: this.eventTypeDescription_nl_NL,
		eventTypeDescription_pt_BR: this.eventTypeDescription_pt_BR,
		eventTypeDescription_pt_PT: this.eventTypeDescription_pt_PT,
		eventTypeDescription_ru_RU: this.eventTypeDescription_ru_RU,
		eventTypeDescription_zh_CN: this.eventTypeDescription_zh_CN,
		eventTypeDescription_zh_TW: this.eventTypeDescription_zh_TW,
		externalCode: this.externalCode,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus
	};
};

module.exports = ApprenticeEventTypeEntityBuilder;
