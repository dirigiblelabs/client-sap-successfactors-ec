var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
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

exports.getClientAsync = function(configurations) {
	return new EmployeeTimeSheetClientAsync(configurations);
};

function EmployeeTimeSheetClient (configurations) {

	var API_PATH = "/odata/v2/EmployeeTimeSheet";

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

function EmployeeTimeSheetClientAsync (configurations) {

	var API_PATH = "/odata/v2/EmployeeTimeSheet";

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
