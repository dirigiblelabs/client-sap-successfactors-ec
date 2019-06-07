var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var PositionRequisitionStatusEntityBuilder = require("sap-successfactors-ec/PositionManagement/Builders/PositionRequisitionStatusEntityBuilder");

exports.CODE = "code";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.POSITION_ID = "positionId";
exports.PROCESSING_STATUS = "processingStatus";
exports.REQUISITION_ID = "requisitionId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PositionRequisitionStatusEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PositionRequisitionStatusClient(configurations);
};

function PositionRequisitionStatusClient (configurations) {

	var API_PATH = "/odata/v2/PositionRequisitionStatus";

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
