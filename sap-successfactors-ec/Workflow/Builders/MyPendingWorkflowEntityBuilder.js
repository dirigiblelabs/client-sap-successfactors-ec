var method = MyPendingWorkflowEntityBuilder.prototype;

function MyPendingWorkflowEntityBuilder() {

}

method.desc = function(desc) {
	this.desc = desc;
	return this;
};

method.subject = function(subject) {
	this.subject = subject;
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

method.build = function() {
	return {
		desc: this.desc,
		subject: this.subject,
		url: this.url,
		wfRequestId: this.wfRequestId
	};
};

module.exports = MyPendingWorkflowEntityBuilder;
