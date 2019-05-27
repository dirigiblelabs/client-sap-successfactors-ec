var method = EmpCompensationCalculatedEntityBuilder.prototype;

function EmpCompensationCalculatedEntityBuilder() {

}

method.compaRatio = function(compaRatio) {
	this.compaRatio = compaRatio;
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

method.rangePenetration = function(rangePenetration) {
	this.rangePenetration = rangePenetration;
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
		compaRatio: this.compaRatio,
		errorCode: this.errorCode,
		errorMessage: this.errorMessage,
		rangePenetration: this.rangePenetration,
		seqNumber: this.seqNumber,
		startDate: this.startDate,
		userId: this.userId
	};
};

module.exports = EmpCompensationCalculatedEntityBuilder;
