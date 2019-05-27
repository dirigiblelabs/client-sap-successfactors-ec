var method = BenefitPensionEmployeeContributionDetailEntityBuilder.prototype;

function BenefitPensionEmployeeContributionDetailEntityBuilder() {

}

method.Benefit_benefitId = function(Benefit_benefitId) {
	this.Benefit_benefitId = Benefit_benefitId;
	return this;
};

method.Benefit_effectiveStartDate = function(Benefit_effectiveStartDate) {
	this.Benefit_effectiveStartDate = Benefit_effectiveStartDate;
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

method.employeeCanEditEmployeeContribution = function(employeeCanEditEmployeeContribution) {
	this.employeeCanEditEmployeeContribution = employeeCanEditEmployeeContribution;
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

method.employeeContributionRule = function(employeeContributionRule) {
	this.employeeContributionRule = employeeContributionRule;
	return this;
};

method.employeeContributionType = function(employeeContributionType) {
	this.employeeContributionType = employeeContributionType;
	return this;
};

method.employeeStatutoryMinimumAmount = function(employeeStatutoryMinimumAmount) {
	this.employeeStatutoryMinimumAmount = employeeStatutoryMinimumAmount;
	return this;
};

method.employeeStatutoryMinimumPercentage = function(employeeStatutoryMinimumPercentage) {
	this.employeeStatutoryMinimumPercentage = employeeStatutoryMinimumPercentage;
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
		Benefit_benefitId: this.Benefit_benefitId,
		Benefit_effectiveStartDate: this.Benefit_effectiveStartDate,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		employeeCanEditEmployeeContribution: this.employeeCanEditEmployeeContribution,
		employeeContributionAmount: this.employeeContributionAmount,
		employeeContributionPercentage: this.employeeContributionPercentage,
		employeeContributionRule: this.employeeContributionRule,
		employeeContributionType: this.employeeContributionType,
		employeeStatutoryMinimumAmount: this.employeeStatutoryMinimumAmount,
		employeeStatutoryMinimumPercentage: this.employeeStatutoryMinimumPercentage,
		id: this.id,
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
		mdfSystemStatus: this.mdfSystemStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId
	};
};

module.exports = BenefitPensionEmployeeContributionDetailEntityBuilder;
