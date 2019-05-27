var method = EmploymentConditionEntityEntityBuilder.prototype;

function EmploymentConditionEntityEntityBuilder() {

}

method.condition_de_DE = function(condition_de_DE) {
	this.condition_de_DE = condition_de_DE;
	return this;
};

method.condition_defaultValue = function(condition_defaultValue) {
	this.condition_defaultValue = condition_defaultValue;
	return this;
};

method.condition_en_GB = function(condition_en_GB) {
	this.condition_en_GB = condition_en_GB;
	return this;
};

method.condition_en_US = function(condition_en_US) {
	this.condition_en_US = condition_en_US;
	return this;
};

method.condition_es_ES = function(condition_es_ES) {
	this.condition_es_ES = condition_es_ES;
	return this;
};

method.condition_fr_FR = function(condition_fr_FR) {
	this.condition_fr_FR = condition_fr_FR;
	return this;
};

method.condition_ja_JP = function(condition_ja_JP) {
	this.condition_ja_JP = condition_ja_JP;
	return this;
};

method.condition_ko_KR = function(condition_ko_KR) {
	this.condition_ko_KR = condition_ko_KR;
	return this;
};

method.condition_localized = function(condition_localized) {
	this.condition_localized = condition_localized;
	return this;
};

method.condition_nl_NL = function(condition_nl_NL) {
	this.condition_nl_NL = condition_nl_NL;
	return this;
};

method.condition_pt_BR = function(condition_pt_BR) {
	this.condition_pt_BR = condition_pt_BR;
	return this;
};

method.condition_pt_PT = function(condition_pt_PT) {
	this.condition_pt_PT = condition_pt_PT;
	return this;
};

method.condition_ru_RU = function(condition_ru_RU) {
	this.condition_ru_RU = condition_ru_RU;
	return this;
};

method.condition_zh_CN = function(condition_zh_CN) {
	this.condition_zh_CN = condition_zh_CN;
	return this;
};

method.condition_zh_TW = function(condition_zh_TW) {
	this.condition_zh_TW = condition_zh_TW;
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
		condition_de_DE: this.condition_de_DE,
		condition_defaultValue: this.condition_defaultValue,
		condition_en_GB: this.condition_en_GB,
		condition_en_US: this.condition_en_US,
		condition_es_ES: this.condition_es_ES,
		condition_fr_FR: this.condition_fr_FR,
		condition_ja_JP: this.condition_ja_JP,
		condition_ko_KR: this.condition_ko_KR,
		condition_localized: this.condition_localized,
		condition_nl_NL: this.condition_nl_NL,
		condition_pt_BR: this.condition_pt_BR,
		condition_pt_PT: this.condition_pt_PT,
		condition_ru_RU: this.condition_ru_RU,
		condition_zh_CN: this.condition_zh_CN,
		condition_zh_TW: this.condition_zh_TW,
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

module.exports = EmploymentConditionEntityEntityBuilder;
