var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var AvailableTimeTypeEntityBuilder = require("sap-successfactors-ec/TimeOff/Builders/AvailableTimeTypeEntityBuilder");

exports.TIME_TYPE_PROFILE_EXTERNAL_CODE = "TimeTypeProfile_externalCode";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.ENABLED_IN_ESS_SCENARIO = "enabledInEssScenario";
exports.EXTERNAL_CODE = "externalCode";
exports.FAVORITE_TIME_TYPE = "favoriteTimeType";
exports.HIDE_ACCOUNT_BALANCE = "hideAccountBalance";
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
exports.TIME_TYPE = "timeType";
exports.TIME_TYPE_NAV = "timeTypeNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new AvailableTimeTypeEntityBuilder();
};

exports.getClient = function(configurations) {
	return new AvailableTimeTypeClient(configurations);
};

function AvailableTimeTypeClient (configurations) {

	var API_PATH = "/odata/v2/AvailableTimeType";

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
