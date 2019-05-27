var method = WfRequestEntityBuilder.prototype;

function WfRequestEntityBuilder() {

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

method.currentStepNum = function(currentStepNum) {
	this.currentStepNum = currentStepNum;
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

method.module = function(module) {
	this.module = module;
	return this;
};

method.parentWfRequestId = function(parentWfRequestId) {
	this.parentWfRequestId = parentWfRequestId;
	return this;
};

method.reminderSentDate = function(reminderSentDate) {
	this.reminderSentDate = reminderSentDate;
	return this;
};

method.status = function(status) {
	this.status = status;
	return this;
};

method.totalSteps = function(totalSteps) {
	this.totalSteps = totalSteps;
	return this;
};

method.url = function(url) {
	this.url = url;
	return this;
};

method.wfRequestId = function(wfRequestId) {
	this.wfRequestId = wfRequestId;
	return this;
};

method.empWfRequestNav = function(empWfRequestNav) {
	this.empWfRequestNav = empWfRequestNav;
	return this;
};

method.parentWfRequestNav = function(parentWfRequestNav) {
	this.parentWfRequestNav = parentWfRequestNav;
	return this;
};

method.wfRequestCommentsNav = function(wfRequestCommentsNav) {
	this.wfRequestCommentsNav = wfRequestCommentsNav;
	return this;
};

method.wfRequestParticipatorNav = function(wfRequestParticipatorNav) {
	this.wfRequestParticipatorNav = wfRequestParticipatorNav;
	return this;
};

method.wfRequestStepNav = function(wfRequestStepNav) {
	this.wfRequestStepNav = wfRequestStepNav;
	return this;
};

method.workflowAllowedActionListNav = function(workflowAllowedActionListNav) {
	this.workflowAllowedActionListNav = workflowAllowedActionListNav;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		currentStepNum: this.currentStepNum,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		module: this.module,
		parentWfRequestId: this.parentWfRequestId,
		reminderSentDate: this.reminderSentDate,
		status: this.status,
		totalSteps: this.totalSteps,
		url: this.url,
		wfRequestId: this.wfRequestId,
		empWfRequestNav: this.empWfRequestNav,
		parentWfRequestNav: this.parentWfRequestNav,
		wfRequestCommentsNav: this.wfRequestCommentsNav,
		wfRequestParticipatorNav: this.wfRequestParticipatorNav,
		wfRequestStepNav: this.wfRequestStepNav,
		workflowAllowedActionListNav: this.workflowAllowedActionListNav
	};
};

module.exports = WfRequestEntityBuilder;
