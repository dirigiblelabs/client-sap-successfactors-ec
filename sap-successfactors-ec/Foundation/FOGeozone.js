var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var FOGeozoneEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FOGeozoneEntityBuilder");

exports.ADJUSTMENT_PERCENTAGE = "adjustmentPercentage";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.DESCRIPTION = "description";
exports.END_DATE = "endDate";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.NAME = "name";
exports.START_DATE = "startDate";
exports.STATUS = "status";
exports.DESCRIPTION_TRANSLATION_NAV = "descriptionTranslationNav";
exports.NAME_TRANSLATION_NAV = "nameTranslationNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FOGeozoneEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FOGeozoneClient(configurations);
};

function FOGeozoneClient (configurations) {

	var API_PATH = "/odata/v2/FOGeozone";

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
