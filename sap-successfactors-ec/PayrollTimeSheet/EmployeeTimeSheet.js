var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EmployeeTimeSheetEntityBuilder = require("sap-successfactors-ec/PayrollTimeSheet/Builders/EmployeeTimeSheetEntityBuilder");

exports.APPROVAL_STATUS = "approvalStatus";
exports.COMMENT = "comment";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EDITABLE = "editable";
exports.END_DATE = "endDate";
exports.EXTERNAL_CODE = "externalCode";
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
exports.PLANNED_WORKING_TIME = "plannedWorkingTime";
exports.RECORDED_WORKING_TIME = "recordedWorkingTime";
exports.REPLACED_BY = "replacedBy";
exports.REPLACES = "replaces";
exports.START_DATE = "startDate";
exports.USER_ID = "userId";
exports.WORKFLOW_ACTION = "workflowAction";
exports.WORKFLOW_REQUEST_ID = "workflowRequestId";
exports.WORKING_TIME_ACCOUNT = "workingTimeAccount";
exports.EMPLOYEE_TIME_SHEET_ENTRY = "employeeTimeSheetEntry";
exports.EMPLOYEE_TIME_VALUATION_RESULT = "employeeTimeValuationResult";
exports.REPLACED_BY_NAV = "replacedByNav";
exports.REPLACES_NAV = "replacesNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmployeeTimeSheetEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmployeeTimeSheetClient(configurations);
};

function EmployeeTimeSheetClient (configurations) {

	var API_PATH = "/odata/v2/EmployeeTimeSheet";

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