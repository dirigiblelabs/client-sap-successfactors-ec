var Client = require("sap/Client");
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

function WorkflowAllowedActionListClient (configurations) {

	var API_PATH = "/odata/v2/WorkflowAllowedActionList";

	this.client = new Client(configurations, API_PATH);

	this.list = function(queryParameters) {
		return this.client.list(queryParameters);
	};

	this.get = function(id, queryParameters) {
		return this.client.get(getId(id), queryParameters);
	};

	this.create = function(entity, queryParameters) {
		return this.client.create(entity, queryParameters);
	};

	this.update = function(id, entity, queryParameters) {
		return this.client.update(getId(id), entity, queryParameters);
	};

	this.delete = function(id, queryParameters) {
		return this.client.delete(getId(id), queryParameters);
	};
}

function getId(id) {
	return "('" + id + "')";
}
