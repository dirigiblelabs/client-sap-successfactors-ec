var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var WorkflowAllowedActionListEntityBuilder = require("sap-successfactors-ec/Workflow/Builders/WorkflowAllowedActionListEntityBuilder");

exports.ALLOW_APPROVE = "allowApprove";
exports.ALLOW_DELEGATE_DECLINE = "allowDelegateDecline";
exports.ALLOW_DELEGATE_GRANT = "allowDelegateGrant";
exports.ALLOW_DELEGATE_REVOKE = "allowDelegateRevoke";
exports.ALLOW_POST_COMMENT = "allowPostComment";
exports.ALLOW_REJECT = "allowReject";
exports.ALLOW_RESUBMIT = "allowResubmit";
exports.ALLOW_SENDBACK = "allowSendback";
exports.ALLOW_UPDATE_REQUEST = "allowUpdateRequest";
exports.ALLOW_WITHDRAW = "allowWithdraw";
exports.WF_REQUEST_ID = "wfRequestId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new WorkflowAllowedActionListEntityBuilder();
};

exports.getClient = function(configurations) {
	return new WorkflowAllowedActionListClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new WorkflowAllowedActionListClientAsync(configurations);
};

function WorkflowAllowedActionListClient (configurations) {

	var API_PATH = "/odata/v2/WorkflowAllowedActionList";

	this.client = new Client(configurations, API_PATH);

	this.list = function(queryParameters, options) {
		return this.client.list(queryParameters, options);
	};

	this.get = function(id, queryParameters, options) {
		return this.client.get(getId(id), queryParameters, options);
	};

	this.create = function(entity, queryParameters, options) {
		return this.client.create(entity, queryParameters, options);
	};

	this.update = function(id, entity, queryParameters, options) {
		return this.client.update(getId(id), entity, queryParameters, options);
	};

	this.delete = function(id, queryParameters, options) {
		return this.client.delete(getId(id), queryParameters, options);
	};

	this.count = function(queryParameters, options) {
		return this.client.get("/$count", queryParameters, options);
	};
}

function WorkflowAllowedActionListClientAsync (configurations) {

	var API_PATH = "/odata/v2/WorkflowAllowedActionList";

	this.client = new ClientAsync(configurations, API_PATH);

	this.listAsync = function(callback, queryParameters, options) {
		return this.client.listAsync(callback, queryParameters, options);
	};

	this.getAsync = function(callback, id, queryParameters, options) {
		return this.client.getAsync(callback, getId(id), queryParameters, options);
	};

	this.createAsync = function(callback, entity, queryParameters, options) {
		return this.client.createAsync(callback, entity, queryParameters, options);
	};

	this.updateAsync = function(callback, id, entity, queryParameters, options) {
		return this.client.update(callback, getId(id), entity, queryParameters, options);
	};

	this.deleteAsync = function(callback, id, queryParameters, options) {
		return this.client.deleteAsync(callback, getId(id), queryParameters, options);
	};

	this.countAsync = function(callback, queryParameters, options) {
		return this.client.getAsync(callback, "/$count", queryParameters, options);
	};

	this.execute = function() {
		return this.client.execute();
	};
}

function getId(id) {
	return "('" + id + "')";
}
