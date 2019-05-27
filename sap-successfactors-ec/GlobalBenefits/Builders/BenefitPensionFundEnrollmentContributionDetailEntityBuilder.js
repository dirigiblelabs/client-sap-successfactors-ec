var method = BenefitPensionFundEnrollmentContributionDetailEntityBuilder.prototype;

function BenefitPensionFundEnrollmentContributionDetailEntityBuilder() {

}

method.BenefitEnrollment_effectiveStartDate = function(BenefitEnrollment_effectiveStartDate) {
	this.BenefitEnrollment_effectiveStartDate = BenefitEnrollment_effectiveStartDate;
	return this;
};

method.BenefitEnrollment_id = function(BenefitEnrollment_id) {
	this.BenefitEnrollment_id = BenefitEnrollment_id;
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

method.employeeContributionAmount = function(employeeContributionAmount) {
	this.employeeContributionAmount = employeeContributionAmount;
	return this;
};

method.employeeContributionPercentage = function(employeeContributionPercentage) {
	this.employeeContributionPercentage = employeeContributionPercentage;
	return this;
};

method.employerContributionAmount = function(employerContributionAmount) {
	this.employerContributionAmount = employerContributionAmount;
	return this;
};

method.employerContributionPercentage = function(employerContributionPercentage) {
	this.employerContributionPercentage = employerContributionPercentage;
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

method.pensionFund = function(pensionFund) {
	this.pensionFund = pensionFund;
	return this;
};

method.pensionFundNav = function(pensionFundNav) {
	this.pensionFundNav = pensionFundNav;
	return this;
};

method.build = function() {
	return {
		BenefitEnrollment_effectiveStartDate: this.BenefitEnrollment_effectiveStartDate,
		BenefitEnrollment_id: this.BenefitEnrollment_id,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		employeeContributionAmount: this.employeeContributionAmount,
		employeeContributionPercentage: this.employeeContributionPercentage,
		employerContributionAmount: this.employerContributionAmount,
		employerContributionPercentage: this.employerContributionPercentage,
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
		pensionFund: this.pensionFund,
		pensionFundNav: this.pensionFundNav
	};
};

module.exports = BenefitPensionFundEnrollmentContributionDetailEntityBuilder;
