var method = EmpWfRequestEntityBuilder.prototype;

function EmpWfRequestEntityBuilder() {

}

method.actionType = function(actionType) {
	this.actionType = actionType;
	return this;
};

method.effectiveDate = function(effectiveDate) {
	this.effectiveDate = effectiveDate;
	return this;
};

method.empWfRequestId = function(empWfRequestId) {
	this.empWfRequestId = empWfRequestId;
	return this;
};

method.entityType = function(entityType) {
	this.entityType = entityType;
	return this;
};

method.eventReason = function(eventReason) {
	this.eventReason = eventReason;
	return this;
};

method.requestType = function(requestType) {
	this.requestType = requestType;
	return this;
};

method.subjectId = function(subjectId) {
	this.subjectId = subjectId;
	return this;
};

method.wfConfig = function(wfConfig) {
	this.wfConfig = wfConfig;
	return this;
};

method.wfRequestId = function(wfRequestId) {
	this.wfRequestId = wfRequestId;
	return this;
};

method.build = function() {
	return {
		actionType: this.actionType,
		effectiveDate: this.effectiveDate,
		empWfRequestId: this.empWfRequestId,
		entityType: this.entityType,
		eventReason: this.eventReason,
		requestType: this.requestType,
		subjectId: this.subjectId,
		wfConfig: this.wfConfig,
		wfRequestId: this.wfRequestId
	};
};

module.exports = EmpWfRequestEntityBuilder;
