var method = EmpPayCompRecurringEntityBuilder.prototype;

function EmpPayCompRecurringEntityBuilder() {

}

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

method.endDate = function(endDate) {
	this.endDate = endDate;
	return this;
};

method.frequency = function(frequency) {
	this.frequency = frequency;
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

method.payComponent = function(payComponent) {
	this.payComponent = payComponent;
	return this;
};

method.paycompvalue = function(paycompvalue) {
	this.paycompvalue = paycompvalue;
	return this;
};

method.seqNumber = function(seqNumber) {
	this.seqNumber = seqNumber;
	return this;
};

method.startDate = function(startDate) {
	this.startDate = startDate;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.compensationNav = function(compensationNav) {
	this.compensationNav = compensationNav;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		currencyCode: this.currencyCode,
		endDate: this.endDate,
		frequency: this.frequency,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		notes: this.notes,
		operation: this.operation,
		payComponent: this.payComponent,
		paycompvalue: this.paycompvalue,
		seqNumber: this.seqNumber,
		startDate: this.startDate,
		userId: this.userId,
		compensationNav: this.compensationNav
	};
};

module.exports = EmpPayCompRecurringEntityBuilder;
