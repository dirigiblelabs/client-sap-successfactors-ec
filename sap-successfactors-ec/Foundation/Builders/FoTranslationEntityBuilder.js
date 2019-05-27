var method = FoTranslationEntityBuilder.prototype;

function FoTranslationEntityBuilder() {

}

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

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.foField = function(foField) {
	this.foField = foField;
	return this;
};

method.foObjectID = function(foObjectID) {
	this.foObjectID = foObjectID;
	return this;
};

method.foType = function(foType) {
	this.foType = foType;
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

method.value_de_DE = function(value_de_DE) {
	this.value_de_DE = value_de_DE;
	return this;
};

method.value_defaultValue = function(value_defaultValue) {
	this.value_defaultValue = value_defaultValue;
	return this;
};

method.value_en_GB = function(value_en_GB) {
	this.value_en_GB = value_en_GB;
	return this;
};

method.value_en_US = function(value_en_US) {
	this.value_en_US = value_en_US;
	return this;
};

method.value_es_ES = function(value_es_ES) {
	this.value_es_ES = value_es_ES;
	return this;
};

method.value_fr_FR = function(value_fr_FR) {
	this.value_fr_FR = value_fr_FR;
	return this;
};

method.value_ja_JP = function(value_ja_JP) {
	this.value_ja_JP = value_ja_JP;
	return this;
};

method.value_ko_KR = function(value_ko_KR) {
	this.value_ko_KR = value_ko_KR;
	return this;
};

method.value_localized = function(value_localized) {
	this.value_localized = value_localized;
	return this;
};

method.value_nl_NL = function(value_nl_NL) {
	this.value_nl_NL = value_nl_NL;
	return this;
};

method.value_pt_BR = function(value_pt_BR) {
	this.value_pt_BR = value_pt_BR;
	return this;
};

method.value_pt_PT = function(value_pt_PT) {
	this.value_pt_PT = value_pt_PT;
	return this;
};

method.value_ru_RU = function(value_ru_RU) {
	this.value_ru_RU = value_ru_RU;
	return this;
};

method.value_zh_CN = function(value_zh_CN) {
	this.value_zh_CN = value_zh_CN;
	return this;
};

method.value_zh_TW = function(value_zh_TW) {
	this.value_zh_TW = value_zh_TW;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		externalCode: this.externalCode,
		foField: this.foField,
		foObjectID: this.foObjectID,
		foType: this.foType,
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
		value_de_DE: this.value_de_DE,
		value_defaultValue: this.value_defaultValue,
		value_en_GB: this.value_en_GB,
		value_en_US: this.value_en_US,
		value_es_ES: this.value_es_ES,
		value_fr_FR: this.value_fr_FR,
		value_ja_JP: this.value_ja_JP,
		value_ko_KR: this.value_ko_KR,
		value_localized: this.value_localized,
		value_nl_NL: this.value_nl_NL,
		value_pt_BR: this.value_pt_BR,
		value_pt_PT: this.value_pt_PT,
		value_ru_RU: this.value_ru_RU,
		value_zh_CN: this.value_zh_CN,
		value_zh_TW: this.value_zh_TW
	};
};

module.exports = FoTranslationEntityBuilder;
