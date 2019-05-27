var method = JobClassificationUSAEntityBuilder.prototype;

function JobClassificationUSAEntityBuilder() {

}

method.JobClassificationCountry_country = function(JobClassificationCountry_country) {
	this.JobClassificationCountry_country = JobClassificationCountry_country;
	return this;
};

method.JobClassification_effectiveStartDate = function(JobClassification_effectiveStartDate) {
	this.JobClassification_effectiveStartDate = JobClassification_effectiveStartDate;
	return this;
};

method.JobClassification_externalCode = function(JobClassification_externalCode) {
	this.JobClassification_externalCode = JobClassification_externalCode;
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

method.eeo1JobCategory = function(eeo1JobCategory) {
	this.eeo1JobCategory = eeo1JobCategory;
	return this;
};

method.eeo4JobCategory = function(eeo4JobCategory) {
	this.eeo4JobCategory = eeo4JobCategory;
	return this;
};

method.eeo5JobCategory = function(eeo5JobCategory) {
	this.eeo5JobCategory = eeo5JobCategory;
	return this;
};

method.eeo6JobCategory = function(eeo6JobCategory) {
	this.eeo6JobCategory = eeo6JobCategory;
	return this;
};

method.eeoJobGroup = function(eeoJobGroup) {
	this.eeoJobGroup = eeoJobGroup;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.flsaStatusUSA = function(flsaStatusUSA) {
	this.flsaStatusUSA = flsaStatusUSA;
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

method.localJobTitle = function(localJobTitle) {
	this.localJobTitle = localJobTitle;
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

method.build = function() {
	return {
		JobClassificationCountry_country: this.JobClassificationCountry_country,
		JobClassification_effectiveStartDate: this.JobClassification_effectiveStartDate,
		JobClassification_externalCode: this.JobClassification_externalCode,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		eeo1JobCategory: this.eeo1JobCategory,
		eeo4JobCategory: this.eeo4JobCategory,
		eeo5JobCategory: this.eeo5JobCategory,
		eeo6JobCategory: this.eeo6JobCategory,
		eeoJobGroup: this.eeoJobGroup,
		externalCode: this.externalCode,
		flsaStatusUSA: this.flsaStatusUSA,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedDateWithTZ: this.lastModifiedDateWithTZ,
		localJobTitle: this.localJobTitle,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemEffectiveStartDate: this.mdfSystemEffectiveStartDate,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemStatus: this.mdfSystemStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId
	};
};

module.exports = JobClassificationUSAEntityBuilder;
