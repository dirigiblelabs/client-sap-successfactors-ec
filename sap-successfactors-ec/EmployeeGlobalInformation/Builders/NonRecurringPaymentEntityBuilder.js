var method = NonRecurringPaymentEntityBuilder.prototype;

function NonRecurringPaymentEntityBuilder() {

}

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

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.formId = function(formId) {
	this.formId = formId;
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

method.nonRecurringPayPeriodEndDate = function(nonRecurringPayPeriodEndDate) {
	this.nonRecurringPayPeriodEndDate = nonRecurringPayPeriodEndDate;
	return this;
};

method.nonRecurringPayPeriodStartDate = function(nonRecurringPayPeriodStartDate) {
	this.nonRecurringPayPeriodStartDate = nonRecurringPayPeriodStartDate;
	return this;
};

method.notes = function(notes) {
	this.notes = notes;
	return this;
};

method.payCompValue = function(payCompValue) {
	this.payCompValue = payCompValue;
	return this;
};

method.payComponentCode = function(payComponentCode) {
	this.payComponentCode = payComponentCode;
	return this;
};

method.payComponentGroupId = function(payComponentGroupId) {
	this.payComponentGroupId = payComponentGroupId;
	return this;
};

method.payComponentType = function(payComponentType) {
	this.payComponentType = payComponentType;
	return this;
};

method.payDate = function(payDate) {
	this.payDate = payDate;
	return this;
};

method.recordStatus = function(recordStatus) {
	this.recordStatus = recordStatus;
	return this;
};

method.sentToPayroll = function(sentToPayroll) {
	this.sentToPayroll = sentToPayroll;
	return this;
};

method.taxTreatment = function(taxTreatment) {
	this.taxTreatment = taxTreatment;
	return this;
};

method.templateId = function(templateId) {
	this.templateId = templateId;
	return this;
};

method.userSysId = function(userSysId) {
	this.userSysId = userSysId;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		currencyCode: this.currencyCode,
		currencyGO: this.currencyGO,
		externalCode: this.externalCode,
		formId: this.formId,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedDateWithTZ: this.lastModifiedDateWithTZ,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemEffectiveStartDate: this.mdfSystemEffectiveStartDate,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemStatus: this.mdfSystemStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		nonRecurringPayPeriodEndDate: this.nonRecurringPayPeriodEndDate,
		nonRecurringPayPeriodStartDate: this.nonRecurringPayPeriodStartDate,
		notes: this.notes,
		payCompValue: this.payCompValue,
		payComponentCode: this.payComponentCode,
		payComponentGroupId: this.payComponentGroupId,
		payComponentType: this.payComponentType,
		payDate: this.payDate,
		recordStatus: this.recordStatus,
		sentToPayroll: this.sentToPayroll,
		taxTreatment: this.taxTreatment,
		templateId: this.templateId,
		userSysId: this.userSysId
	};
};

module.exports = NonRecurringPaymentEntityBuilder;
