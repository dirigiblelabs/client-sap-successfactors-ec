var method = EducationMajorEntityEntityBuilder.prototype;

function EducationMajorEntityEntityBuilder() {

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

method.major_de_DE = function(major_de_DE) {
	this.major_de_DE = major_de_DE;
	return this;
};

method.major_defaultValue = function(major_defaultValue) {
	this.major_defaultValue = major_defaultValue;
	return this;
};

method.major_en_GB = function(major_en_GB) {
	this.major_en_GB = major_en_GB;
	return this;
};

method.major_en_US = function(major_en_US) {
	this.major_en_US = major_en_US;
	return this;
};

method.major_es_ES = function(major_es_ES) {
	this.major_es_ES = major_es_ES;
	return this;
};

method.major_fr_FR = function(major_fr_FR) {
	this.major_fr_FR = major_fr_FR;
	return this;
};

method.major_ja_JP = function(major_ja_JP) {
	this.major_ja_JP = major_ja_JP;
	return this;
};

method.major_ko_KR = function(major_ko_KR) {
	this.major_ko_KR = major_ko_KR;
	return this;
};

method.major_localized = function(major_localized) {
	this.major_localized = major_localized;
	return this;
};

method.major_nl_NL = function(major_nl_NL) {
	this.major_nl_NL = major_nl_NL;
	return this;
};

method.major_pt_BR = function(major_pt_BR) {
	this.major_pt_BR = major_pt_BR;
	return this;
};

method.major_pt_PT = function(major_pt_PT) {
	this.major_pt_PT = major_pt_PT;
	return this;
};

method.major_ru_RU = function(major_ru_RU) {
	this.major_ru_RU = major_ru_RU;
	return this;
};

method.major_zh_CN = function(major_zh_CN) {
	this.major_zh_CN = major_zh_CN;
	return this;
};

method.major_zh_TW = function(major_zh_TW) {
	this.major_zh_TW = major_zh_TW;
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
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedDateWithTZ: this.lastModifiedDateWithTZ,
		major_de_DE: this.major_de_DE,
		major_defaultValue: this.major_defaultValue,
		major_en_GB: this.major_en_GB,
		major_en_US: this.major_en_US,
		major_es_ES: this.major_es_ES,
		major_fr_FR: this.major_fr_FR,
		major_ja_JP: this.major_ja_JP,
		major_ko_KR: this.major_ko_KR,
		major_localized: this.major_localized,
		major_nl_NL: this.major_nl_NL,
		major_pt_BR: this.major_pt_BR,
		major_pt_PT: this.major_pt_PT,
		major_ru_RU: this.major_ru_RU,
		major_zh_CN: this.major_zh_CN,
		major_zh_TW: this.major_zh_TW,
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

module.exports = EducationMajorEntityEntityBuilder;
