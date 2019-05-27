var method = WfRequestCommentsEntityBuilder.prototype;

function WfRequestCommentsEntityBuilder() {

}

method.actionType = function(actionType) {
	this.actionType = actionType;
	return this;
};

method.comments = function(comments) {
	this.comments = comments;
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

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.wfRequestCommentId = function(wfRequestCommentId) {
	this.wfRequestCommentId = wfRequestCommentId;
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

method.build = function() {
	return {
		actionType: this.actionType,
		comments: this.comments,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		userId: this.userId,
		wfRequestCommentId: this.wfRequestCommentId,
		wfRequestId: this.wfRequestId,
		wfRequestStepId: this.wfRequestStepId
	};
};

module.exports = WfRequestCommentsEntityBuilder;
