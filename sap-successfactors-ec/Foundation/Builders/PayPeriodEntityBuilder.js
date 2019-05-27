var method = PayPeriodEntityBuilder.prototype;

function PayPeriodEntityBuilder() {

}

method.PayCalendar_payGroup = function(PayCalendar_payGroup) {
	this.PayCalendar_payGroup = PayCalendar_payGroup;
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

method.cust_payPeriodsPerYear = function(cust_payPeriodsPerYear) {
	this.cust_payPeriodsPerYear = cust_payPeriodsPerYear;
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

method.offcycle = function(offcycle) {
	this.offcycle = offcycle;
	return this;
};

method.payCheckIssueDate = function(payCheckIssueDate) {
	this.payCheckIssueDate = payCheckIssueDate;
	return this;
};

method.payPeriodBeginDate = function(payPeriodBeginDate) {
	this.payPeriodBeginDate = payPeriodBeginDate;
	return this;
};

method.payPeriodEndDate = function(payPeriodEndDate) {
	this.payPeriodEndDate = payPeriodEndDate;
	return this;
};

method.processingRunId = function(processingRunId) {
	this.processingRunId = processingRunId;
	return this;
};

method.runType = function(runType) {
	this.runType = runType;
	return this;
};

method.build = function() {
	return {
		PayCalendar_payGroup: this.PayCalendar_payGroup,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		cust_payPeriodsPerYear: this.cust_payPeriodsPerYear,
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
		offcycle: this.offcycle,
		payCheckIssueDate: this.payCheckIssueDate,
		payPeriodBeginDate: this.payPeriodBeginDate,
		payPeriodEndDate: this.payPeriodEndDate,
		processingRunId: this.processingRunId,
		runType: this.runType
	};
};

module.exports = PayPeriodEntityBuilder;
