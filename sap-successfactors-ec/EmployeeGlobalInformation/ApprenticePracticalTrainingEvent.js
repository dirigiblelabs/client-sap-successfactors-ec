var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var ApprenticePracticalTrainingEventEntityBuilder = require("sap-successfactors-ec/EmployeeGlobalInformation/Builders/ApprenticePracticalTrainingEventEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DEPARTMENT = "department";
exports.END_DATE_AND_TIME = "endDateAndTime";
exports.EVENT_NAME = "eventName";
exports.EVENT_TYPE = "eventType";
exports.EXTERNAL_CODE = "externalCode";
exports.IS_ALL_DAY_EVENT = "isAllDayEvent";
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
exports.NOTE = "note";
exports.SHARE_STATUS = "shareStatus";
exports.START_DATE_AND_TIME = "startDateAndTime";
exports.ASSIGNED_APPRENTICES = "assignedApprentices";
exports.EVENT_TYPE_NAV = "eventTypeNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new ApprenticePracticalTrainingEventEntityBuilder();
};

exports.getClient = function(configurations) {
	return new ApprenticePracticalTrainingEventClient(configurations);
};

function ApprenticePracticalTrainingEventClient (configurations) {

	var API_PATH = "/odata/v2/ApprenticePracticalTrainingEvent";

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
