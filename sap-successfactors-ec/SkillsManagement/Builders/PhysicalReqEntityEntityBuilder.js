var method = PhysicalReqEntityEntityBuilder.prototype;

function PhysicalReqEntityEntityBuilder() {

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

method.description_de_DE = function(description_de_DE) {
	this.description_de_DE = description_de_DE;
	return this;
};

method.description_defaultValue = function(description_defaultValue) {
	this.description_defaultValue = description_defaultValue;
	return this;
};

method.description_en_GB = function(description_en_GB) {
	this.description_en_GB = description_en_GB;
	return this;
};

method.description_en_US = function(description_en_US) {
	this.description_en_US = description_en_US;
	return this;
};

method.description_es_ES = function(description_es_ES) {
	this.description_es_ES = description_es_ES;
	return this;
};

method.description_fr_FR = function(description_fr_FR) {
	this.description_fr_FR = description_fr_FR;
	return this;
};

method.description_ja_JP = function(description_ja_JP) {
	this.description_ja_JP = description_ja_JP;
	return this;
};

method.description_ko_KR = function(description_ko_KR) {
	this.description_ko_KR = description_ko_KR;
	return this;
};

method.description_localized = function(description_localized) {
	this.description_localized = description_localized;
	return this;
};

method.description_nl_NL = function(description_nl_NL) {
	this.description_nl_NL = description_nl_NL;
	return this;
};

method.description_pt_BR = function(description_pt_BR) {
	this.description_pt_BR = description_pt_BR;
	return this;
};

method.description_pt_PT = function(description_pt_PT) {
	this.description_pt_PT = description_pt_PT;
	return this;
};

method.description_ru_RU = function(description_ru_RU) {
	this.description_ru_RU = description_ru_RU;
	return this;
};

method.description_zh_CN = function(description_zh_CN) {
	this.description_zh_CN = description_zh_CN;
	return this;
};

method.description_zh_TW = function(description_zh_TW) {
	this.description_zh_TW = description_zh_TW;
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

method.requirement_de_DE = function(requirement_de_DE) {
	this.requirement_de_DE = requirement_de_DE;
	return this;
};

method.requirement_defaultValue = function(requirement_defaultValue) {
	this.requirement_defaultValue = requirement_defaultValue;
	return this;
};

method.requirement_en_GB = function(requirement_en_GB) {
	this.requirement_en_GB = requirement_en_GB;
	return this;
};

method.requirement_en_US = function(requirement_en_US) {
	this.requirement_en_US = requirement_en_US;
	return this;
};

method.requirement_es_ES = function(requirement_es_ES) {
	this.requirement_es_ES = requirement_es_ES;
	return this;
};

method.requirement_fr_FR = function(requirement_fr_FR) {
	this.requirement_fr_FR = requirement_fr_FR;
	return this;
};

method.requirement_ja_JP = function(requirement_ja_JP) {
	this.requirement_ja_JP = requirement_ja_JP;
	return this;
};

method.requirement_ko_KR = function(requirement_ko_KR) {
	this.requirement_ko_KR = requirement_ko_KR;
	return this;
};

method.requirement_localized = function(requirement_localized) {
	this.requirement_localized = requirement_localized;
	return this;
};

method.requirement_nl_NL = function(requirement_nl_NL) {
	this.requirement_nl_NL = requirement_nl_NL;
	return this;
};

method.requirement_pt_BR = function(requirement_pt_BR) {
	this.requirement_pt_BR = requirement_pt_BR;
	return this;
};

method.requirement_pt_PT = function(requirement_pt_PT) {
	this.requirement_pt_PT = requirement_pt_PT;
	return this;
};

method.requirement_ru_RU = function(requirement_ru_RU) {
	this.requirement_ru_RU = requirement_ru_RU;
	return this;
};

method.requirement_zh_CN = function(requirement_zh_CN) {
	this.requirement_zh_CN = requirement_zh_CN;
	return this;
};

method.requirement_zh_TW = function(requirement_zh_TW) {
	this.requirement_zh_TW = requirement_zh_TW;
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
		description_de_DE: this.description_de_DE,
		description_defaultValue: this.description_defaultValue,
		description_en_GB: this.description_en_GB,
		description_en_US: this.description_en_US,
		description_es_ES: this.description_es_ES,
		description_fr_FR: this.description_fr_FR,
		description_ja_JP: this.description_ja_JP,
		description_ko_KR: this.description_ko_KR,
		description_localized: this.description_localized,
		description_nl_NL: this.description_nl_NL,
		description_pt_BR: this.description_pt_BR,
		description_pt_PT: this.description_pt_PT,
		description_ru_RU: this.description_ru_RU,
		description_zh_CN: this.description_zh_CN,
		description_zh_TW: this.description_zh_TW,
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
		requirement_de_DE: this.requirement_de_DE,
		requirement_defaultValue: this.requirement_defaultValue,
		requirement_en_GB: this.requirement_en_GB,
		requirement_en_US: this.requirement_en_US,
		requirement_es_ES: this.requirement_es_ES,
		requirement_fr_FR: this.requirement_fr_FR,
		requirement_ja_JP: this.requirement_ja_JP,
		requirement_ko_KR: this.requirement_ko_KR,
		requirement_localized: this.requirement_localized,
		requirement_nl_NL: this.requirement_nl_NL,
		requirement_pt_BR: this.requirement_pt_BR,
		requirement_pt_PT: this.requirement_pt_PT,
		requirement_ru_RU: this.requirement_ru_RU,
		requirement_zh_CN: this.requirement_zh_CN,
		requirement_zh_TW: this.requirement_zh_TW,
		status: this.status,
		subModule: this.subModule,
		transactionSequence: this.transactionSequence
	};
};

module.exports = PhysicalReqEntityEntityBuilder;
