var method = BenefitCompanyCarEntityBuilder.prototype;

function BenefitCompanyCarEntityBuilder() {

}

method.Benefit_benefitId = function(Benefit_benefitId) {
	this.Benefit_benefitId = Benefit_benefitId;
	return this;
};

method.Benefit_effectiveStartDate = function(Benefit_effectiveStartDate) {
	this.Benefit_effectiveStartDate = Benefit_effectiveStartDate;
	return this;
};

method.benefitCompanyCarId = function(benefitCompanyCarId) {
	this.benefitCompanyCarId = benefitCompanyCarId;
	return this;
};

method.buyBackSupported = function(buyBackSupported) {
	this.buyBackSupported = buyBackSupported;
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

method.installmentFrequency = function(installmentFrequency) {
	this.installmentFrequency = installmentFrequency;
	return this;
};

method.interestRate = function(interestRate) {
	this.interestRate = interestRate;
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

method.lockInPolicyDuration = function(lockInPolicyDuration) {
	this.lockInPolicyDuration = lockInPolicyDuration;
	return this;
};

method.maintainanceCovered = function(maintainanceCovered) {
	this.maintainanceCovered = maintainanceCovered;
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

method.roadTaxCovered = function(roadTaxCovered) {
	this.roadTaxCovered = roadTaxCovered;
	return this;
};

method.benCompanyCarAllowedModels = function(benCompanyCarAllowedModels) {
	this.benCompanyCarAllowedModels = benCompanyCarAllowedModels;
	return this;
};

method.benCompanyCarRecommendedVendors = function(benCompanyCarRecommendedVendors) {
	this.benCompanyCarRecommendedVendors = benCompanyCarRecommendedVendors;
	return this;
};

method.carLeaseServiceProviders = function(carLeaseServiceProviders) {
	this.carLeaseServiceProviders = carLeaseServiceProviders;
	return this;
};

method.build = function() {
	return {
		Benefit_benefitId: this.Benefit_benefitId,
		Benefit_effectiveStartDate: this.Benefit_effectiveStartDate,
		benefitCompanyCarId: this.benefitCompanyCarId,
		buyBackSupported: this.buyBackSupported,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		effectiveStatus: this.effectiveStatus,
		installmentFrequency: this.installmentFrequency,
		interestRate: this.interestRate,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedDateWithTZ: this.lastModifiedDateWithTZ,
		lockInPolicyDuration: this.lockInPolicyDuration,
		maintainanceCovered: this.maintainanceCovered,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemEffectiveStartDate: this.mdfSystemEffectiveStartDate,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		roadTaxCovered: this.roadTaxCovered,
		benCompanyCarAllowedModels: this.benCompanyCarAllowedModels,
		benCompanyCarRecommendedVendors: this.benCompanyCarRecommendedVendors,
		carLeaseServiceProviders: this.carLeaseServiceProviders
	};
};

module.exports = BenefitCompanyCarEntityBuilder;
