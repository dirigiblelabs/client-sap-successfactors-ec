var Client = require("sap/Client");
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

function EmployeePayrollRunResultsClient (configurations) {

	var API_PATH = "/odata/v2/EmployeePayrollRunResults";

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
