var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var EmployeeTimeDEUEntityBuilder = require("sap-successfactors-ec/TimeOff/Builders/EmployeeTimeDEUEntityBuilder");

exports.EMPLOYEE_TIME_EXTERNAL_CODE = "EmployeeTime_externalCode";
exports.CONTINUED_PAY_CREDITED_DAYS = "continuedPayCreditedDays";
exports.CONTINUED_PAY_END_DATE = "continuedPayEndDate";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EXTERNAL_CODE = "externalCode";
exports.IDENTICAL_SICKNESS_GROUP = "identicalSicknessGroup";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.OVERLAPPING_SICKNESS_GROUP = "overlappingSicknessGroup";
exports.PAY_SUPPLEMENT_END_DATE = "paySupplementEndDate";
exports.PAY_SUPPLEMENT_START_DATE = "paySupplementStartDate";
exports.SICKNESS_CERTIFICATE_START_DATE = "sicknessCertificateStartDate";
exports.IDENTICAL_SICKNESS_GROUP_NAV = "identicalSicknessGroupNav";
exports.OVERLAPPING_SICKNESS_GROUP_NAV = "overlappingSicknessGroupNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmployeeTimeDEUEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmployeeTimeDEUClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new EmployeeTimeDEUClientAsync(configurations);
};

function EmployeeTimeDEUClient (configurations) {

	var API_PATH = "/odata/v2/EmployeeTimeDEU";

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

function EmployeeTimeDEUClientAsync (configurations) {

	var API_PATH = "/odata/v2/EmployeeTimeDEU";

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
