var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var WorkScheduleDayModelAssignmentEntityBuilder = require("sap-successfactors-ec/TimeOff/Builders/WorkScheduleDayModelAssignmentEntityBuilder");

exports.WORK_SCHEDULE_EXTERNAL_CODE = "WorkSchedule_externalCode";
exports.CATEGORY = "category";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DAY = "day";
exports.DAY_MODEL = "dayModel";
exports.DAY_WORKING_HOURS = "dayWorkingHours";
exports.HOURS_AND_MINUTES = "hoursAndMinutes";
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
exports.DAY_MODEL_NAV = "dayModelNav";
exports.SEGMENTS = "segments";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new WorkScheduleDayModelAssignmentEntityBuilder();
};

exports.getClient = function(configurations) {
	return new WorkScheduleDayModelAssignmentClient(configurations);
};

function WorkScheduleDayModelAssignmentClient (configurations) {

	var API_PATH = "/odata/v2/WorkScheduleDayModelAssignment";

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
