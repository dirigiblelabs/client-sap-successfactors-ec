var method = JobClassificationCountryEntityBuilder.prototype;

function JobClassificationCountryEntityBuilder() {

}

method.JobClassification_effectiveStartDate = function(JobClassification_effectiveStartDate) {
	this.JobClassification_effectiveStartDate = JobClassification_effectiveStartDate;
	return this;
};

method.JobClassification_externalCode = function(JobClassification_externalCode) {
	this.JobClassification_externalCode = JobClassification_externalCode;
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

method.createdDate = function(createdDate) {
	this.createdDate = createdDate;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.effectiveStatus = function(effectiveStatus) {
	this.effectiveStatus = effectiveStatus;
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

method.mdfSystemTransactionSequence = function(mdfSystemTransactionSequence) {
	this.mdfSystemTransactionSequence = mdfSystemTransactionSequence;
	return this;
};

method.mdfSystemVersionId = function(mdfSystemVersionId) {
	this.mdfSystemVersionId = mdfSystemVersionId;
	return this;
};

method.toJobClassificationAUS = function(toJobClassificationAUS) {
	this.toJobClassificationAUS = toJobClassificationAUS;
	return this;
};

method.toJobClassificationBRA = function(toJobClassificationBRA) {
	this.toJobClassificationBRA = toJobClassificationBRA;
	return this;
};

method.toJobClassificationCAN = function(toJobClassificationCAN) {
	this.toJobClassificationCAN = toJobClassificationCAN;
	return this;
};

method.toJobClassificationFRA = function(toJobClassificationFRA) {
	this.toJobClassificationFRA = toJobClassificationFRA;
	return this;
};

method.toJobClassificationGBR = function(toJobClassificationGBR) {
	this.toJobClassificationGBR = toJobClassificationGBR;
	return this;
};

method.toJobClassificationITA = function(toJobClassificationITA) {
	this.toJobClassificationITA = toJobClassificationITA;
	return this;
};

method.toJobClassificationUSA = function(toJobClassificationUSA) {
	this.toJobClassificationUSA = toJobClassificationUSA;
	return this;
};

method.build = function() {
	return {
		JobClassification_effectiveStartDate: this.JobClassification_effectiveStartDate,
		JobClassification_externalCode: this.JobClassification_externalCode,
		country: this.country,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		effectiveStatus: this.effectiveStatus,
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
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		toJobClassificationAUS: this.toJobClassificationAUS,
		toJobClassificationBRA: this.toJobClassificationBRA,
		toJobClassificationCAN: this.toJobClassificationCAN,
		toJobClassificationFRA: this.toJobClassificationFRA,
		toJobClassificationGBR: this.toJobClassificationGBR,
		toJobClassificationITA: this.toJobClassificationITA,
		toJobClassificationUSA: this.toJobClassificationUSA
	};
};

module.exports = JobClassificationCountryEntityBuilder;
