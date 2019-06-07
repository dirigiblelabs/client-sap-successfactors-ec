var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var RatedSkillMappingEntityBuilder = require("sap-successfactors-ec/SkillsManagement/Builders/RatedSkillMappingEntityBuilder");

exports.SKILL_PROFILE_EXTERNAL_CODE = "SkillProfile_externalCode";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EXPECTED_LEVEL_DE__D_E = "expectedLevel_de_DE";
exports.EXPECTED_LEVEL_DEFAULT_VALUE = "expectedLevel_defaultValue";
exports.EXPECTED_LEVEL_EN__G_B = "expectedLevel_en_GB";
exports.EXPECTED_LEVEL_EN__U_S = "expectedLevel_en_US";
exports.EXPECTED_LEVEL_ES__E_S = "expectedLevel_es_ES";
exports.EXPECTED_LEVEL_FR__F_R = "expectedLevel_fr_FR";
exports.EXPECTED_LEVEL_JA__J_P = "expectedLevel_ja_JP";
exports.EXPECTED_LEVEL_KO__K_R = "expectedLevel_ko_KR";
exports.EXPECTED_LEVEL_LOCALIZED = "expectedLevel_localized";
exports.EXPECTED_LEVEL_NL__N_L = "expectedLevel_nl_NL";
exports.EXPECTED_LEVEL_PT__B_R = "expectedLevel_pt_BR";
exports.EXPECTED_LEVEL_PT__P_T = "expectedLevel_pt_PT";
exports.EXPECTED_LEVEL_RU__R_U = "expectedLevel_ru_RU";
exports.EXPECTED_LEVEL_ZH__C_N = "expectedLevel_zh_CN";
exports.EXPECTED_LEVEL_ZH__T_W = "expectedLevel_zh_TW";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MANAGER_RATED_LEVEL_DE__D_E = "managerRatedLevel_de_DE";
exports.MANAGER_RATED_LEVEL_DEFAULT_VALUE = "managerRatedLevel_defaultValue";
exports.MANAGER_RATED_LEVEL_EN__G_B = "managerRatedLevel_en_GB";
exports.MANAGER_RATED_LEVEL_EN__U_S = "managerRatedLevel_en_US";
exports.MANAGER_RATED_LEVEL_ES__E_S = "managerRatedLevel_es_ES";
exports.MANAGER_RATED_LEVEL_FR__F_R = "managerRatedLevel_fr_FR";
exports.MANAGER_RATED_LEVEL_JA__J_P = "managerRatedLevel_ja_JP";
exports.MANAGER_RATED_LEVEL_KO__K_R = "managerRatedLevel_ko_KR";
exports.MANAGER_RATED_LEVEL_LOCALIZED = "managerRatedLevel_localized";
exports.MANAGER_RATED_LEVEL_NL__N_L = "managerRatedLevel_nl_NL";
exports.MANAGER_RATED_LEVEL_PT__B_R = "managerRatedLevel_pt_BR";
exports.MANAGER_RATED_LEVEL_PT__P_T = "managerRatedLevel_pt_PT";
exports.MANAGER_RATED_LEVEL_RU__R_U = "managerRatedLevel_ru_RU";
exports.MANAGER_RATED_LEVEL_ZH__C_N = "managerRatedLevel_zh_CN";
exports.MANAGER_RATED_LEVEL_ZH__T_W = "managerRatedLevel_zh_TW";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.SELF_RATED_LEVEL_DE__D_E = "selfRatedLevel_de_DE";
exports.SELF_RATED_LEVEL_DEFAULT_VALUE = "selfRatedLevel_defaultValue";
exports.SELF_RATED_LEVEL_EN__G_B = "selfRatedLevel_en_GB";
exports.SELF_RATED_LEVEL_EN__U_S = "selfRatedLevel_en_US";
exports.SELF_RATED_LEVEL_ES__E_S = "selfRatedLevel_es_ES";
exports.SELF_RATED_LEVEL_FR__F_R = "selfRatedLevel_fr_FR";
exports.SELF_RATED_LEVEL_JA__J_P = "selfRatedLevel_ja_JP";
exports.SELF_RATED_LEVEL_KO__K_R = "selfRatedLevel_ko_KR";
exports.SELF_RATED_LEVEL_LOCALIZED = "selfRatedLevel_localized";
exports.SELF_RATED_LEVEL_NL__N_L = "selfRatedLevel_nl_NL";
exports.SELF_RATED_LEVEL_PT__B_R = "selfRatedLevel_pt_BR";
exports.SELF_RATED_LEVEL_PT__P_T = "selfRatedLevel_pt_PT";
exports.SELF_RATED_LEVEL_RU__R_U = "selfRatedLevel_ru_RU";
exports.SELF_RATED_LEVEL_ZH__C_N = "selfRatedLevel_zh_CN";
exports.SELF_RATED_LEVEL_ZH__T_W = "selfRatedLevel_zh_TW";
exports.SKILL = "skill";
exports.STATUS = "status";
exports.SUB_MODULE = "subModule";
exports.TRANSACTION_SEQUENCE = "transactionSequence";
exports.SKILL_NAV = "skillNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new RatedSkillMappingEntityBuilder();
};

exports.getClient = function(configurations) {
	return new RatedSkillMappingClient(configurations);
};

function RatedSkillMappingClient (configurations) {

	var API_PATH = "/odata/v2/RatedSkillMapping";

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
