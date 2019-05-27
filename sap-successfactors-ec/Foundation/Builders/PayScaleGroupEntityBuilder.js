var method = PayScaleGroupEntityBuilder.prototype;

function PayScaleGroupEntityBuilder() {

}

method.code = function(code) {
	this.code = code;
	return this;
};

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

method.externalName_de_DE = function(externalName_de_DE) {
	this.externalName_de_DE = externalName_de_DE;
	return this;
};

method.externalName_defaultValue = function(externalName_defaultValue) {
	this.externalName_defaultValue = externalName_defaultValue;
	return this;
};

method.externalName_en_GB = function(externalName_en_GB) {
	this.externalName_en_GB = externalName_en_GB;
	return this;
};

method.externalName_en_US = function(externalName_en_US) {
	this.externalName_en_US = externalName_en_US;
	return this;
};

method.externalName_es_ES = function(externalName_es_ES) {
	this.externalName_es_ES = externalName_es_ES;
	return this;
};

method.externalName_fr_FR = function(externalName_fr_FR) {
	this.externalName_fr_FR = externalName_fr_FR;
	return this;
};

method.externalName_ja_JP = function(externalName_ja_JP) {
	this.externalName_ja_JP = externalName_ja_JP;
	return this;
};

method.externalName_ko_KR = function(externalName_ko_KR) {
	this.externalName_ko_KR = externalName_ko_KR;
	return this;
};

method.externalName_localized = function(externalName_localized) {
	this.externalName_localized = externalName_localized;
	return this;
};

method.externalName_nl_NL = function(externalName_nl_NL) {
	this.externalName_nl_NL = externalName_nl_NL;
	return this;
};

method.externalName_pt_BR = function(externalName_pt_BR) {
	this.externalName_pt_BR = externalName_pt_BR;
	return this;
};

method.externalName_pt_PT = function(externalName_pt_PT) {
	this.externalName_pt_PT = externalName_pt_PT;
	return this;
};

method.externalName_ru_RU = function(externalName_ru_RU) {
	this.externalName_ru_RU = externalName_ru_RU;
	return this;
};

method.externalName_zh_CN = function(externalName_zh_CN) {
	this.externalName_zh_CN = externalName_zh_CN;
	return this;
};

method.externalName_zh_TW = function(externalName_zh_TW) {
	this.externalName_zh_TW = externalName_zh_TW;
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

method.mdfSystemEffectiveStartDate = function(mdfSystemEffectiveStartDate) {
	this.mdfSystemEffectiveStartDate = mdfSystemEffectiveStartDate;
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

method.payScaleArea = function(payScaleArea) {
	this.payScaleArea = payScaleArea;
	return this;
};

method.payScaleGroup = function(payScaleGroup) {
	this.payScaleGroup = payScaleGroup;
	return this;
};

method.payScaleType = function(payScaleType) {
	this.payScaleType = payScaleType;
	return this;
};

method.payScaleAreaNav = function(payScaleAreaNav) {
	this.payScaleAreaNav = payScaleAreaNav;
	return this;
};

method.payScaleTypeNav = function(payScaleTypeNav) {
	this.payScaleTypeNav = payScaleTypeNav;
	return this;
};

method.build = function() {
	return {
		code: this.code,
		country: this.country,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		externalName_de_DE: this.externalName_de_DE,
		externalName_defaultValue: this.externalName_defaultValue,
		externalName_en_GB: this.externalName_en_GB,
		externalName_en_US: this.externalName_en_US,
		externalName_es_ES: this.externalName_es_ES,
		externalName_fr_FR: this.externalName_fr_FR,
		externalName_ja_JP: this.externalName_ja_JP,
		externalName_ko_KR: this.externalName_ko_KR,
		externalName_localized: this.externalName_localized,
		externalName_nl_NL: this.externalName_nl_NL,
		externalName_pt_BR: this.externalName_pt_BR,
		externalName_pt_PT: this.externalName_pt_PT,
		externalName_ru_RU: this.externalName_ru_RU,
		externalName_zh_CN: this.externalName_zh_CN,
		externalName_zh_TW: this.externalName_zh_TW,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemCreatedBy: this.mdfSystemCreatedBy,
		mdfSystemCreatedDate: this.mdfSystemCreatedDate,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemEffectiveStartDate: this.mdfSystemEffectiveStartDate,
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
		payScaleArea: this.payScaleArea,
		payScaleGroup: this.payScaleGroup,
		payScaleType: this.payScaleType,
		payScaleAreaNav: this.payScaleAreaNav,
		payScaleTypeNav: this.payScaleTypeNav
	};
};

module.exports = PayScaleGroupEntityBuilder;
