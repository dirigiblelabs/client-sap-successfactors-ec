var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var PositionMatrixRelationshipEntityBuilder = require("sap-successfactors-ec/PositionManagement/Builders/PositionMatrixRelationshipEntityBuilder");

exports.POSITION_CODE = "Position_code";
exports.POSITION_EFFECTIVE_START_DATE = "Position_effectiveStartDate";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MATRIX_RELATIONSHIP_TYPE = "matrixRelationshipType";
exports.MDF_SYSTEM_CREATED_BY = "mdfSystemCreatedBy";
exports.MDF_SYSTEM_CREATED_DATE = "mdfSystemCreatedDate";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_LAST_MODIFIED_BY = "mdfSystemLastModifiedBy";
exports.MDF_SYSTEM_LAST_MODIFIED_DATE = "mdfSystemLastModifiedDate";
exports.MDF_SYSTEM_LAST_MODIFIED_DATE_WITH_T_Z = "mdfSystemLastModifiedDateWithTZ";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.RELATED_POSITION = "relatedPosition";
exports.RELATED_POSITION_NAV = "relatedPositionNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PositionMatrixRelationshipEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PositionMatrixRelationshipClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new PositionMatrixRelationshipClientAsync(configurations);
};

function PositionMatrixRelationshipClient (configurations) {

	var API_PATH = "/odata/v2/PositionMatrixRelationship";

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

function PositionMatrixRelationshipClientAsync (configurations) {

	var API_PATH = "/odata/v2/PositionMatrixRelationship";

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
