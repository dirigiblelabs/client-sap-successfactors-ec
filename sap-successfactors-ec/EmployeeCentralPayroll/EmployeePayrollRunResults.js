var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var EmployeePayrollRunResultsEntityBuilder = require("sap-successfactors-ec/EmployeeCentralPayroll/Builders/EmployeePayrollRunResultsEntityBuilder");

exports.CLIENT_ID = "clientId";
exports.COMPANY_ID = "companyId";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CURRENCY = "currency";
exports.EMPLOYMENT_ID = "employmentId";
exports.END_DATE_WHEN_PAID = "endDateWhenPaid";
exports.EXTERNAL_CODE = "externalCode";
exports.EXTERNAL_NAME = "externalName";
exports.IS_VOID = "isVoid";
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
exports.PAY_DATE = "payDate";
exports.PAYROLL_ID = "payrollId";
exports.PAYROLL_PROVIDER_ID = "payrollProviderId";
exports.PAYROLL_PROVIDER_PAYROLL_RUN_TYPE = "payrollProviderPayrollRunType";
exports.PAYROLL_RUN_TYPE = "payrollRunType";
exports.PERSON_ID = "personId";
exports.SEQUENCE_NUMBER = "sequenceNumber";
exports.START_DATE_WHEN_PAID = "startDateWhenPaid";
exports.SYSTEM_ID = "systemId";
exports.USER_ID = "userId";
exports.EMPLOYEE_PAYROLL_RUN_RESULTS_ITEMS = "employeePayrollRunResultsItems";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmployeePayrollRunResultsEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmployeePayrollRunResultsClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new EmployeePayrollRunResultsClientAsync(configurations);
};

function EmployeePayrollRunResultsClient (configurations) {

	var API_PATH = "/odata/v2/EmployeePayrollRunResults";

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

function EmployeePayrollRunResultsClientAsync (configurations) {

	var API_PATH = "/odata/v2/EmployeePayrollRunResults";

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
