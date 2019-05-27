var method = BenefitClaimAccumulationEntityBuilder.prototype;

function BenefitClaimAccumulationEntityBuilder() {

}

method.accumulatedAmount = function(accumulatedAmount) {
	this.accumulatedAmount = accumulatedAmount;
	return this;
};

method.accumulatedCredits = function(accumulatedCredits) {
	this.accumulatedCredits = accumulatedCredits;
	return this;
};

method.balanceCarryForwardAmount = function(balanceCarryForwardAmount) {
	this.balanceCarryForwardAmount = balanceCarryForwardAmount;
	return this;
};

method.balanceCredits = function(balanceCredits) {
	this.balanceCredits = balanceCredits;
	return this;
};

method.benefit = function(benefit) {
	this.benefit = benefit;
	return this;
};

method.claimWindowEnd = function(claimWindowEnd) {
	this.claimWindowEnd = claimWindowEnd;
	return this;
};

method.claimWindowStart = function(claimWindowStart) {
	this.claimWindowStart = claimWindowStart;
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

method.currency = function(currency) {
	this.currency = currency;
	return this;
};

method.exception = function(exception) {
	this.exception = exception;
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

method.remainingAmount = function(remainingAmount) {
	this.remainingAmount = remainingAmount;
	return this;
};

method.schedulePeriod = function(schedulePeriod) {
	this.schedulePeriod = schedulePeriod;
	return this;
};

method.workerId = function(workerId) {
	this.workerId = workerId;
	return this;
};

method.benefitBalanceCarryForwardDetails = function(benefitBalanceCarryForwardDetails) {
	this.benefitBalanceCarryForwardDetails = benefitBalanceCarryForwardDetails;
	return this;
};

method.benefitClaims = function(benefitClaims) {
	this.benefitClaims = benefitClaims;
	return this;
};

method.benefitEnrollments = function(benefitEnrollments) {
	this.benefitEnrollments = benefitEnrollments;
	return this;
};

method.benefitNav = function(benefitNav) {
	this.benefitNav = benefitNav;
	return this;
};

method.exceptionNav = function(exceptionNav) {
	this.exceptionNav = exceptionNav;
	return this;
};

method.schedulePeriodNav = function(schedulePeriodNav) {
	this.schedulePeriodNav = schedulePeriodNav;
	return this;
};

method.build = function() {
	return {
		accumulatedAmount: this.accumulatedAmount,
		accumulatedCredits: this.accumulatedCredits,
		balanceCarryForwardAmount: this.balanceCarryForwardAmount,
		balanceCredits: this.balanceCredits,
		benefit: this.benefit,
		claimWindowEnd: this.claimWindowEnd,
		claimWindowStart: this.claimWindowStart,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		currency: this.currency,
		exception: this.exception,
		externalCode: this.externalCode,
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
		remainingAmount: this.remainingAmount,
		schedulePeriod: this.schedulePeriod,
		workerId: this.workerId,
		benefitBalanceCarryForwardDetails: this.benefitBalanceCarryForwardDetails,
		benefitClaims: this.benefitClaims,
		benefitEnrollments: this.benefitEnrollments,
		benefitNav: this.benefitNav,
		exceptionNav: this.exceptionNav,
		schedulePeriodNav: this.schedulePeriodNav
	};
};

module.exports = BenefitClaimAccumulationEntityBuilder;
