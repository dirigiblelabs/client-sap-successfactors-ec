var method = BenefitEventEntityBuilder.prototype;

function BenefitEventEntityBuilder() {

}

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

method.eventCode = function(eventCode) {
	this.eventCode = eventCode;
	return this;
};

method.eventId = function(eventId) {
	this.eventId = eventId;
	return this;
};

method.eventName_de_DE = function(eventName_de_DE) {
	this.eventName_de_DE = eventName_de_DE;
	return this;
};

method.eventName_defaultValue = function(eventName_defaultValue) {
	this.eventName_defaultValue = eventName_defaultValue;
	return this;
};

method.eventName_en_GB = function(eventName_en_GB) {
	this.eventName_en_GB = eventName_en_GB;
	return this;
};

method.eventName_en_US = function(eventName_en_US) {
	this.eventName_en_US = eventName_en_US;
	return this;
};

method.eventName_es_ES = function(eventName_es_ES) {
	this.eventName_es_ES = eventName_es_ES;
	return this;
};

method.eventName_fr_FR = function(eventName_fr_FR) {
	this.eventName_fr_FR = eventName_fr_FR;
	return this;
};

method.eventName_ja_JP = function(eventName_ja_JP) {
	this.eventName_ja_JP = eventName_ja_JP;
	return this;
};

method.eventName_ko_KR = function(eventName_ko_KR) {
	this.eventName_ko_KR = eventName_ko_KR;
	return this;
};

method.eventName_localized = function(eventName_localized) {
	this.eventName_localized = eventName_localized;
	return this;
};

method.eventName_nl_NL = function(eventName_nl_NL) {
	this.eventName_nl_NL = eventName_nl_NL;
	return this;
};

method.eventName_pt_BR = function(eventName_pt_BR) {
	this.eventName_pt_BR = eventName_pt_BR;
	return this;
};

method.eventName_pt_PT = function(eventName_pt_PT) {
	this.eventName_pt_PT = eventName_pt_PT;
	return this;
};

method.eventName_ru_RU = function(eventName_ru_RU) {
	this.eventName_ru_RU = eventName_ru_RU;
	return this;
};

method.eventName_zh_CN = function(eventName_zh_CN) {
	this.eventName_zh_CN = eventName_zh_CN;
	return this;
};

method.eventName_zh_TW = function(eventName_zh_TW) {
	this.eventName_zh_TW = eventName_zh_TW;
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

method.mdfSystemEffectiveEndDate = function(mdfSystemEffectiveEndDate) {
	this.mdfSystemEffectiveEndDate = mdfSystemEffectiveEndDate;
	return this;
};

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		effectiveStartDate: this.effectiveStartDate,
		eventCode: this.eventCode,
		eventId: this.eventId,
		eventName_de_DE: this.eventName_de_DE,
		eventName_defaultValue: this.eventName_defaultValue,
		eventName_en_GB: this.eventName_en_GB,
		eventName_en_US: this.eventName_en_US,
		eventName_es_ES: this.eventName_es_ES,
		eventName_fr_FR: this.eventName_fr_FR,
		eventName_ja_JP: this.eventName_ja_JP,
		eventName_ko_KR: this.eventName_ko_KR,
		eventName_localized: this.eventName_localized,
		eventName_nl_NL: this.eventName_nl_NL,
		eventName_pt_BR: this.eventName_pt_BR,
		eventName_pt_PT: this.eventName_pt_PT,
		eventName_ru_RU: this.eventName_ru_RU,
		eventName_zh_CN: this.eventName_zh_CN,
		eventName_zh_TW: this.eventName_zh_TW,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus
	};
};

module.exports = BenefitEventEntityBuilder;
