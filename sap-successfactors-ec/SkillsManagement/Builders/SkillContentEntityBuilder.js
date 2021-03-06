var method = SkillContentEntityBuilder.prototype;

function SkillContentEntityBuilder() {

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

method.effectiveEndDate = function(effectiveEndDate) {
	this.effectiveEndDate = effectiveEndDate;
	return this;
};

method.effectiveStartDate = function(effectiveStartDate) {
	this.effectiveStartDate = effectiveStartDate;
	return this;
};

method.entity = function(entity) {
	this.entity = entity;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.jobProfileId = function(jobProfileId) {
	this.jobProfileId = jobProfileId;
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

method.order = function(order) {
	this.order = order;
	return this;
};

method.proLevel_de_DE = function(proLevel_de_DE) {
	this.proLevel_de_DE = proLevel_de_DE;
	return this;
};

method.proLevel_defaultValue = function(proLevel_defaultValue) {
	this.proLevel_defaultValue = proLevel_defaultValue;
	return this;
};

method.proLevel_en_GB = function(proLevel_en_GB) {
	this.proLevel_en_GB = proLevel_en_GB;
	return this;
};

method.proLevel_en_US = function(proLevel_en_US) {
	this.proLevel_en_US = proLevel_en_US;
	return this;
};

method.proLevel_es_ES = function(proLevel_es_ES) {
	this.proLevel_es_ES = proLevel_es_ES;
	return this;
};

method.proLevel_fr_FR = function(proLevel_fr_FR) {
	this.proLevel_fr_FR = proLevel_fr_FR;
	return this;
};

method.proLevel_ja_JP = function(proLevel_ja_JP) {
	this.proLevel_ja_JP = proLevel_ja_JP;
	return this;
};

method.proLevel_ko_KR = function(proLevel_ko_KR) {
	this.proLevel_ko_KR = proLevel_ko_KR;
	return this;
};

method.proLevel_localized = function(proLevel_localized) {
	this.proLevel_localized = proLevel_localized;
	return this;
};

method.proLevel_nl_NL = function(proLevel_nl_NL) {
	this.proLevel_nl_NL = proLevel_nl_NL;
	return this;
};

method.proLevel_pt_BR = function(proLevel_pt_BR) {
	this.proLevel_pt_BR = proLevel_pt_BR;
	return this;
};

method.proLevel_pt_PT = function(proLevel_pt_PT) {
	this.proLevel_pt_PT = proLevel_pt_PT;
	return this;
};

method.proLevel_ru_RU = function(proLevel_ru_RU) {
	this.proLevel_ru_RU = proLevel_ru_RU;
	return this;
};

method.proLevel_zh_CN = function(proLevel_zh_CN) {
	this.proLevel_zh_CN = proLevel_zh_CN;
	return this;
};

method.proLevel_zh_TW = function(proLevel_zh_TW) {
	this.proLevel_zh_TW = proLevel_zh_TW;
	return this;
};

method.role = function(role) {
	this.role = role;
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

method.skillMappingId = function(skillMappingId) {
	this.skillMappingId = skillMappingId;
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

method.entityNav = function(entityNav) {
	this.entityNav = entityNav;
	return this;
};

method.roleNav = function(roleNav) {
	this.roleNav = roleNav;
	return this;
};

method.build = function() {
	return {
		JobProfile_externalCode: this.JobProfile_externalCode,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		effectiveEndDate: this.effectiveEndDate,
		effectiveStartDate: this.effectiveStartDate,
		entity: this.entity,
		externalCode: this.externalCode,
		jobProfileId: this.jobProfileId,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedDateWithTZ: this.lastModifiedDateWithTZ,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemVersionId: this.mdfSystemVersionId,
		order: this.order,
		proLevel_de_DE: this.proLevel_de_DE,
		proLevel_defaultValue: this.proLevel_defaultValue,
		proLevel_en_GB: this.proLevel_en_GB,
		proLevel_en_US: this.proLevel_en_US,
		proLevel_es_ES: this.proLevel_es_ES,
		proLevel_fr_FR: this.proLevel_fr_FR,
		proLevel_ja_JP: this.proLevel_ja_JP,
		proLevel_ko_KR: this.proLevel_ko_KR,
		proLevel_localized: this.proLevel_localized,
		proLevel_nl_NL: this.proLevel_nl_NL,
		proLevel_pt_BR: this.proLevel_pt_BR,
		proLevel_pt_PT: this.proLevel_pt_PT,
		proLevel_ru_RU: this.proLevel_ru_RU,
		proLevel_zh_CN: this.proLevel_zh_CN,
		proLevel_zh_TW: this.proLevel_zh_TW,
		role: this.role,
		sectionId: this.sectionId,
		sectionType: this.sectionType,
		skillMappingId: this.skillMappingId,
		status: this.status,
		subModule: this.subModule,
		transactionSequence: this.transactionSequence,
		entityNav: this.entityNav,
		roleNav: this.roleNav
	};
};

module.exports = SkillContentEntityBuilder;
