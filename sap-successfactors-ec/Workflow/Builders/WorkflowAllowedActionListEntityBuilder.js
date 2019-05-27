var method = WorkflowAllowedActionListEntityBuilder.prototype;

function WorkflowAllowedActionListEntityBuilder() {

}

method.allowApprove = function(allowApprove) {
	this.allowApprove = allowApprove;
	return this;
};

method.allowDelegateDecline = function(allowDelegateDecline) {
	this.allowDelegateDecline = allowDelegateDecline;
	return this;
};

method.allowDelegateGrant = function(allowDelegateGrant) {
	this.allowDelegateGrant = allowDelegateGrant;
	return this;
};

method.allowDelegateRevoke = function(allowDelegateRevoke) {
	this.allowDelegateRevoke = allowDelegateRevoke;
	return this;
};

method.allowPostComment = function(allowPostComment) {
	this.allowPostComment = allowPostComment;
	return this;
};

method.allowReject = function(allowReject) {
	this.allowReject = allowReject;
	return this;
};

method.allowResubmit = function(allowResubmit) {
	this.allowResubmit = allowResubmit;
	return this;
};

method.allowSendback = function(allowSendback) {
	this.allowSendback = allowSendback;
	return this;
};

method.allowUpdateRequest = function(allowUpdateRequest) {
	this.allowUpdateRequest = allowUpdateRequest;
	return this;
};

method.allowWithdraw = function(allowWithdraw) {
	this.allowWithdraw = allowWithdraw;
	return this;
};

method.wfRequestId = function(wfRequestId) {
	this.wfRequestId = wfRequestId;
	return this;
};

method.build = function() {
	return {
		allowApprove: this.allowApprove,
		allowDelegateDecline: this.allowDelegateDecline,
		allowDelegateGrant: this.allowDelegateGrant,
		allowDelegateRevoke: this.allowDelegateRevoke,
		allowPostComment: this.allowPostComment,
		allowReject: this.allowReject,
		allowResubmit: this.allowResubmit,
		allowSendback: this.allowSendback,
		allowUpdateRequest: this.allowUpdateRequest,
		allowWithdraw: this.allowWithdraw,
		wfRequestId: this.wfRequestId
	};
};

module.exports = WorkflowAllowedActionListEntityBuilder;
