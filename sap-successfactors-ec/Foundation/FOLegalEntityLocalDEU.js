var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var FOLegalEntityLocalDEUEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FOLegalEntityLocalDEUEntityBuilder");

exports.COUNTRY = "country";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.END_DATE = "endDate";
exports.EXTERNAL_CODE = "externalCode";
exports.GENERIC_STRING1 = "genericString1";
exports.GENERIC_STRING2 = "genericString2";
exports.GENERIC_STRING3 = "genericString3";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.START_DATE = "startDate";
exports.STATUS = "status";
exports.COUNTRY_NAV = "countryNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FOLegalEntityLocalDEUEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FOLegalEntityLocalDEUClient(configurations);
};

function FOLegalEntityLocalDEUClient (configurations) {

	var API_PATH = "/odata/v2/FOLegalEntityLocalDEU";

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
