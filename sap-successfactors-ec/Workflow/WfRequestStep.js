var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
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

exports.getClientAsync = function(configurations) {
	return new WfRequestStepClientAsync(configurations);
};

function WfRequestStepClient (configurations) {

	var API_PATH = "/odata/v2/WfRequestStep";

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

function WfRequestStepClientAsync (configurations) {

	var API_PATH = "/odata/v2/WfRequestStep";

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
