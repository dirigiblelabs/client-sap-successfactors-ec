var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EmployeeTimeCalendarEntityBuilder = require("sap-successfactors-ec/TimeOff/Builders/EmployeeTimeCalendarEntityBuilder");

exports.EMPLOYEE_TIME_EXTERNAL_CODE = "EmployeeTime_externalCode";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DATE = "date";
exports.DEDUCTION_QUANTITY = "deductionQuantity";
exports.END_TIME = "endTime";
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
exports.QUANTITY_IN_DAYS = "quantityInDays";
exports.QUANTITY_IN_HOURS = "quantityInHours";
exports.START_TIME = "startTime";
exports.WORK_SCHEDULE_INTERNAL_ID = "workScheduleInternalId";
exports.TIME_ACCOUNT_DETAIL = "timeAccountDetail";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmployeeTimeCalendarEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmployeeTimeCalendarClient(configurations);
};

function EmployeeTimeCalendarClient (configurations) {

	var API_PATH = "/odata/v2/EmployeeTimeCalendar";

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
