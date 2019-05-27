var method = EducationDegreeEntityEntityBuilder.prototype;

function EducationDegreeEntityEntityBuilder() {

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

method.degree_de_DE = function(degree_de_DE) {
	this.degree_de_DE = degree_de_DE;
	return this;
};

method.degree_defaultValue = function(degree_defaultValue) {
	this.degree_defaultValue = degree_defaultValue;
	return this;
};

method.degree_en_GB = function(degree_en_GB) {
	this.degree_en_GB = degree_en_GB;
	return this;
};

method.degree_en_US = function(degree_en_US) {
	this.degree_en_US = degree_en_US;
	return this;
};

method.degree_es_ES = function(degree_es_ES) {
	this.degree_es_ES = degree_es_ES;
	return this;
};

method.degree_fr_FR = function(degree_fr_FR) {
	this.degree_fr_FR = degree_fr_FR;
	return this;
};

method.degree_ja_JP = function(degree_ja_JP) {
	this.degree_ja_JP = degree_ja_JP;
	return this;
};

method.degree_ko_KR = function(degree_ko_KR) {
	this.degree_ko_KR = degree_ko_KR;
	return this;
};

method.degree_localized = function(degree_localized) {
	this.degree_localized = degree_localized;
	return this;
};

method.degree_nl_NL = function(degree_nl_NL) {
	this.degree_nl_NL = degree_nl_NL;
	return this;
};

method.degree_pt_BR = function(degree_pt_BR) {
	this.degree_pt_BR = degree_pt_BR;
	return this;
};

method.degree_pt_PT = function(degree_pt_PT) {
	this.degree_pt_PT = degree_pt_PT;
	return this;
};

method.degree_ru_RU = function(degree_ru_RU) {
	this.degree_ru_RU = degree_ru_RU;
	return this;
};

method.degree_zh_CN = function(degree_zh_CN) {
	this.degree_zh_CN = degree_zh_CN;
	return this;
};

method.degree_zh_TW = function(degree_zh_TW) {
	this.degree_zh_TW = degree_zh_TW;
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
		degree_de_DE: this.degree_de_DE,
		degree_defaultValue: this.degree_defaultValue,
		degree_en_GB: this.degree_en_GB,
		degree_en_US: this.degree_en_US,
		degree_es_ES: this.degree_es_ES,
		degree_fr_FR: this.degree_fr_FR,
		degree_ja_JP: this.degree_ja_JP,
		degree_ko_KR: this.degree_ko_KR,
		degree_localized: this.degree_localized,
		degree_nl_NL: this.degree_nl_NL,
		degree_pt_BR: this.degree_pt_BR,
		degree_pt_PT: this.degree_pt_PT,
		degree_ru_RU: this.degree_ru_RU,
		degree_zh_CN: this.degree_zh_CN,
		degree_zh_TW: this.degree_zh_TW,
		effectiveEndDate: this.effectiveEndDate,
		effectiveStartDate: this.effectiveStartDate,
		externalCode: this.externalCode,
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

module.exports = EducationDegreeEntityEntityBuilder;
