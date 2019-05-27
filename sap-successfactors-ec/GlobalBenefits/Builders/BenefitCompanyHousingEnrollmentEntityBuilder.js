var method = BenefitCompanyHousingEnrollmentEntityBuilder.prototype;

function BenefitCompanyHousingEnrollmentEntityBuilder() {

}

method.BenefitEnrollment_effectiveStartDate = function(BenefitEnrollment_effectiveStartDate) {
	this.BenefitEnrollment_effectiveStartDate = BenefitEnrollment_effectiveStartDate;
	return this;
};

method.BenefitEnrollment_id = function(BenefitEnrollment_id) {
	this.BenefitEnrollment_id = BenefitEnrollment_id;
	return this;
};

method.accommodationType = function(accommodationType) {
	this.accommodationType = accommodationType;
	return this;
};

method.address = function(address) {
	this.address = address;
	return this;
};

method.cityCategory = function(cityCategory) {
	this.cityCategory = cityCategory;
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

method.furnitureCost = function(furnitureCost) {
	this.furnitureCost = furnitureCost;
	return this;
};

method.helperCost = function(helperCost) {
	this.helperCost = helperCost;
	return this;
};

method.id = function(id) {
	this.id = id;
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

method.name = function(name) {
	this.name = name;
	return this;
};

method.personalId = function(personalId) {
	this.personalId = personalId;
	return this;
};

method.personalIdType = function(personalIdType) {
	this.personalIdType = personalIdType;
	return this;
};

method.build = function() {
	return {
		BenefitEnrollment_effectiveStartDate: this.BenefitEnrollment_effectiveStartDate,
		BenefitEnrollment_id: this.BenefitEnrollment_id,
		accommodationType: this.accommodationType,
		address: this.address,
		cityCategory: this.cityCategory,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		furnitureCost: this.furnitureCost,
		helperCost: this.helperCost,
		id: this.id,
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
		name: this.name,
		personalId: this.personalId,
		personalIdType: this.personalIdType
	};
};

module.exports = BenefitCompanyHousingEnrollmentEntityBuilder;
