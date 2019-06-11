var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var WfRequestParticipatorEntityBuilder = require("sap-successfactors-ec/Workflow/Builders/WfRequestParticipatorEntityBuilder");

exports.ACTOR_TYPE = "actorType";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.OWNER_ID = "ownerId";
exports.PARTICIPATOR_TYPE = "participatorType";
exports.PROCESSING_ORDER = "processingOrder";
exports.RELATED_TO = "relatedTo";
exports.ROLE_ID = "roleId";
exports.WF_REQUEST_ID = "wfRequestId";
exports.WF_REQUEST_PARTICIPATOR_ID = "wfRequestParticipatorId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new WfRequestParticipatorEntityBuilder();
};

exports.getClient = function(configurations) {
	return new WfRequestParticipatorClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new WfRequestParticipatorClientAsync(configurations);
};

function WfRequestParticipatorClient (configurations) {

	var API_PATH = "/odata/v2/WfRequestParticipator";

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

function WfRequestParticipatorClientAsync (configurations) {

	var API_PATH = "/odata/v2/WfRequestParticipator";

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
