var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
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

exports.getClientAsync = function(configurations) {
	return new FOJobClassLocalUSAClientAsync(configurations);
};

function FOJobClassLocalUSAClient (configurations) {

	var API_PATH = "/odata/v2/FOJobClassLocalUSA";

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

function FOJobClassLocalUSAClientAsync (configurations) {

	var API_PATH = "/odata/v2/FOJobClassLocalUSA";

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
