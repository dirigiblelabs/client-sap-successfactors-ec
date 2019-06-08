var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var EmployeeDataReplicationElementEntityBuilder = require("sap-successfactors-ec/MasterDataReplication/Builders/EmployeeDataReplicationElementEntityBuilder");

exports.ALLOW_REPLICATION_IN_CORRECTION_PHASE = "allowReplicationInCorrectionPhase";
exports.COUNTRY = "country";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EXTERNAL_CODE = "externalCode";
exports.EXTERNAL_NAME_DE__D_E = "externalName_de_DE";
exports.EXTERNAL_NAME_DEFAULT_VALUE = "externalName_defaultValue";
exports.EXTERNAL_NAME_EN__G_B = "externalName_en_GB";
exports.EXTERNAL_NAME_EN__U_S = "externalName_en_US";
exports.EXTERNAL_NAME_ES__E_S = "externalName_es_ES";
exports.EXTERNAL_NAME_FR__F_R = "externalName_fr_FR";
exports.EXTERNAL_NAME_JA__J_P = "externalName_ja_JP";
exports.EXTERNAL_NAME_KO__K_R = "externalName_ko_KR";
exports.EXTERNAL_NAME_LOCALIZED = "externalName_localized";
exports.EXTERNAL_NAME_NL__N_L = "externalName_nl_NL";
exports.EXTERNAL_NAME_PT__B_R = "externalName_pt_BR";
exports.EXTERNAL_NAME_PT__P_T = "externalName_pt_PT";
exports.EXTERNAL_NAME_RU__R_U = "externalName_ru_RU";
exports.EXTERNAL_NAME_ZH__C_N = "externalName_zh_CN";
exports.EXTERNAL_NAME_ZH__T_W = "externalName_zh_TW";
exports.FIRST_REPLICATION_START_TIME_SINCE_LAST_SUCCESS = "firstReplicationStartTimeSinceLastSuccess";
exports.IS_WAITING_FOR_CONFIRMATION = "isWaitingForConfirmation";
exports.LAST_CONFIRMATION = "lastConfirmation";
exports.LAST_CONFIRMATION_WITH_SUCCESS = "lastConfirmationWithSuccess";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.LAST_REPLICATION_START_NOTIFICATION = "lastReplicationStartNotification";
exports.LAST_REPLICATION_START_TIME = "lastReplicationStartTime";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_OPTIMISTIC_LOCK_U_U_I_D = "mdfSystemOptimisticLockUUID";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.PERSON_ID = "personId";
exports.REPLICATION_CONTENT_TYPE = "replicationContentType";
exports.REPLICATION_PROCESSING_TIME = "replicationProcessingTime";
exports.REPLICATION_TARGET_SYSTEM = "replicationTargetSystem";
exports.REPLICATION_UPDATE_STATUS = "replicationUpdateStatus";
exports.SCHEDULED_REPLICATION_TIME = "scheduledReplicationTime";
exports.SEARCH_FIELD_OVERALL_STATUS = "searchFieldOverallStatus";
exports.SEARCH_FIELD_PERSON_ID = "searchFieldPersonId";
exports.SEARCH_FIELD_REPLICATION_PROCESSING_TIME = "searchFieldReplicationProcessingTime";
exports.USERS_SYS_ID = "usersSysId";
exports.LAST_CONFIRMATION_NAV = "lastConfirmationNav";
exports.LAST_CONFIRMATION_WITH_SUCCESS_NAV = "lastConfirmationWithSuccessNav";
exports.LAST_REPLICATION_START_NOTIFICATION_NAV = "lastReplicationStartNotificationNav";
exports.REPLICATION_TARGET_SYSTEM_NAV = "replicationTargetSystemNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmployeeDataReplicationElementEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmployeeDataReplicationElementClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new EmployeeDataReplicationElementClientAsync(configurations);
};

function EmployeeDataReplicationElementClient (configurations) {

	var API_PATH = "/odata/v2/EmployeeDataReplicationElement";

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

function EmployeeDataReplicationElementClientAsync (configurations) {

	var API_PATH = "/odata/v2/EmployeeDataReplicationElement";

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
