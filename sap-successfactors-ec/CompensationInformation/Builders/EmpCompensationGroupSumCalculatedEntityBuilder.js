var method = EmpCompensationGroupSumCalculatedEntityBuilder.prototype;

function EmpCompensationGroupSumCalculatedEntityBuilder() {

}

method.amount = function(amount) {
	this.amount = amount;
	return this;
};

method.currencyCode = function(currencyCode) {
	this.currencyCode = currencyCode;
	return this;
};

method.errorCode = function(errorCode) {
	this.errorCode = errorCode;
	return this;
};

method.errorMessage = function(errorMessage) {
	this.errorMessage = errorMessage;
	return this;
};

method.payComponentGroupId = function(payComponentGroupId) {
	this.payComponentGroupId = payComponentGroupId;
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

method.build = function() {
	return {
		amount: this.amount,
		currencyCode: this.currencyCode,
		errorCode: this.errorCode,
		errorMessage: this.errorMessage,
		payComponentGroupId: this.payComponentGroupId,
		seqNumber: this.seqNumber,
		startDate: this.startDate,
		userId: this.userId
	};
};

module.exports = EmpCompensationGroupSumCalculatedEntityBuilder;
