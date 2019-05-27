var method = RelevantIndustryEntityEntityBuilder.prototype;

function RelevantIndustryEntityEntityBuilder() {

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

method.effectiveEndDate = function(effectiveEndDate) {
	this.effectiveEndDate = effectiveEndDate;
	return this;
};

method.effectiveStartDate = function(effectiveStartDate) {
	this.effectiveStartDate = effectiveStartDate;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.industry_de_DE = function(industry_de_DE) {
	this.industry_de_DE = industry_de_DE;
	return this;
};

method.industry_defaultValue = function(industry_defaultValue) {
	this.industry_defaultValue = industry_defaultValue;
	return this;
};

method.industry_en_GB = function(industry_en_GB) {
	this.industry_en_GB = industry_en_GB;
	return this;
};

method.industry_en_US = function(industry_en_US) {
	this.industry_en_US = industry_en_US;
	return this;
};

method.industry_es_ES = function(industry_es_ES) {
	this.industry_es_ES = industry_es_ES;
	return this;
};

method.industry_fr_FR = function(industry_fr_FR) {
	this.industry_fr_FR = industry_fr_FR;
	return this;
};

method.industry_ja_JP = function(industry_ja_JP) {
	this.industry_ja_JP = industry_ja_JP;
	return this;
};

method.industry_ko_KR = function(industry_ko_KR) {
	this.industry_ko_KR = industry_ko_KR;
	return this;
};

method.industry_localized = function(industry_localized) {
	this.industry_localized = industry_localized;
	return this;
};

method.industry_nl_NL = function(industry_nl_NL) {
	this.industry_nl_NL = industry_nl_NL;
	return this;
};

method.industry_pt_BR = function(industry_pt_BR) {
	this.industry_pt_BR = industry_pt_BR;
	return this;
};

method.industry_pt_PT = function(industry_pt_PT) {
	this.industry_pt_PT = industry_pt_PT;
	return this;
};

method.industry_ru_RU = function(industry_ru_RU) {
	this.industry_ru_RU = industry_ru_RU;
	return this;
};

method.industry_zh_CN = function(industry_zh_CN) {
	this.industry_zh_CN = industry_zh_CN;
	return this;
};

method.industry_zh_TW = function(industry_zh_TW) {
	this.industry_zh_TW = industry_zh_TW;
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

method.mdfSystemVersionId = function(mdfSystemVersionId) {
	this.mdfSystemVersionId = mdfSystemVersionId;
	return this;
};

method.status = function(status) {
	this.status = status;
	return this;
};

method.subModule = function(subModule) {
	this.subModule = subModule;
	return this;
};

method.transactionSequence = function(transactionSequence) {
	this.transactionSequence = transactionSequence;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		effectiveEndDate: this.effectiveEndDate,
		effectiveStartDate: this.effectiveStartDate,
		externalCode: this.externalCode,
		industry_de_DE: this.industry_de_DE,
		industry_defaultValue: this.industry_defaultValue,
		industry_en_GB: this.industry_en_GB,
		industry_en_US: this.industry_en_US,
		industry_es_ES: this.industry_es_ES,
		industry_fr_FR: this.industry_fr_FR,
		industry_ja_JP: this.industry_ja_JP,
		industry_ko_KR: this.industry_ko_KR,
		industry_localized: this.industry_localized,
		industry_nl_NL: this.industry_nl_NL,
		industry_pt_BR: this.industry_pt_BR,
		industry_pt_PT: this.industry_pt_PT,
		industry_ru_RU: this.industry_ru_RU,
		industry_zh_CN: this.industry_zh_CN,
		industry_zh_TW: this.industry_zh_TW,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedDateWithTZ: this.lastModifiedDateWithTZ,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemVersionId: this.mdfSystemVersionId,
		status: this.status,
		subModule: this.subModule,
		transactionSequence: this.transactionSequence
	};
};

module.exports = RelevantIndustryEntityEntityBuilder;
