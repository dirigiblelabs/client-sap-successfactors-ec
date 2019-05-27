var method = AdvanceEntityBuilder.prototype;

function AdvanceEntityBuilder() {

}

method.NonRecurringPayment_externalCode = function(NonRecurringPayment_externalCode) {
	this.NonRecurringPayment_externalCode = NonRecurringPayment_externalCode;
	return this;
};

method.advanceEligibilityCode = function(advanceEligibilityCode) {
	this.advanceEligibilityCode = advanceEligibilityCode;
	return this;
};

method.advanceType = function(advanceType) {
	this.advanceType = advanceType;
	return this;
};

method.approvalStatus = function(approvalStatus) {
	this.approvalStatus = approvalStatus;
	return this;
};

method.approver = function(approver) {
	this.approver = approver;
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

method.currencyCode = function(currencyCode) {
	this.currencyCode = currencyCode;
	return this;
};

method.currencyGO = function(currencyGO) {
	this.currencyGO = currencyGO;
	return this;
};

method.eligibileAmount = function(eligibileAmount) {
	this.eligibileAmount = eligibileAmount;
	return this;
};

method.eligibilityAmount = function(eligibilityAmount) {
	this.eligibilityAmount = eligibilityAmount;
	return this;
};

method.eligibleAdvanceType = function(eligibleAdvanceType) {
	this.eligibleAdvanceType = eligibleAdvanceType;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.installmentAmount = function(installmentAmount) {
	this.installmentAmount = installmentAmount;
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

method.interestType = function(interestType) {
	this.interestType = interestType;
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

method.notesForApprover = function(notesForApprover) {
	this.notesForApprover = notesForApprover;
	return this;
};

method.numberOfInstallments = function(numberOfInstallments) {
	this.numberOfInstallments = numberOfInstallments;
	return this;
};

method.paymentMode = function(paymentMode) {
	this.paymentMode = paymentMode;
	return this;
};

method.pendingAmount = function(pendingAmount) {
	this.pendingAmount = pendingAmount;
	return this;
};

method.periodEndDate = function(periodEndDate) {
	this.periodEndDate = periodEndDate;
	return this;
};

method.periodStartDate = function(periodStartDate) {
	this.periodStartDate = periodStartDate;
	return this;
};

method.recoveryMode = function(recoveryMode) {
	this.recoveryMode = recoveryMode;
	return this;
};

method.recoveryStatus = function(recoveryStatus) {
	this.recoveryStatus = recoveryStatus;
	return this;
};

method.remainingRequests = function(remainingRequests) {
	this.remainingRequests = remainingRequests;
	return this;
};

method.requestDate = function(requestDate) {
	this.requestDate = requestDate;
	return this;
};

method.requestedAmount = function(requestedAmount) {
	this.requestedAmount = requestedAmount;
	return this;
};

method.totalRepaymentAmount = function(totalRepaymentAmount) {
	this.totalRepaymentAmount = totalRepaymentAmount;
	return this;
};

method.advanceEligibilityCodeNav = function(advanceEligibilityCodeNav) {
	this.advanceEligibilityCodeNav = advanceEligibilityCodeNav;
	return this;
};

method.advancesInstallments = function(advancesInstallments) {
	this.advancesInstallments = advancesInstallments;
	return this;
};

method.build = function() {
	return {
		NonRecurringPayment_externalCode: this.NonRecurringPayment_externalCode,
		advanceEligibilityCode: this.advanceEligibilityCode,
		advanceType: this.advanceType,
		approvalStatus: this.approvalStatus,
		approver: this.approver,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		currencyCode: this.currencyCode,
		currencyGO: this.currencyGO,
		eligibileAmount: this.eligibileAmount,
		eligibilityAmount: this.eligibilityAmount,
		eligibleAdvanceType: this.eligibleAdvanceType,
		externalCode: this.externalCode,
		installmentAmount: this.installmentAmount,
		installmentFrequency: this.installmentFrequency,
		interestRate: this.interestRate,
		interestType: this.interestType,
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
		mdfSystemVersionId: this.mdfSystemVersionId,
		notesForApprover: this.notesForApprover,
		numberOfInstallments: this.numberOfInstallments,
		paymentMode: this.paymentMode,
		pendingAmount: this.pendingAmount,
		periodEndDate: this.periodEndDate,
		periodStartDate: this.periodStartDate,
		recoveryMode: this.recoveryMode,
		recoveryStatus: this.recoveryStatus,
		remainingRequests: this.remainingRequests,
		requestDate: this.requestDate,
		requestedAmount: this.requestedAmount,
		totalRepaymentAmount: this.totalRepaymentAmount,
		advanceEligibilityCodeNav: this.advanceEligibilityCodeNav,
		advancesInstallments: this.advancesInstallments
	};
};

module.exports = AdvanceEntityBuilder;
