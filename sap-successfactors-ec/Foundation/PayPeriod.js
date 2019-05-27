var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var PayPeriodEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/PayPeriodEntityBuilder");

exports.PAY_CALENDAR_PAY_GROUP = "PayCalendar_payGroup";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CUST_PAY_PERIODS_PER_YEAR = "cust_payPeriodsPerYear";
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
exports.OFFCYCLE = "offcycle";
exports.PAY_CHECK_ISSUE_DATE = "payCheckIssueDate";
exports.PAY_PERIOD_BEGIN_DATE = "payPeriodBeginDate";
exports.PAY_PERIOD_END_DATE = "payPeriodEndDate";
exports.PROCESSING_RUN_ID = "processingRunId";
exports.RUN_TYPE = "runType";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PayPeriodEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PayPeriodClient(configurations);
};

function PayPeriodClient (configurations) {

	var API_PATH = "/odata/v2/PayPeriod";

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