var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var PerGlobalInfoFRAEntityBuilder = require("sap-successfactors-ec/EmployeeGlobalInformation/Builders/PerGlobalInfoFRAEntityBuilder");

exports.COUNTRY = "country";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.END_DATE = "endDate";
exports.GENERIC_DATE1 = "genericDate1";
exports.GENERIC_DATE10 = "genericDate10";
exports.GENERIC_DATE2 = "genericDate2";
exports.GENERIC_DATE3 = "genericDate3";
exports.GENERIC_DATE4 = "genericDate4";
exports.GENERIC_DATE5 = "genericDate5";
exports.GENERIC_DATE6 = "genericDate6";
exports.GENERIC_DATE7 = "genericDate7";
exports.GENERIC_NUMBER1 = "genericNumber1";
exports.GENERIC_NUMBER10 = "genericNumber10";
exports.GENERIC_NUMBER11 = "genericNumber11";
exports.GENERIC_NUMBER12 = "genericNumber12";
exports.GENERIC_NUMBER13 = "genericNumber13";
exports.GENERIC_NUMBER14 = "genericNumber14";
exports.GENERIC_NUMBER15 = "genericNumber15";
exports.GENERIC_NUMBER16 = "genericNumber16";
exports.GENERIC_NUMBER2 = "genericNumber2";
exports.GENERIC_NUMBER3 = "genericNumber3";
exports.GENERIC_NUMBER4 = "genericNumber4";
exports.GENERIC_NUMBER5 = "genericNumber5";
exports.GENERIC_NUMBER6 = "genericNumber6";
exports.GENERIC_NUMBER7 = "genericNumber7";
exports.GENERIC_NUMBER8 = "genericNumber8";
exports.GENERIC_NUMBER9 = "genericNumber9";
exports.GENERIC_STRING1 = "genericString1";
exports.GENERIC_STRING10 = "genericString10";
exports.GENERIC_STRING11 = "genericString11";
exports.GENERIC_STRING12 = "genericString12";
exports.GENERIC_STRING13 = "genericString13";
exports.GENERIC_STRING14 = "genericString14";
exports.GENERIC_STRING15 = "genericString15";
exports.GENERIC_STRING16 = "genericString16";
exports.GENERIC_STRING2 = "genericString2";
exports.GENERIC_STRING3 = "genericString3";
exports.GENERIC_STRING4 = "genericString4";
exports.GENERIC_STRING5 = "genericString5";
exports.GENERIC_STRING6 = "genericString6";
exports.GENERIC_STRING7 = "genericString7";
exports.GENERIC_STRING8 = "genericString8";
exports.GENERIC_STRING9 = "genericString9";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.PERSON_ID_EXTERNAL = "personIdExternal";
exports.START_DATE = "startDate";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PerGlobalInfoFRAEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PerGlobalInfoFRAClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new PerGlobalInfoFRAClientAsync(configurations);
};

function PerGlobalInfoFRAClient (configurations) {

	var API_PATH = "/odata/v2/PerGlobalInfoFRA";

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

function PerGlobalInfoFRAClientAsync (configurations) {

	var API_PATH = "/odata/v2/PerGlobalInfoFRA";

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
