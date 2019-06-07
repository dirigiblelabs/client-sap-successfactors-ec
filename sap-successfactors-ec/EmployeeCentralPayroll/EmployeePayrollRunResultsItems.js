var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EmployeePayrollRunResultsItemsEntityBuilder = require("sap-successfactors-ec/EmployeeCentralPayroll/Builders/EmployeePayrollRunResultsItemsEntityBuilder");

exports.EMPLOYEE_PAYROLL_RUN_RESULTS_EXTERNAL_CODE = "EmployeePayrollRunResults_externalCode";
exports.EMPLOYEE_PAYROLL_RUN_RESULTS_MDF_SYSTEM_EFFECTIVE_START_DATE = "EmployeePayrollRunResults_mdfSystemEffectiveStartDate";
exports.AMOUNT = "amount";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.END_DATE_WHEN_EARNED = "endDateWhenEarned";
exports.EXTERNAL_CODE = "externalCode";
exports.EXTERNAL_NAME = "externalName";
exports.GROUPING_REASON = "groupingReason";
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
exports.PAYROLL_PROVIDER_GROUPING_REASON = "payrollProviderGroupingReason";
exports.PAYROLL_PROVIDER_GROUPING_VALUE = "payrollProviderGroupingValue";
exports.PAYROLL_PROVIDER_UNIT_OF_MEASUREMENT = "payrollProviderUnitOfMeasurement";
exports.PAYROLL_PROVIDER_WAGE_TYPE = "payrollProviderWageType";
exports.QUANTITY = "quantity";
exports.START_DATE_WHEN_EARNED = "startDateWhenEarned";
exports.UNIT_OF_MEASUREMENT = "unitOfMeasurement";
exports.WAGE_TYPE = "wageType";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmployeePayrollRunResultsItemsEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmployeePayrollRunResultsItemsClient(configurations);
};

function EmployeePayrollRunResultsItemsClient (configurations) {

	var API_PATH = "/odata/v2/EmployeePayrollRunResultsItems";

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
