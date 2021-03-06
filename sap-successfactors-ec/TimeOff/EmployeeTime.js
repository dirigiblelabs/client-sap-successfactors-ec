var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var EmployeeTimeEntityBuilder = require("sap-successfactors-ec/TimeOff/Builders/EmployeeTimeEntityBuilder");

exports.APPROVAL_STATUS = "approvalStatus";
exports.CANCELLATION_WORKFLOW_REQUEST_ID = "cancellationWorkflowRequestId";
exports.COMMENT = "comment";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CUST_DELIVERYTYPE = "cust_deliverytype";
exports.CUST_EXPECTEDWEEK = "cust_expectedweek";
exports.CUST_NOTIFICATIONDATE = "cust_notificationdate";
exports.DEDUCTION_QUANTITY = "deductionQuantity";
exports.EDITABLE = "editable";
exports.END_DATE = "endDate";
exports.END_TIME = "endTime";
exports.EXTERNAL_CODE = "externalCode";
exports.FLEXIBLE_REQUESTING = "flexibleRequesting";
exports.FRACTION_QUANTITY = "fractionQuantity";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.LOA_ACTUAL_RETURN_DATE = "loaActualReturnDate";
exports.LOA_END_JOB_INFO_ID = "loaEndJobInfoId";
exports.LOA_EXPECTED_RETURN_DATE = "loaExpectedReturnDate";
exports.LOA_START_JOB_INFO_ID = "loaStartJobInfoId";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.ORIGINAL_QUANTITY_IN_DAYS = "originalQuantityInDays";
exports.QUANTITY_IN_DAYS = "quantityInDays";
exports.QUANTITY_IN_HOURS = "quantityInHours";
exports.RECURRENCE_GROUP = "recurrenceGroup";
exports.START_DATE = "startDate";
exports.START_TIME = "startTime";
exports.TIME_RECORD_ORIGIN = "timeRecordOrigin";
exports.TIME_TYPE = "timeType";
exports.UNDETERMINED_END_DATE = "undeterminedEndDate";
exports.USER_ID = "userId";
exports.WORKFLOW_INITIATED_BY_ADMIN = "workflowInitiatedByAdmin";
exports.WORKFLOW_REQUEST_ID = "workflowRequestId";
exports.COUNTRY_EXTENSION_D_E_U = "countryExtensionDEU";
exports.COUNTRY_EXTENSION_E_S_P = "countryExtensionESP";
exports.COUNTRY_EXTENSION_M_E_X = "countryExtensionMEX";
exports.RECURRENCE_GROUP_NAV = "recurrenceGroupNav";
exports.TIME_CALENDAR = "timeCalendar";
exports.TIME_TYPE_NAV = "timeTypeNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmployeeTimeEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmployeeTimeClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new EmployeeTimeClientAsync(configurations);
};

function EmployeeTimeClient (configurations) {

	var API_PATH = "/odata/v2/EmployeeTime";

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

function EmployeeTimeClientAsync (configurations) {

	var API_PATH = "/odata/v2/EmployeeTime";

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
