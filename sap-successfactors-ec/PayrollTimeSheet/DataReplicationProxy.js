var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var DataReplicationProxyEntityBuilder = require("sap-successfactors-ec/PayrollTimeSheet/Builders/DataReplicationProxyEntityBuilder");

exports.ALLOW_REPLICATION_IN_CORRECTION_PHASE = "allowReplicationInCorrectionPhase";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DATA_REPLICATION_PROXY_STATUS = "dataReplicationProxyStatus";
exports.EARLIEST_REPLICATION_DATE_TIME = "earliestReplicationDateTime";
exports.EMPLOYEE_TIME = "employeeTime";
exports.EMPLOYEE_TIME_VALUATION_RESULT = "employeeTimeValuationResult";
exports.EMPLOYEE_TIME_WITH_ACCOUNT_DETAIL = "employeeTimeWithAccountDetail";
exports.EXTERNAL_CODE = "externalCode";
exports.IS_SUBSEQUENT_CHANGE = "isSubsequentChange";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.LEGAL_ENTITY = "legalEntity";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.REPLICATION_CONTENT_TYPE = "replicationContentType";
exports.REPLICATION_SCENARIO_OBJECT = "replicationScenarioObject";
exports.REPLICATION_TARGET_SYSTEM = "replicationTargetSystem";
exports.SOURCE_GENERIC_OBJECT_EXTERNAL_CODE = "sourceGenericObjectExternalCode";
exports.SOURCE_GENERIC_OBJECT_INTERNAL_ID = "sourceGenericObjectInternalId";
exports.TIME_ACCOUNT = "timeAccount";
exports.TIME_ACCOUNT_PAYOUT = "timeAccountPayout";
exports.TIME_ACCOUNT_SNAPSHOT = "timeAccountSnapshot";
exports.USE_COST_CENTER_EXTERNAL_OBJECT_ID = "useCostCenterExternalObjectId";
exports.USER_ID = "userId";
exports.EMPLOYEE_TIME_VALUATION_RESULT_NAV = "employeeTimeValuationResultNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new DataReplicationProxyEntityBuilder();
};

exports.getClient = function(configurations) {
	return new DataReplicationProxyClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new DataReplicationProxyClientAsync(configurations);
};

function DataReplicationProxyClient (configurations) {

	var API_PATH = "/odata/v2/DataReplicationProxy";

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

function DataReplicationProxyClientAsync (configurations) {

	var API_PATH = "/odata/v2/DataReplicationProxy";

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
