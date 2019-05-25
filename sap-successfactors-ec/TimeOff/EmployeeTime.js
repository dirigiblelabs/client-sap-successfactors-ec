/*eslint-disable no-extend-native */

var Client = require("sap-successfactors-ec/Client");
var QueryBuilder = require("sap-successfactors-ec/QueryBuilder");
var EmployeeTimeEntityBuilder = require("sap-successfactors-ec/TimeOff/EmployeeTimeEntityBuilder");

var API_PATH = "/odata/v2/EmployeeTime";

exports.APPROVAL_STATUS = "approvalStatus";
exports.CANCELLATION_WORKFLOW_REQUEST_ID = "cancellationWorkflowRequestId";
exports.COMMENT = "comment";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DEDUCTION_QUANTITY = "deductionQuantity";
exports.DISPLAY_QUANTITY = "displayQuantity";
exports.EDITABLE = "editable";
exports.END_DATE = "endDate";
exports.END_TIME = "endTime";
exports.EXTERNAL_CODE = "externalCode";
exports.FLEXIBLE_REQUESTING = "flexibleRequesting";
exports.FRACTION_QUANTITY = "fractionQuantity";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_TZ = "lastModifiedDateWithTZ";
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

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmployeeTimeEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmployeeTimeClient(configurations);
};

function EmployeeTimeClient (configurations) {

	this.configurations = configurations;

	this.list = function(queryParameters) {
		var url = getUrl() + Client.getQueryParameters(queryParameters);
		var response = Client.execute("GET", url, getOptions());
		return response.text;
	};

	this.get = function(id, queryParameters) {
		var url = getUrl() + "('" + id + "')" + Client.getQueryParameters(queryParameters);
		var response = Client.execute("GET", url, getOptions());
		return response.text;
	};

	this.create = function(entity) {
		
	};

	function getUrl() {
		return configurations.host + API_PATH;
	}

	function getOptions(entity) {
		var options = {
			headers: configurations.headers,
			sslTrustAllEnabled: true
		};
		if (entity !== undefined && entity !== null) {
			options.headers.push({
				name: "Content-Type",
				value: "application/json"
			});
			options.text = JSON.stringify(entity);
		}
		return options;
	}
}