var method = EmpGlobalAssignmentEntityBuilder.prototype;

function EmpGlobalAssignmentEntityBuilder() {

}

method.assignmentClass = function(assignmentClass) {
	this.assignmentClass = assignmentClass;
	return this;
};

method.assignmentType = function(assignmentType) {
	this.assignmentType = assignmentType;
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

method.endDate = function(endDate) {
	this.endDate = endDate;
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

method.payrollEndDate = function(payrollEndDate) {
	this.payrollEndDate = payrollEndDate;
	return this;
};

method.personIdExternal = function(personIdExternal) {
	this.personIdExternal = personIdExternal;
	return this;
};

method.plannedEndDate = function(plannedEndDate) {
	this.plannedEndDate = plannedEndDate;
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
		assignmentClass: this.assignmentClass,
		assignmentType: this.assignmentType,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		endDate: this.endDate,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		payrollEndDate: this.payrollEndDate,
		personIdExternal: this.personIdExternal,
		plannedEndDate: this.plannedEndDate,
		startDate: this.startDate,
		userId: this.userId
	};
};

module.exports = EmpGlobalAssignmentEntityBuilder;
