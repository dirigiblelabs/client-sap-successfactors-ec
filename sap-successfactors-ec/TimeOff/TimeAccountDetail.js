var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var TimeAccountDetailEntityBuilder = require("sap-successfactors-ec/TimeOff/Builders/TimeAccountDetailEntityBuilder");

exports.TIME_ACCOUNT_EXTERNAL_CODE = "TimeAccount_externalCode";
exports.ACCRUAL_PERIOD_ID = "accrualPeriodId";
exports.ADVANCED = "advanced";
exports.BOOKING_AMOUNT = "bookingAmount";
exports.BOOKING_DATE = "bookingDate";
exports.BOOKING_TYPE = "bookingType";
exports.BOOKING_UNIT = "bookingUnit";
exports.CALENDAR_ENTRY = "calendarEntry";
exports.CHANGE_CALENDAR = "changeCalendar";
exports.COMMENT = "comment";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EMPLOYEE_TIME = "employeeTime";
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
exports.PAYOUT_ACCRUAL_SEPARATED = "payoutAccrualSeparated";
exports.REFERENCE_OBJECT = "referenceObject";
exports.CALENDAR_ENTRY_NAV = "calendarEntryNav";
exports.EMPLOYEE_TIME_NAV = "employeeTimeNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new TimeAccountDetailEntityBuilder();
};

exports.getClient = function(configurations) {
	return new TimeAccountDetailClient(configurations);
};

function TimeAccountDetailClient (configurations) {

	var API_PATH = "/odata/v2/TimeAccountDetail";

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
