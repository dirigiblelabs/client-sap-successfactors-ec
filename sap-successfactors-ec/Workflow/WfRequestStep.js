var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var WfRequestStepEntityBuilder = require("sap-successfactors-ec/Workflow/Builders/WfRequestStepEntityBuilder");

exports.ACTION_TYPE = "actionType";
exports.APPROVER_TYPE = "approverType";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.OWNER_ID = "ownerId";
exports.PROCESSED_BY = "processedBy";
exports.RELATED_TO = "relatedTo";
exports.ROLE = "role";
exports.STATUS = "status";
exports.STEP_NUM = "stepNum";
exports.WF_REQUEST_ID = "wfRequestId";
exports.WF_REQUEST_STEP_ID = "wfRequestStepId";
exports.WF_REQUEST_NAV = "wfRequestNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new WfRequestStepEntityBuilder();
};

exports.getClient = function(configurations) {
	return new WfRequestStepClient(configurations);
};

function WfRequestStepClient (configurations) {

	var API_PATH = "/odata/v2/WfRequestStep";

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
