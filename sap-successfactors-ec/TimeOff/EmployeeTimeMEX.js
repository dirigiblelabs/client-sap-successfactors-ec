var Client = require("sap/Client");
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

function EmployeeTimeMEXClient (configurations) {

	var API_PATH = "/odata/v2/EmployeeTimeMEX";

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
