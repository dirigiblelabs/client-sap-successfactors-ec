var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var EmployeeTimeMEXEntityBuilder = require("sap-successfactors-ec/TimeOff/Builders/EmployeeTimeMEXEntityBuilder");

exports.EMPLOYEE_TIME_EXTERNAL_CODE = "EmployeeTime_externalCode";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DAYS_ALREADY_CUMULATED_FOR_SAME_SICKNESS = "daysAlreadyCumulatedForSameSickness";
exports.EXTERNAL_CODE = "externalCode";
exports.IDENTICAL_SICKNESS_GROUP = "identicalSicknessGroup";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.REFERENCE_NUMBER = "referenceNumber";
exports.IDENTICAL_SICKNESS_GROUP_NAV = "identicalSicknessGroupNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmployeeTimeMEXEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmployeeTimeMEXClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new EmployeeTimeMEXClientAsync(configurations);
};

function EmployeeTimeMEXClient (configurations) {

	var API_PATH = "/odata/v2/EmployeeTimeMEX";

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

function EmployeeTimeMEXClientAsync (configurations) {

	var API_PATH = "/odata/v2/EmployeeTimeMEX";

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
