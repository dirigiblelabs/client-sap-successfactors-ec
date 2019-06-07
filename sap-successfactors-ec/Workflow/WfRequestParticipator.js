var Client = require("sap/Client");
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

function WfRequestParticipatorClient (configurations) {

	var API_PATH = "/odata/v2/WfRequestParticipator";

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

	this.count = function() {
		return this.client.get("/$count");
	};
}

function getId(id) {
	return "('" + id + "')";
}
