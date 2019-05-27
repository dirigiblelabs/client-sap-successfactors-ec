var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var PerEmailEntityBuilder = require("sap-successfactors-ec/PersonalInformation/Builders/PerEmailEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.EMAIL_ADDRESS = "emailAddress";
exports.EMAIL_TYPE = "emailType";
exports.INCLUDE_ALL_RECORDS = "includeAllRecords";
exports.IS_PRIMARY = "isPrimary";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.OPERATION = "operation";
exports.PERSON_ID_EXTERNAL = "personIdExternal";
exports.PERSON_NAV = "personNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PerEmailEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PerEmailClient(configurations);
};

function PerEmailClient (configurations) {

	var API_PATH = "/odata/v2/PerEmail";

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
