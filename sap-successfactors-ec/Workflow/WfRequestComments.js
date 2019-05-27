var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var WfRequestCommentsEntityBuilder = require("sap-successfactors-ec/Workflow/Builders/WfRequestCommentsEntityBuilder");

exports.ACTION_TYPE = "actionType";
exports.COMMENTS = "comments";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.USER_ID = "userId";
exports.WF_REQUEST_COMMENT_ID = "wfRequestCommentId";
exports.WF_REQUEST_ID = "wfRequestId";
exports.WF_REQUEST_STEP_ID = "wfRequestStepId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new WfRequestCommentsEntityBuilder();
};

exports.getClient = function(configurations) {
	return new WfRequestCommentsClient(configurations);
};

function WfRequestCommentsClient (configurations) {

	var API_PATH = "/odata/v2/WfRequestComments";

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