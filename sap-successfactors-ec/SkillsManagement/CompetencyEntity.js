var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var CompetencyEntityEntityBuilder = require("sap-successfactors-ec/SkillsManagement/Builders/CompetencyEntityEntityBuilder");

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
exports.COLLECTION = "collection";
exports.CORE = "core";
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
exports.STATUS = "status";
exports.SUB_MODULE = "subModule";
exports.TRANSACTION_SEQUENCE = "transactionSequence";
exports.BEHAVIORS = "behaviors";
exports.COMPETENCIES = "competencies";
exports.COMPETENCY_TYPES = "competencyTypes";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new CompetencyEntityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new CompetencyEntityClient(configurations);
};

function CompetencyEntityClient (configurations) {

	var API_PATH = "/odata/v2/CompetencyEntity";

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
