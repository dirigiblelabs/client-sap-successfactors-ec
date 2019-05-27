var method = CompetencyTypeEntityBuilder.prototype;

function CompetencyTypeEntityBuilder() {

}

method.GUID = function(GUID) {
	this.GUID = GUID;
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

method.name_de_DE = function(name_de_DE) {
	this.name_de_DE = name_de_DE;
	return this;
};

method.name_defaultValue = function(name_defaultValue) {
	this.name_defaultValue = name_defaultValue;
	return this;
};

method.name_en_GB = function(name_en_GB) {
	this.name_en_GB = name_en_GB;
	return this;
};

method.name_en_US = function(name_en_US) {
	this.name_en_US = name_en_US;
	return this;
};

method.name_es_ES = function(name_es_ES) {
	this.name_es_ES = name_es_ES;
	return this;
};

method.name_fr_FR = function(name_fr_FR) {
	this.name_fr_FR = name_fr_FR;
	return this;
};

method.name_ja_JP = function(name_ja_JP) {
	this.name_ja_JP = name_ja_JP;
	return this;
};

method.name_ko_KR = function(name_ko_KR) {
	this.name_ko_KR = name_ko_KR;
	return this;
};

method.name_localized = function(name_localized) {
	this.name_localized = name_localized;
	return this;
};

method.name_nl_NL = function(name_nl_NL) {
	this.name_nl_NL = name_nl_NL;
	return this;
};

method.name_pt_BR = function(name_pt_BR) {
	this.name_pt_BR = name_pt_BR;
	return this;
};

method.name_pt_PT = function(name_pt_PT) {
	this.name_pt_PT = name_pt_PT;
	return this;
};

method.name_ru_RU = function(name_ru_RU) {
	this.name_ru_RU = name_ru_RU;
	return this;
};

method.name_zh_CN = function(name_zh_CN) {
	this.name_zh_CN = name_zh_CN;
	return this;
};

method.name_zh_TW = function(name_zh_TW) {
	this.name_zh_TW = name_zh_TW;
	return this;
};

method.subModule = function(subModule) {
	this.subModule = subModule;
	return this;
};

method.build = function() {
	return {
		GUID: this.GUID,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		name_de_DE: this.name_de_DE,
		name_defaultValue: this.name_defaultValue,
		name_en_GB: this.name_en_GB,
		name_en_US: this.name_en_US,
		name_es_ES: this.name_es_ES,
		name_fr_FR: this.name_fr_FR,
		name_ja_JP: this.name_ja_JP,
		name_ko_KR: this.name_ko_KR,
		name_localized: this.name_localized,
		name_nl_NL: this.name_nl_NL,
		name_pt_BR: this.name_pt_BR,
		name_pt_PT: this.name_pt_PT,
		name_ru_RU: this.name_ru_RU,
		name_zh_CN: this.name_zh_CN,
		name_zh_TW: this.name_zh_TW,
		subModule: this.subModule
	};
};

module.exports = CompetencyTypeEntityBuilder;
