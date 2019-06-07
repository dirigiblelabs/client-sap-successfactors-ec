var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var JobProfileEntityBuilder = require("sap-successfactors-ec/SkillsManagement/Builders/JobProfileEntityBuilder");

exports.COMP_DATA_DE__D_E = "compData_de_DE";
exports.COMP_DATA_DEFAULT_VALUE = "compData_defaultValue";
exports.COMP_DATA_EN__G_B = "compData_en_GB";
exports.COMP_DATA_EN__U_S = "compData_en_US";
exports.COMP_DATA_ES__E_S = "compData_es_ES";
exports.COMP_DATA_FR__F_R = "compData_fr_FR";
exports.COMP_DATA_JA__J_P = "compData_ja_JP";
exports.COMP_DATA_KO__K_R = "compData_ko_KR";
exports.COMP_DATA_LOCALIZED = "compData_localized";
exports.COMP_DATA_NL__N_L = "compData_nl_NL";
exports.COMP_DATA_PT__B_R = "compData_pt_BR";
exports.COMP_DATA_PT__P_T = "compData_pt_PT";
exports.COMP_DATA_RU__R_U = "compData_ru_RU";
exports.COMP_DATA_ZH__C_N = "compData_zh_CN";
exports.COMP_DATA_ZH__T_W = "compData_zh_TW";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DRAFT = "draft";
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
exports.LAST_MODIFIER_NAME = "lastModifierName";
exports.LONG_DESC_DE__D_E = "longDesc_de_DE";
exports.LONG_DESC_DEFAULT_VALUE = "longDesc_defaultValue";
exports.LONG_DESC_EN__G_B = "longDesc_en_GB";
exports.LONG_DESC_EN__U_S = "longDesc_en_US";
exports.LONG_DESC_ES__E_S = "longDesc_es_ES";
exports.LONG_DESC_FR__F_R = "longDesc_fr_FR";
exports.LONG_DESC_JA__J_P = "longDesc_ja_JP";
exports.LONG_DESC_KO__K_R = "longDesc_ko_KR";
exports.LONG_DESC_LOCALIZED = "longDesc_localized";
exports.LONG_DESC_NL__N_L = "longDesc_nl_NL";
exports.LONG_DESC_PT__B_R = "longDesc_pt_BR";
exports.LONG_DESC_PT__P_T = "longDesc_pt_PT";
exports.LONG_DESC_RU__R_U = "longDesc_ru_RU";
exports.LONG_DESC_ZH__C_N = "longDesc_zh_CN";
exports.LONG_DESC_ZH__T_W = "longDesc_zh_TW";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.MIGRATED = "migrated";
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
exports.POSITION = "position";
exports.ROLE = "role";
exports.SHORT_DESC_DE__D_E = "shortDesc_de_DE";
exports.SHORT_DESC_DEFAULT_VALUE = "shortDesc_defaultValue";
exports.SHORT_DESC_EN__G_B = "shortDesc_en_GB";
exports.SHORT_DESC_EN__U_S = "shortDesc_en_US";
exports.SHORT_DESC_ES__E_S = "shortDesc_es_ES";
exports.SHORT_DESC_FR__F_R = "shortDesc_fr_FR";
exports.SHORT_DESC_JA__J_P = "shortDesc_ja_JP";
exports.SHORT_DESC_KO__K_R = "shortDesc_ko_KR";
exports.SHORT_DESC_LOCALIZED = "shortDesc_localized";
exports.SHORT_DESC_NL__N_L = "shortDesc_nl_NL";
exports.SHORT_DESC_PT__B_R = "shortDesc_pt_BR";
exports.SHORT_DESC_PT__P_T = "shortDesc_pt_PT";
exports.SHORT_DESC_RU__R_U = "shortDesc_ru_RU";
exports.SHORT_DESC_ZH__C_N = "shortDesc_zh_CN";
exports.SHORT_DESC_ZH__T_W = "shortDesc_zh_TW";
exports.STATUS = "status";
exports.SUB_MODULE = "subModule";
exports.TEMPLATE = "template";
exports.TRANSACTION_SEQUENCE = "transactionSequence";
exports.CERTIFICATION_CONTENTS = "certificationContents";
exports.COMP_DATAS = "compDatas";
exports.COMPETENCY_CONTENTS = "competencyContents";
exports.EMPLOYMENT_CONDITION_CONTENTS = "employmentConditionContents";
exports.FOOTERS = "footers";
exports.HEADERS = "headers";
exports.INTERVIEW_QUESTION_CONTENTS = "interviewQuestionContents";
exports.JOB_RESPONSIBILITY_CONTENTS = "jobResponsibilityContents";
exports.LONG_DESCIPTIONS = "longDesciptions";
exports.PHYSICAL_REQ_CONTENTS = "physicalReqContents";
exports.RELEVANT_INDUSTRY_CONTENTS = "relevantIndustryContents";
exports.ROLE_NAV = "roleNav";
exports.SHORT_DESCIPTIONS = "shortDesciptions";
exports.SKILL_CONTENTS = "skillContents";
exports.TEMPLATE_NAV = "templateNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new JobProfileEntityBuilder();
};

exports.getClient = function(configurations) {
	return new JobProfileClient(configurations);
};

function JobProfileClient (configurations) {

	var API_PATH = "/odata/v2/JobProfile";

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
