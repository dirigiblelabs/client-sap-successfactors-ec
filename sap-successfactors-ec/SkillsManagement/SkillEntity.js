var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var SkillEntityEntityBuilder = require("sap-successfactors-ec/SkillsManagement/Builders/SkillEntityEntityBuilder");

exports.CATEGORY_DE__D_E = "category_de_DE";
exports.CATEGORY_DEFAULT_VALUE = "category_defaultValue";
exports.CATEGORY_EN__G_B = "category_en_GB";
exports.CATEGORY_EN__U_S = "category_en_US";
exports.CATEGORY_ES__E_S = "category_es_ES";
exports.CATEGORY_FR__F_R = "category_fr_FR";
exports.CATEGORY_JA__J_P = "category_ja_JP";
exports.CATEGORY_KO__K_R = "category_ko_KR";
exports.CATEGORY_LOCALIZED = "category_localized";
exports.CATEGORY_NL__N_L = "category_nl_NL";
exports.CATEGORY_PT__B_R = "category_pt_BR";
exports.CATEGORY_PT__P_T = "category_pt_PT";
exports.CATEGORY_RU__R_U = "category_ru_RU";
exports.CATEGORY_ZH__C_N = "category_zh_CN";
exports.CATEGORY_ZH__T_W = "category_zh_TW";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DEFINITION_DE__D_E = "definition_de_DE";
exports.DEFINITION_DEFAULT_VALUE = "definition_defaultValue";
exports.DEFINITION_EN__G_B = "definition_en_GB";
exports.DEFINITION_EN__U_S = "definition_en_US";
exports.DEFINITION_ES__E_S = "definition_es_ES";
exports.DEFINITION_FR__F_R = "definition_fr_FR";
exports.DEFINITION_JA__J_P = "definition_ja_JP";
exports.DEFINITION_KO__K_R = "definition_ko_KR";
exports.DEFINITION_LOCALIZED = "definition_localized";
exports.DEFINITION_NL__N_L = "definition_nl_NL";
exports.DEFINITION_PT__B_R = "definition_pt_BR";
exports.DEFINITION_PT__P_T = "definition_pt_PT";
exports.DEFINITION_RU__R_U = "definition_ru_RU";
exports.DEFINITION_ZH__C_N = "definition_zh_CN";
exports.DEFINITION_ZH__T_W = "definition_zh_TW";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EXTERNAL_CODE = "externalCode";
exports.GROUP_DE__D_E = "group_de_DE";
exports.GROUP_DEFAULT_VALUE = "group_defaultValue";
exports.GROUP_EN__G_B = "group_en_GB";
exports.GROUP_EN__U_S = "group_en_US";
exports.GROUP_ES__E_S = "group_es_ES";
exports.GROUP_FR__F_R = "group_fr_FR";
exports.GROUP_JA__J_P = "group_ja_JP";
exports.GROUP_KO__K_R = "group_ko_KR";
exports.GROUP_LOCALIZED = "group_localized";
exports.GROUP_NL__N_L = "group_nl_NL";
exports.GROUP_PT__B_R = "group_pt_BR";
exports.GROUP_PT__P_T = "group_pt_PT";
exports.GROUP_RU__R_U = "group_ru_RU";
exports.GROUP_ZH__C_N = "group_zh_CN";
exports.GROUP_ZH__T_W = "group_zh_TW";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.LIB_NAME_DE__D_E = "libName_de_DE";
exports.LIB_NAME_DEFAULT_VALUE = "libName_defaultValue";
exports.LIB_NAME_EN__G_B = "libName_en_GB";
exports.LIB_NAME_EN__U_S = "libName_en_US";
exports.LIB_NAME_ES__E_S = "libName_es_ES";
exports.LIB_NAME_FR__F_R = "libName_fr_FR";
exports.LIB_NAME_JA__J_P = "libName_ja_JP";
exports.LIB_NAME_KO__K_R = "libName_ko_KR";
exports.LIB_NAME_LOCALIZED = "libName_localized";
exports.LIB_NAME_NL__N_L = "libName_nl_NL";
exports.LIB_NAME_PT__B_R = "libName_pt_BR";
exports.LIB_NAME_PT__P_T = "libName_pt_PT";
exports.LIB_NAME_RU__R_U = "libName_ru_RU";
exports.LIB_NAME_ZH__C_N = "libName_zh_CN";
exports.LIB_NAME_ZH__T_W = "libName_zh_TW";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.NAME_DE__D_E = "name_de_DE";
exports.NAME_DEFAULT_VALUE = "name_defaultValue";
exports.NAME_EN__G_B = "name_en_GB";
exports.NAME_EN__U_S = "name_en_US";
exports.NAME_ES__E_S = "name_es_ES";
exports.NAME_FR__F_R = "name_fr_FR";
exports.NAME_JA__J_P = "name_ja_JP";
exports.NAME_KO__K_R = "name_ko_KR";
exports.NAME_LOCALIZED = "name_localized";
exports.NAME_NL__N_L = "name_nl_NL";
exports.NAME_PT__B_R = "name_pt_BR";
exports.NAME_PT__P_T = "name_pt_PT";
exports.NAME_RU__R_U = "name_ru_RU";
exports.NAME_ZH__C_N = "name_zh_CN";
exports.NAME_ZH__T_W = "name_zh_TW";
exports.PRO_LEVEL1_DE__D_E = "proLevel1_de_DE";
exports.PRO_LEVEL1_DEFAULT_VALUE = "proLevel1_defaultValue";
exports.PRO_LEVEL1_EN__G_B = "proLevel1_en_GB";
exports.PRO_LEVEL1_EN__U_S = "proLevel1_en_US";
exports.PRO_LEVEL1_ES__E_S = "proLevel1_es_ES";
exports.PRO_LEVEL1_FR__F_R = "proLevel1_fr_FR";
exports.PRO_LEVEL1_JA__J_P = "proLevel1_ja_JP";
exports.PRO_LEVEL1_KO__K_R = "proLevel1_ko_KR";
exports.PRO_LEVEL1_LOCALIZED = "proLevel1_localized";
exports.PRO_LEVEL1_NL__N_L = "proLevel1_nl_NL";
exports.PRO_LEVEL1_PT__B_R = "proLevel1_pt_BR";
exports.PRO_LEVEL1_PT__P_T = "proLevel1_pt_PT";
exports.PRO_LEVEL1_RU__R_U = "proLevel1_ru_RU";
exports.PRO_LEVEL1_ZH__C_N = "proLevel1_zh_CN";
exports.PRO_LEVEL1_ZH__T_W = "proLevel1_zh_TW";
exports.PRO_LEVEL2_DE__D_E = "proLevel2_de_DE";
exports.PRO_LEVEL2_DEFAULT_VALUE = "proLevel2_defaultValue";
exports.PRO_LEVEL2_EN__G_B = "proLevel2_en_GB";
exports.PRO_LEVEL2_EN__U_S = "proLevel2_en_US";
exports.PRO_LEVEL2_ES__E_S = "proLevel2_es_ES";
exports.PRO_LEVEL2_FR__F_R = "proLevel2_fr_FR";
exports.PRO_LEVEL2_JA__J_P = "proLevel2_ja_JP";
exports.PRO_LEVEL2_KO__K_R = "proLevel2_ko_KR";
exports.PRO_LEVEL2_LOCALIZED = "proLevel2_localized";
exports.PRO_LEVEL2_NL__N_L = "proLevel2_nl_NL";
exports.PRO_LEVEL2_PT__B_R = "proLevel2_pt_BR";
exports.PRO_LEVEL2_PT__P_T = "proLevel2_pt_PT";
exports.PRO_LEVEL2_RU__R_U = "proLevel2_ru_RU";
exports.PRO_LEVEL2_ZH__C_N = "proLevel2_zh_CN";
exports.PRO_LEVEL2_ZH__T_W = "proLevel2_zh_TW";
exports.PRO_LEVEL3_DE__D_E = "proLevel3_de_DE";
exports.PRO_LEVEL3_DEFAULT_VALUE = "proLevel3_defaultValue";
exports.PRO_LEVEL3_EN__G_B = "proLevel3_en_GB";
exports.PRO_LEVEL3_EN__U_S = "proLevel3_en_US";
exports.PRO_LEVEL3_ES__E_S = "proLevel3_es_ES";
exports.PRO_LEVEL3_FR__F_R = "proLevel3_fr_FR";
exports.PRO_LEVEL3_JA__J_P = "proLevel3_ja_JP";
exports.PRO_LEVEL3_KO__K_R = "proLevel3_ko_KR";
exports.PRO_LEVEL3_LOCALIZED = "proLevel3_localized";
exports.PRO_LEVEL3_NL__N_L = "proLevel3_nl_NL";
exports.PRO_LEVEL3_PT__B_R = "proLevel3_pt_BR";
exports.PRO_LEVEL3_PT__P_T = "proLevel3_pt_PT";
exports.PRO_LEVEL3_RU__R_U = "proLevel3_ru_RU";
exports.PRO_LEVEL3_ZH__C_N = "proLevel3_zh_CN";
exports.PRO_LEVEL3_ZH__T_W = "proLevel3_zh_TW";
exports.PRO_LEVEL4_DE__D_E = "proLevel4_de_DE";
exports.PRO_LEVEL4_DEFAULT_VALUE = "proLevel4_defaultValue";
exports.PRO_LEVEL4_EN__G_B = "proLevel4_en_GB";
exports.PRO_LEVEL4_EN__U_S = "proLevel4_en_US";
exports.PRO_LEVEL4_ES__E_S = "proLevel4_es_ES";
exports.PRO_LEVEL4_FR__F_R = "proLevel4_fr_FR";
exports.PRO_LEVEL4_JA__J_P = "proLevel4_ja_JP";
exports.PRO_LEVEL4_KO__K_R = "proLevel4_ko_KR";
exports.PRO_LEVEL4_LOCALIZED = "proLevel4_localized";
exports.PRO_LEVEL4_NL__N_L = "proLevel4_nl_NL";
exports.PRO_LEVEL4_PT__B_R = "proLevel4_pt_BR";
exports.PRO_LEVEL4_PT__P_T = "proLevel4_pt_PT";
exports.PRO_LEVEL4_RU__R_U = "proLevel4_ru_RU";
exports.PRO_LEVEL4_ZH__C_N = "proLevel4_zh_CN";
exports.PRO_LEVEL4_ZH__T_W = "proLevel4_zh_TW";
exports.PRO_LEVEL5_DE__D_E = "proLevel5_de_DE";
exports.PRO_LEVEL5_DEFAULT_VALUE = "proLevel5_defaultValue";
exports.PRO_LEVEL5_EN__G_B = "proLevel5_en_GB";
exports.PRO_LEVEL5_EN__U_S = "proLevel5_en_US";
exports.PRO_LEVEL5_ES__E_S = "proLevel5_es_ES";
exports.PRO_LEVEL5_FR__F_R = "proLevel5_fr_FR";
exports.PRO_LEVEL5_JA__J_P = "proLevel5_ja_JP";
exports.PRO_LEVEL5_KO__K_R = "proLevel5_ko_KR";
exports.PRO_LEVEL5_LOCALIZED = "proLevel5_localized";
exports.PRO_LEVEL5_NL__N_L = "proLevel5_nl_NL";
exports.PRO_LEVEL5_PT__B_R = "proLevel5_pt_BR";
exports.PRO_LEVEL5_PT__P_T = "proLevel5_pt_PT";
exports.PRO_LEVEL5_RU__R_U = "proLevel5_ru_RU";
exports.PRO_LEVEL5_ZH__C_N = "proLevel5_zh_CN";
exports.PRO_LEVEL5_ZH__T_W = "proLevel5_zh_TW";
exports.STATUS = "status";
exports.SUB_MODULE = "subModule";
exports.TRANSACTION_SEQUENCE = "transactionSequence";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new SkillEntityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new SkillEntityClient(configurations);
};

function SkillEntityClient (configurations) {

	var API_PATH = "/odata/v2/SkillEntity";

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
