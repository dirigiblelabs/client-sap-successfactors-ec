var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var JobDescTemplateEntityBuilder = require("sap-successfactors-ec/SkillsManagement/Builders/JobDescTemplateEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EXTERNAL_CODE = "externalCode";
exports.FOOTER_DE__D_E = "footer_de_DE";
exports.FOOTER_DEFAULT_VALUE = "footer_defaultValue";
exports.FOOTER_EN__G_B = "footer_en_GB";
exports.FOOTER_EN__U_S = "footer_en_US";
exports.FOOTER_ES__E_S = "footer_es_ES";
exports.FOOTER_FR__F_R = "footer_fr_FR";
exports.FOOTER_JA__J_P = "footer_ja_JP";
exports.FOOTER_KO__K_R = "footer_ko_KR";
exports.FOOTER_LOCALIZED = "footer_localized";
exports.FOOTER_NL__N_L = "footer_nl_NL";
exports.FOOTER_PT__B_R = "footer_pt_BR";
exports.FOOTER_PT__P_T = "footer_pt_PT";
exports.FOOTER_RU__R_U = "footer_ru_RU";
exports.FOOTER_ZH__C_N = "footer_zh_CN";
exports.FOOTER_ZH__T_W = "footer_zh_TW";
exports.HEADER_DE__D_E = "header_de_DE";
exports.HEADER_DEFAULT_VALUE = "header_defaultValue";
exports.HEADER_EN__G_B = "header_en_GB";
exports.HEADER_EN__U_S = "header_en_US";
exports.HEADER_ES__E_S = "header_es_ES";
exports.HEADER_FR__F_R = "header_fr_FR";
exports.HEADER_JA__J_P = "header_ja_JP";
exports.HEADER_KO__K_R = "header_ko_KR";
exports.HEADER_LOCALIZED = "header_localized";
exports.HEADER_NL__N_L = "header_nl_NL";
exports.HEADER_PT__B_R = "header_pt_BR";
exports.HEADER_PT__P_T = "header_pt_PT";
exports.HEADER_RU__R_U = "header_ru_RU";
exports.HEADER_ZH__C_N = "header_zh_CN";
exports.HEADER_ZH__T_W = "header_zh_TW";
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
exports.TITLE_DE__D_E = "title_de_DE";
exports.TITLE_DEFAULT_VALUE = "title_defaultValue";
exports.TITLE_EN__G_B = "title_en_GB";
exports.TITLE_EN__U_S = "title_en_US";
exports.TITLE_ES__E_S = "title_es_ES";
exports.TITLE_FR__F_R = "title_fr_FR";
exports.TITLE_JA__J_P = "title_ja_JP";
exports.TITLE_KO__K_R = "title_ko_KR";
exports.TITLE_LOCALIZED = "title_localized";
exports.TITLE_NL__N_L = "title_nl_NL";
exports.TITLE_PT__B_R = "title_pt_BR";
exports.TITLE_PT__P_T = "title_pt_PT";
exports.TITLE_RU__R_U = "title_ru_RU";
exports.TITLE_ZH__C_N = "title_zh_CN";
exports.TITLE_ZH__T_W = "title_zh_TW";
exports.TRANSACTION_SEQUENCE = "transactionSequence";
exports.JD_FAMILY_MAPPINGS = "jdFamilyMappings";
exports.SECTIONS = "sections";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new JobDescTemplateEntityBuilder();
};

exports.getClient = function(configurations) {
	return new JobDescTemplateClient(configurations);
};

function JobDescTemplateClient (configurations) {

	var API_PATH = "/odata/v2/JobDescTemplate";

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
