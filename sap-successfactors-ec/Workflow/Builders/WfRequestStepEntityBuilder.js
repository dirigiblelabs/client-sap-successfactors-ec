var method = WfRequestStepEntityBuilder.prototype;

function WfRequestStepEntityBuilder() {

}

method.actionType = function(actionType) {
	this.actionType = actionType;
	return this;
};

method.approverType = function(approverType) {
	this.approverType = approverType;
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

method.ownerId = function(ownerId) {
	this.ownerId = ownerId;
	return this;
};

method.processedBy = function(processedBy) {
	this.processedBy = processedBy;
	return this;
};

method.relatedTo = function(relatedTo) {
	this.relatedTo = relatedTo;
	return this;
};

method.role = function(role) {
	this.role = role;
	return this;
};

method.status = function(status) {
	this.status = status;
	return this;
};

method.stepNum = function(stepNum) {
	this.stepNum = stepNum;
	return this;
};

method.wfRequestId = function(wfRequestId) {
	this.wfRequestId = wfRequestId;
	return this;
};

method.wfRequestStepId = function(wfRequestStepId) {
	this.wfRequestStepId = wfRequestStepId;
	return this;
};

method.wfRequestNav = function(wfRequestNav) {
	this.wfRequestNav = wfRequestNav;
	return this;
};

method.build = function() {
	return {
		actionType: this.actionType,
		approverType: this.approverType,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		ownerId: this.ownerId,
		processedBy: this.processedBy,
		relatedTo: this.relatedTo,
		role: this.role,
		status: this.status,
		stepNum: this.stepNum,
		wfRequestId: this.wfRequestId,
		wfRequestStepId: this.wfRequestStepId,
		wfRequestNav: this.wfRequestNav
	};
};

module.exports = WfRequestStepEntityBuilder;
