var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EmpWfRequestEntityBuilder = require("sap-successfactors-ec/Workflow/Builders/EmpWfRequestEntityBuilder");

exports.ACTION_TYPE = "actionType";
exports.EFFECTIVE_DATE = "effectiveDate";
exports.EMP_WF_REQUEST_ID = "empWfRequestId";
exports.ENTITY_TYPE = "entityType";
exports.EVENT_REASON = "eventReason";
exports.REQUEST_TYPE = "requestType";
exports.SUBJECT_ID = "subjectId";
exports.WF_CONFIG = "wfConfig";
exports.WF_REQUEST_ID = "wfRequestId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmpWfRequestEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmpWfRequestClient(configurations);
};

function EmpWfRequestClient (configurations) {

	var API_PATH = "/odata/v2/EmpWfRequest";

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
