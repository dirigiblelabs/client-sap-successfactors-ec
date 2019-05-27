var method = AdvancesAccumulationEntityBuilder.prototype;

function AdvancesAccumulationEntityBuilder() {

}

method.accumulatedAmount = function(accumulatedAmount) {
	this.accumulatedAmount = accumulatedAmount;
	return this;
};

method.advanceType = function(advanceType) {
	this.advanceType = advanceType;
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

method.currency = function(currency) {
	this.currency = currency;
	return this;
};

method.currencyGO = function(currencyGO) {
	this.currencyGO = currencyGO;
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

method.numberOfOccurances = function(numberOfOccurances) {
	this.numberOfOccurances = numberOfOccurances;
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

method.remainingEligibleAmount = function(remainingEligibleAmount) {
	this.remainingEligibleAmount = remainingEligibleAmount;
	return this;
};

method.remainingNumberOfOccurances = function(remainingNumberOfOccurances) {
	this.remainingNumberOfOccurances = remainingNumberOfOccurances;
	return this;
};

method.userSysId = function(userSysId) {
	this.userSysId = userSysId;
	return this;
};

method.build = function() {
	return {
		accumulatedAmount: this.accumulatedAmount,
		advanceType: this.advanceType,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		currency: this.currency,
		currencyGO: this.currencyGO,
		externalCode: this.externalCode,
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
		numberOfOccurances: this.numberOfOccurances,
		periodEndDate: this.periodEndDate,
		periodStartDate: this.periodStartDate,
		remainingEligibleAmount: this.remainingEligibleAmount,
		remainingNumberOfOccurances: this.remainingNumberOfOccurances,
		userSysId: this.userSysId
	};
};

module.exports = AdvancesAccumulationEntityBuilder;
