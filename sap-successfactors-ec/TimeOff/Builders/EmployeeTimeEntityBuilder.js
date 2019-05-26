var method = EmployeeTimeEntityBuilder.prototype;

function EmployeeTimeEntityBuilder() {
}

method.approvalStatus = function(approvalStatus) {
	this.approvalStatus = approvalStatus;
	return this;
};

method.endDate = function(endDate) {
	this.endDate = endDate;
	return this;
};

method.endTime = function(endTime) {
	this.endTime = endTime;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.fractionQuantity = function(fractionQuantity) {
	this.fractionQuantity = fractionQuantity;
	return this;
};

method.loaActualReturnDate = function(loaActualReturnDate) {
	this.loaActualReturnDate = loaActualReturnDate;
	return this;
};

method.loaEndJobInfoId = function(loaEndJobInfoId) {
	this.loaEndJobInfoId = loaEndJobInfoId;
	return this;
};

method.loaExpectedReturnDate = function(loaExpectedReturnDate) {
	this.loaExpectedReturnDate = loaExpectedReturnDate;
	return this;
};

method.loaStartJobInfoId = function(loaStartJobInfoId) {
	this.loaStartJobInfoId = loaStartJobInfoId;
	return this;
};

method.recurrenceGroup = function(recurrenceGroup) {
	this.recurrenceGroup = recurrenceGroup;
	return this;
};

method.startDate = function(startDate) {
	this.startDate = startDate;
	return this;
};

method.startTime = function(startTime) {
	this.startTime = startTime;
	return this;
};

method.timeType = function(timeType) {
	this.timeType = timeType;
	return this;
};

method.undeterminedEndDate = function(undeterminedEndDate) {
	this.undeterminedEndDate = undeterminedEndDate;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.build = function() {
	return {
		approvalStatus: this.approvalStatus,
		endDate: this.endDate,
		endTime: this.endTime,
		externalCode: this.externalCode,
		fractionQuantity: this.fractionQuantity,
		loaActualReturnDate: this.loaActualReturnDate,
		loaEndJobInfoId: this.loaEndJobInfoId,
		loaExpectedReturnDate: this.loaExpectedReturnDate,
		loaStartJobInfoId: this.loaStartJobInfoId,
		recurrenceGroup: this.recurrenceGroup,
		startDate: this.startDate,
		startTime: this.startTime,
		timeType: this.timeType,
		undeterminedEndDate: this.undeterminedEndDate,
		userId: this.userId
	};
};

module.exports = EmployeeTimeEntityBuilder;