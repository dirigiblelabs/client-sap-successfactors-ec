var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var Background_GoogledocsEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/Background_GoogledocsEntityBuilder");

exports.BACKGROUND_ELEMENT_ID = "backgroundElementId";
exports.BG_ORDER_POS = "bgOrderPos";
exports.DOCUMENT_NAME = "documentName";
exports.DOCUMENTURL = "documenturl";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LASTMODIFIEDDATE = "lastmodifieddate";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new Background_GoogledocsEntityBuilder();
};

exports.getClient = function(configurations) {
	return new Background_GoogledocsClient(configurations);
};

function Background_GoogledocsClient (configurations) {

	var API_PATH = "/odata/v2/Background_Googledocs";

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