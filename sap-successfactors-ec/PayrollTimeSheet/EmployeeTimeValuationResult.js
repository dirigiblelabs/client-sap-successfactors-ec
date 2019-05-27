var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EmployeeTimeValuationResultEntityBuilder = require("sap-successfactors-ec/PayrollTimeSheet/Builders/EmployeeTimeValuationResultEntityBuilder");

exports.EMPLOYEE_TIME_SHEET_EXTERNAL_CODE = "EmployeeTimeSheet_externalCode";
exports.ALLOWANCE_TYPE = "allowanceType";
exports.APPROVAL_STATUS = "approvalStatus";
exports.BOOKING_DATE = "bookingDate";
exports.COST_CENTER = "costCenter";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EXTERNAL_CODE = "externalCode";
exports.HOURS = "hours";
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
exports.PAY_TYPE_EXTERNAL_NAME = "payTypeExternalName";
exports.PAY_TYPE_NAME = "payTypeName";
exports.POSTING_TARGET = "postingTarget";
exports.TIME_TYPE_GROUP = "timeTypeGroup";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmployeeTimeValuationResultEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmployeeTimeValuationResultClient(configurations);
};

function EmployeeTimeValuationResultClient (configurations) {

	var API_PATH = "/odata/v2/EmployeeTimeValuationResult";

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