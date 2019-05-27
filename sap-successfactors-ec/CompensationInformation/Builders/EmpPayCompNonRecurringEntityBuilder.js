var method = EmpPayCompNonRecurringEntityBuilder.prototype;

function EmpPayCompNonRecurringEntityBuilder() {

}

method.alternativeCostCenter = function(alternativeCostCenter) {
	this.alternativeCostCenter = alternativeCostCenter;
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

method.createdOn = function(createdOn) {
	this.createdOn = createdOn;
	return this;
};

method.currencyCode = function(currencyCode) {
	this.currencyCode = currencyCode;
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

method.lastModifiedOn = function(lastModifiedOn) {
	this.lastModifiedOn = lastModifiedOn;
	return this;
};

method.notes = function(notes) {
	this.notes = notes;
	return this;
};

method.operation = function(operation) {
	this.operation = operation;
	return this;
};

method.payComponentCode = function(payComponentCode) {
	this.payComponentCode = payComponentCode;
	return this;
};

method.payDate = function(payDate) {
	this.payDate = payDate;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.value = function(value) {
	this.value = value;
	return this;
};

method.build = function() {
	return {
		alternativeCostCenter: this.alternativeCostCenter,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		currencyCode: this.currencyCode,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		notes: this.notes,
		operation: this.operation,
		payComponentCode: this.payComponentCode,
		payDate: this.payDate,
		userId: this.userId,
		value: this.value
	};
};

module.exports = EmpPayCompNonRecurringEntityBuilder;
