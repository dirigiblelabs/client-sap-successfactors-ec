var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var SkillContentEntityBuilder = require("sap-successfactors-ec/SkillsManagement/Builders/SkillContentEntityBuilder");

exports.JOB_PROFILE_EXTERNAL_CODE = "JobProfile_externalCode";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.ENTITY = "entity";
exports.EXTERNAL_CODE = "externalCode";
exports.JOB_PROFILE_ID = "jobProfileId";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.ORDER = "order";
exports.PRO_LEVEL_DE__D_E = "proLevel_de_DE";
exports.PRO_LEVEL_DEFAULT_VALUE = "proLevel_defaultValue";
exports.PRO_LEVEL_EN__G_B = "proLevel_en_GB";
exports.PRO_LEVEL_EN__U_S = "proLevel_en_US";
exports.PRO_LEVEL_ES__E_S = "proLevel_es_ES";
exports.PRO_LEVEL_FR__F_R = "proLevel_fr_FR";
exports.PRO_LEVEL_JA__J_P = "proLevel_ja_JP";
exports.PRO_LEVEL_KO__K_R = "proLevel_ko_KR";
exports.PRO_LEVEL_LOCALIZED = "proLevel_localized";
exports.PRO_LEVEL_NL__N_L = "proLevel_nl_NL";
exports.PRO_LEVEL_PT__B_R = "proLevel_pt_BR";
exports.PRO_LEVEL_PT__P_T = "proLevel_pt_PT";
exports.PRO_LEVEL_RU__R_U = "proLevel_ru_RU";
exports.PRO_LEVEL_ZH__C_N = "proLevel_zh_CN";
exports.PRO_LEVEL_ZH__T_W = "proLevel_zh_TW";
exports.ROLE = "role";
exports.SECTION_ID = "sectionId";
exports.SECTION_TYPE = "sectionType";
exports.SKILL_MAPPING_ID = "skillMappingId";
exports.STATUS = "status";
exports.SUB_MODULE = "subModule";
exports.TRANSACTION_SEQUENCE = "transactionSequence";
exports.ENTITY_NAV = "entityNav";
exports.ROLE_NAV = "roleNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new SkillContentEntityBuilder();
};

exports.getClient = function(configurations) {
	return new SkillContentClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new SkillContentClientAsync(configurations);
};

function SkillContentClient (configurations) {

	var API_PATH = "/odata/v2/SkillContent";

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

function SkillContentClientAsync (configurations) {

	var API_PATH = "/odata/v2/SkillContent";

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
