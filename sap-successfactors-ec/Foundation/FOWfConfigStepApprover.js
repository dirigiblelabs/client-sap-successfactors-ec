var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var FOWfConfigStepApproverEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FOWfConfigStepApproverEntityBuilder");

exports.ACTION_TYPE = "actionType";
exports.APPROVER_POSITION_RELATIONSHIP = "approverPositionRelationship";
exports.APPROVER_ROLE = "approverRole";
exports.APPROVER_TYPE = "approverType";
exports.CONTEXT = "context";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EMAIL_CONFIGURATION = "emailConfiguration";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.RELATIONSHIP_TO_APPROVER = "relationshipToApprover";
exports.RELATIONSHIP_TO_POSITION = "relationshipToPosition";
exports.RESPECT_R_B_P = "respectRBP";
exports.SKIP_TYPE = "skipType";
exports.STEP_NUM = "stepNum";
exports.APPROVER_DYNAMIC_ROLE_NAV = "approverDynamicRoleNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FOWfConfigStepApproverEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FOWfConfigStepApproverClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new FOWfConfigStepApproverClientAsync(configurations);
};

function FOWfConfigStepApproverClient (configurations) {

	var API_PATH = "/odata/v2/FOWfConfigStepApprover";

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

	this.count = function() {
		return this.client.get("/$count");
	};
}

function FOWfConfigStepApproverClientAsync (configurations) {

	var API_PATH = "/odata/v2/FOWfConfigStepApprover";

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

	this.countAsync = function(callback) {
		return this.client.getAsync(callback, "/$count");
	};

	this.execute = function() {
		return this.client.execute();
	};
}

function getId(id) {
	return "('" + id + "')";
}
