var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var EmployeeDataReplicationNotificationEntityBuilder = require("sap-successfactors-ec/MasterDataReplication/Builders/EmployeeDataReplicationNotificationEntityBuilder");

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
exports.PERSON_ID = "personId";
exports.REPLICATION_CONTENT_TYPE = "replicationContentType";
exports.REPLICATION_EVENT = "replicationEvent";
exports.REPLICATION_EVENT_TIME = "replicationEventTime";
exports.REPLICATION_TARGET_SYSTEM = "replicationTargetSystem";
exports.SENDER_ID = "senderId";
exports.USERS_SYS_ID = "usersSysId";
exports.REPLICATION_TARGET_SYSTEM_NAV = "replicationTargetSystemNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmployeeDataReplicationNotificationEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmployeeDataReplicationNotificationClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new EmployeeDataReplicationNotificationClientAsync(configurations);
};

function EmployeeDataReplicationNotificationClient (configurations) {

	var API_PATH = "/odata/v2/EmployeeDataReplicationNotification";

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

	this.count = function(queryParameters, options) {
		return this.client.get("/$count", queryParameters, options);
	};
}

function EmployeeDataReplicationNotificationClientAsync (configurations) {

	var API_PATH = "/odata/v2/EmployeeDataReplicationNotification";

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

	this.countAsync = function(callback, queryParameters, options) {
		return this.client.getAsync(callback, "/$count", queryParameters, options);
	};

	this.execute = function() {
		return this.client.execute();
	};
}

function getId(id) {
	return "('" + id + "')";
}
