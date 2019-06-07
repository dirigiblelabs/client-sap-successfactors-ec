var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var FOJobClassLocalUSAEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FOJobClassLocalUSAEntityBuilder");

exports.COUNTRY = "country";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.EEO1_JOB_CATEGORY = "eeo1JobCategory";
exports.EEO4_JOB_CATEGORY = "eeo4JobCategory";
exports.EEO5_JOB_CATEGORY = "eeo5JobCategory";
exports.EEO6_JOB_CATEGORY = "eeo6JobCategory";
exports.EEO_JOB_GROUP = "eeoJobGroup";
exports.END_DATE = "endDate";
exports.EXTERNAL_CODE = "externalCode";
exports.FLSA_STATUS_U_S_A = "flsaStatusUSA";
exports.GENERIC_NUMBER1 = "genericNumber1";
exports.GENERIC_NUMBER2 = "genericNumber2";
exports.GENERIC_NUMBER3 = "genericNumber3";
exports.GENERIC_NUMBER4 = "genericNumber4";
exports.GENERIC_NUMBER5 = "genericNumber5";
exports.GENERIC_NUMBER6 = "genericNumber6";
exports.GENERIC_STRING1 = "genericString1";
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
	return new FOJobClassLocalUSAEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FOJobClassLocalUSAClient(configurations);
};

function FOJobClassLocalUSAClient (configurations) {

	var API_PATH = "/odata/v2/FOJobClassLocalUSA";

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
