var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var WfRequestEntityBuilder = require("sap-successfactors-ec/Workflow/Builders/WfRequestEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.CURRENT_STEP_NUM = "currentStepNum";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.MODULE = "module";
exports.PARENT_WF_REQUEST_ID = "parentWfRequestId";
exports.REMINDER_SENT_DATE = "reminderSentDate";
exports.STATUS = "status";
exports.TOTAL_STEPS = "totalSteps";
exports.URL = "url";
exports.WF_REQUEST_ID = "wfRequestId";
exports.EMP_WF_REQUEST_NAV = "empWfRequestNav";
exports.PARENT_WF_REQUEST_NAV = "parentWfRequestNav";
exports.WF_REQUEST_COMMENTS_NAV = "wfRequestCommentsNav";
exports.WF_REQUEST_PARTICIPATOR_NAV = "wfRequestParticipatorNav";
exports.WF_REQUEST_STEP_NAV = "wfRequestStepNav";
exports.WORKFLOW_ALLOWED_ACTION_LIST_NAV = "workflowAllowedActionListNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new WfRequestEntityBuilder();
};

exports.getClient = function(configurations) {
	return new WfRequestClient(configurations);
};

function WfRequestClient (configurations) {

	var API_PATH = "/odata/v2/WfRequest";

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