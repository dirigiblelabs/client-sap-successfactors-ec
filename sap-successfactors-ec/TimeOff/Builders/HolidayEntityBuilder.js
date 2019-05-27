var method = HolidayEntityBuilder.prototype;

function HolidayEntityBuilder() {

}

method.country = function(country) {
	this.country = country;
	return this;
};

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDate = function(createdDate) {
	this.createdDate = createdDate;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.holidayCode = function(holidayCode) {
	this.holidayCode = holidayCode;
	return this;
};

method.lastModifiedBy = function(lastModifiedBy) {
	this.lastModifiedBy = lastModifiedBy;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.lastModifiedDateWithTZ = function(lastModifiedDateWithTZ) {
	this.lastModifiedDateWithTZ = lastModifiedDateWithTZ;
	return this;
};

method.mdfSystemEffectiveEndDate = function(mdfSystemEffectiveEndDate) {
	this.mdfSystemEffectiveEndDate = mdfSystemEffectiveEndDate;
	return this;
};

method.mdfSystemEffectiveStartDate = function(mdfSystemEffectiveStartDate) {
	this.mdfSystemEffectiveStartDate = mdfSystemEffectiveStartDate;
	return this;
};

method.mdfSystemEntityId = function(mdfSystemEntityId) {
	this.mdfSystemEntityId = mdfSystemEntityId;
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

method.oldName = function(oldName) {
	this.oldName = oldName;
	return this;
};

method.build = function() {
	return {
		country: this.country,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		holidayCode: this.holidayCode,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedDateWithTZ: this.lastModifiedDateWithTZ,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemEffectiveStartDate: this.mdfSystemEffectiveStartDate,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemStatus: this.mdfSystemStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
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
		oldName: this.oldName
	};
};

module.exports = HolidayEntityBuilder;
