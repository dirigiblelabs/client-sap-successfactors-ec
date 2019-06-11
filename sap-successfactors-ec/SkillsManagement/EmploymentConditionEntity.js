var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var EmploymentConditionEntityEntityBuilder = require("sap-successfactors-ec/SkillsManagement/Builders/EmploymentConditionEntityEntityBuilder");

exports.CONDITION_DE__D_E = "condition_de_DE";
exports.CONDITION_DEFAULT_VALUE = "condition_defaultValue";
exports.CONDITION_EN__G_B = "condition_en_GB";
exports.CONDITION_EN__U_S = "condition_en_US";
exports.CONDITION_ES__E_S = "condition_es_ES";
exports.CONDITION_FR__F_R = "condition_fr_FR";
exports.CONDITION_JA__J_P = "condition_ja_JP";
exports.CONDITION_KO__K_R = "condition_ko_KR";
exports.CONDITION_LOCALIZED = "condition_localized";
exports.CONDITION_NL__N_L = "condition_nl_NL";
exports.CONDITION_PT__B_R = "condition_pt_BR";
exports.CONDITION_PT__P_T = "condition_pt_PT";
exports.CONDITION_RU__R_U = "condition_ru_RU";
exports.CONDITION_ZH__C_N = "condition_zh_CN";
exports.CONDITION_ZH__T_W = "condition_zh_TW";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
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
	return new EmploymentConditionEntityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmploymentConditionEntityClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new EmploymentConditionEntityClientAsync(configurations);
};

function EmploymentConditionEntityClient (configurations) {

	var API_PATH = "/odata/v2/EmploymentConditionEntity";

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

function EmploymentConditionEntityClientAsync (configurations) {

	var API_PATH = "/odata/v2/EmploymentConditionEntity";

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
