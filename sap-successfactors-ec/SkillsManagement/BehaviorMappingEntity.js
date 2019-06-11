var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var BehaviorMappingEntityEntityBuilder = require("sap-successfactors-ec/SkillsManagement/Builders/BehaviorMappingEntityEntityBuilder");

exports.COMPETENCY_ENTITY_EXTERNAL_CODE = "CompetencyEntity_externalCode";
exports.BEHAVIOR_NAME_DE__D_E = "behaviorName_de_DE";
exports.BEHAVIOR_NAME_DEFAULT_VALUE = "behaviorName_defaultValue";
exports.BEHAVIOR_NAME_EN__G_B = "behaviorName_en_GB";
exports.BEHAVIOR_NAME_EN__U_S = "behaviorName_en_US";
exports.BEHAVIOR_NAME_ES__E_S = "behaviorName_es_ES";
exports.BEHAVIOR_NAME_FR__F_R = "behaviorName_fr_FR";
exports.BEHAVIOR_NAME_JA__J_P = "behaviorName_ja_JP";
exports.BEHAVIOR_NAME_KO__K_R = "behaviorName_ko_KR";
exports.BEHAVIOR_NAME_LOCALIZED = "behaviorName_localized";
exports.BEHAVIOR_NAME_NL__N_L = "behaviorName_nl_NL";
exports.BEHAVIOR_NAME_PT__B_R = "behaviorName_pt_BR";
exports.BEHAVIOR_NAME_PT__P_T = "behaviorName_pt_PT";
exports.BEHAVIOR_NAME_RU__R_U = "behaviorName_ru_RU";
exports.BEHAVIOR_NAME_ZH__C_N = "behaviorName_zh_CN";
exports.BEHAVIOR_NAME_ZH__T_W = "behaviorName_zh_TW";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DESCRIPTION_DE__D_E = "description_de_DE";
exports.DESCRIPTION_DEFAULT_VALUE = "description_defaultValue";
exports.DESCRIPTION_EN__G_B = "description_en_GB";
exports.DESCRIPTION_EN__U_S = "description_en_US";
exports.DESCRIPTION_ES__E_S = "description_es_ES";
exports.DESCRIPTION_FR__F_R = "description_fr_FR";
exports.DESCRIPTION_JA__J_P = "description_ja_JP";
exports.DESCRIPTION_KO__K_R = "description_ko_KR";
exports.DESCRIPTION_LOCALIZED = "description_localized";
exports.DESCRIPTION_NL__N_L = "description_nl_NL";
exports.DESCRIPTION_PT__B_R = "description_pt_BR";
exports.DESCRIPTION_PT__P_T = "description_pt_PT";
exports.DESCRIPTION_RU__R_U = "description_ru_RU";
exports.DESCRIPTION_ZH__C_N = "description_zh_CN";
exports.DESCRIPTION_ZH__T_W = "description_zh_TW";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.STATUS = "status";
exports.SUB_MODULE = "subModule";
exports.TRANSACTION_SEQUENCE = "transactionSequence";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BehaviorMappingEntityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BehaviorMappingEntityClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new BehaviorMappingEntityClientAsync(configurations);
};

function BehaviorMappingEntityClient (configurations) {

	var API_PATH = "/odata/v2/BehaviorMappingEntity";

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

function BehaviorMappingEntityClientAsync (configurations) {

	var API_PATH = "/odata/v2/BehaviorMappingEntity";

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
