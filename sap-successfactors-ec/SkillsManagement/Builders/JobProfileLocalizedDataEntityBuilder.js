var method = JobProfileLocalizedDataEntityBuilder.prototype;

function JobProfileLocalizedDataEntityBuilder() {

}

method.JobProfile_externalCode = function(JobProfile_externalCode) {
	this.JobProfile_externalCode = JobProfile_externalCode;
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

method.desc_de_DE = function(desc_de_DE) {
	this.desc_de_DE = desc_de_DE;
	return this;
};

method.desc_defaultValue = function(desc_defaultValue) {
	this.desc_defaultValue = desc_defaultValue;
	return this;
};

method.desc_en_GB = function(desc_en_GB) {
	this.desc_en_GB = desc_en_GB;
	return this;
};

method.desc_en_US = function(desc_en_US) {
	this.desc_en_US = desc_en_US;
	return this;
};

method.desc_es_ES = function(desc_es_ES) {
	this.desc_es_ES = desc_es_ES;
	return this;
};

method.desc_fr_FR = function(desc_fr_FR) {
	this.desc_fr_FR = desc_fr_FR;
	return this;
};

method.desc_ja_JP = function(desc_ja_JP) {
	this.desc_ja_JP = desc_ja_JP;
	return this;
};

method.desc_ko_KR = function(desc_ko_KR) {
	this.desc_ko_KR = desc_ko_KR;
	return this;
};

method.desc_localized = function(desc_localized) {
	this.desc_localized = desc_localized;
	return this;
};

method.desc_nl_NL = function(desc_nl_NL) {
	this.desc_nl_NL = desc_nl_NL;
	return this;
};

method.desc_pt_BR = function(desc_pt_BR) {
	this.desc_pt_BR = desc_pt_BR;
	return this;
};

method.desc_pt_PT = function(desc_pt_PT) {
	this.desc_pt_PT = desc_pt_PT;
	return this;
};

method.desc_ru_RU = function(desc_ru_RU) {
	this.desc_ru_RU = desc_ru_RU;
	return this;
};

method.desc_zh_CN = function(desc_zh_CN) {
	this.desc_zh_CN = desc_zh_CN;
	return this;
};

method.desc_zh_TW = function(desc_zh_TW) {
	this.desc_zh_TW = desc_zh_TW;
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

method.sectionId = function(sectionId) {
	this.sectionId = sectionId;
	return this;
};

method.sectionType = function(sectionType) {
	this.sectionType = sectionType;
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
		JobProfile_externalCode: this.JobProfile_externalCode,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		desc_de_DE: this.desc_de_DE,
		desc_defaultValue: this.desc_defaultValue,
		desc_en_GB: this.desc_en_GB,
		desc_en_US: this.desc_en_US,
		desc_es_ES: this.desc_es_ES,
		desc_fr_FR: this.desc_fr_FR,
		desc_ja_JP: this.desc_ja_JP,
		desc_ko_KR: this.desc_ko_KR,
		desc_localized: this.desc_localized,
		desc_nl_NL: this.desc_nl_NL,
		desc_pt_BR: this.desc_pt_BR,
		desc_pt_PT: this.desc_pt_PT,
		desc_ru_RU: this.desc_ru_RU,
		desc_zh_CN: this.desc_zh_CN,
		desc_zh_TW: this.desc_zh_TW,
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
		sectionId: this.sectionId,
		sectionType: this.sectionType,
		status: this.status,
		subModule: this.subModule,
		transactionSequence: this.transactionSequence
	};
};

module.exports = JobProfileLocalizedDataEntityBuilder;
