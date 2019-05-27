var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var MyPendingWorkflowEntityBuilder = require("sap-successfactors-ec/Workflow/Builders/MyPendingWorkflowEntityBuilder");

exports.DESC = "desc";
exports.SUBJECT = "subject";
exports.URL = "url";
exports.WF_REQUEST_ID = "wfRequestId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new MyPendingWorkflowEntityBuilder();
};

exports.getClient = function(configurations) {
	return new MyPendingWorkflowClient(configurations);
};

function MyPendingWorkflowClient (configurations) {

	var API_PATH = "/odata/v2/MyPendingWorkflow";

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
