var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var FOJobCodeEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FOJobCodeEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.CUST_STRING10 = "cust_string10";
exports.CUST_STRING1_DE__D_E = "cust_string1_de_DE";
exports.CUST_STRING1_DEFAULT_VALUE = "cust_string1_defaultValue";
exports.CUST_STRING1_EN__G_B = "cust_string1_en_GB";
exports.CUST_STRING1_EN__U_S = "cust_string1_en_US";
exports.CUST_STRING1_ES__E_S = "cust_string1_es_ES";
exports.CUST_STRING1_FR__F_R = "cust_string1_fr_FR";
exports.CUST_STRING1_JA__J_P = "cust_string1_ja_JP";
exports.CUST_STRING1_KO__K_R = "cust_string1_ko_KR";
exports.CUST_STRING1_LOCALIZED = "cust_string1_localized";
exports.CUST_STRING1_NL__N_L = "cust_string1_nl_NL";
exports.CUST_STRING1_PT__B_R = "cust_string1_pt_BR";
exports.CUST_STRING1_PT__P_T = "cust_string1_pt_PT";
exports.CUST_STRING1_RU__R_U = "cust_string1_ru_RU";
exports.CUST_STRING1_ZH__C_N = "cust_string1_zh_CN";
exports.CUST_STRING1_ZH__T_W = "cust_string1_zh_TW";
exports.CUST_STRING2_DE__D_E = "cust_string2_de_DE";
exports.CUST_STRING2_DEFAULT_VALUE = "cust_string2_defaultValue";
exports.CUST_STRING2_EN__G_B = "cust_string2_en_GB";
exports.CUST_STRING2_EN__U_S = "cust_string2_en_US";
exports.CUST_STRING2_ES__E_S = "cust_string2_es_ES";
exports.CUST_STRING2_FR__F_R = "cust_string2_fr_FR";
exports.CUST_STRING2_JA__J_P = "cust_string2_ja_JP";
exports.CUST_STRING2_KO__K_R = "cust_string2_ko_KR";
exports.CUST_STRING2_LOCALIZED = "cust_string2_localized";
exports.CUST_STRING2_NL__N_L = "cust_string2_nl_NL";
exports.CUST_STRING2_PT__B_R = "cust_string2_pt_BR";
exports.CUST_STRING2_PT__P_T = "cust_string2_pt_PT";
exports.CUST_STRING2_RU__R_U = "cust_string2_ru_RU";
exports.CUST_STRING2_ZH__C_N = "cust_string2_zh_CN";
exports.CUST_STRING2_ZH__T_W = "cust_string2_zh_TW";
exports.CUST_STRING3 = "cust_string3";
exports.CUST_STRING4 = "cust_string4";
exports.CUST_STRING5 = "cust_string5";
exports.CUST_STRING6_DE__D_E = "cust_string6_de_DE";
exports.CUST_STRING6_DEFAULT_VALUE = "cust_string6_defaultValue";
exports.CUST_STRING6_EN__G_B = "cust_string6_en_GB";
exports.CUST_STRING6_EN__U_S = "cust_string6_en_US";
exports.CUST_STRING6_ES__E_S = "cust_string6_es_ES";
exports.CUST_STRING6_FR__F_R = "cust_string6_fr_FR";
exports.CUST_STRING6_JA__J_P = "cust_string6_ja_JP";
exports.CUST_STRING6_KO__K_R = "cust_string6_ko_KR";
exports.CUST_STRING6_LOCALIZED = "cust_string6_localized";
exports.CUST_STRING6_NL__N_L = "cust_string6_nl_NL";
exports.CUST_STRING6_PT__B_R = "cust_string6_pt_BR";
exports.CUST_STRING6_PT__P_T = "cust_string6_pt_PT";
exports.CUST_STRING6_RU__R_U = "cust_string6_ru_RU";
exports.CUST_STRING6_ZH__C_N = "cust_string6_zh_CN";
exports.CUST_STRING6_ZH__T_W = "cust_string6_zh_TW";
exports.CUST_STRING7_DE__D_E = "cust_string7_de_DE";
exports.CUST_STRING7_DEFAULT_VALUE = "cust_string7_defaultValue";
exports.CUST_STRING7_EN__G_B = "cust_string7_en_GB";
exports.CUST_STRING7_EN__U_S = "cust_string7_en_US";
exports.CUST_STRING7_ES__E_S = "cust_string7_es_ES";
exports.CUST_STRING7_FR__F_R = "cust_string7_fr_FR";
exports.CUST_STRING7_JA__J_P = "cust_string7_ja_JP";
exports.CUST_STRING7_KO__K_R = "cust_string7_ko_KR";
exports.CUST_STRING7_LOCALIZED = "cust_string7_localized";
exports.CUST_STRING7_NL__N_L = "cust_string7_nl_NL";
exports.CUST_STRING7_PT__B_R = "cust_string7_pt_BR";
exports.CUST_STRING7_PT__P_T = "cust_string7_pt_PT";
exports.CUST_STRING7_RU__R_U = "cust_string7_ru_RU";
exports.CUST_STRING7_ZH__C_N = "cust_string7_zh_CN";
exports.CUST_STRING7_ZH__T_W = "cust_string7_zh_TW";
exports.CUST_STRING8_DE__D_E = "cust_string8_de_DE";
exports.CUST_STRING8_DEFAULT_VALUE = "cust_string8_defaultValue";
exports.CUST_STRING8_EN__G_B = "cust_string8_en_GB";
exports.CUST_STRING8_EN__U_S = "cust_string8_en_US";
exports.CUST_STRING8_ES__E_S = "cust_string8_es_ES";
exports.CUST_STRING8_FR__F_R = "cust_string8_fr_FR";
exports.CUST_STRING8_JA__J_P = "cust_string8_ja_JP";
exports.CUST_STRING8_KO__K_R = "cust_string8_ko_KR";
exports.CUST_STRING8_LOCALIZED = "cust_string8_localized";
exports.CUST_STRING8_NL__N_L = "cust_string8_nl_NL";
exports.CUST_STRING8_PT__B_R = "cust_string8_pt_BR";
exports.CUST_STRING8_PT__P_T = "cust_string8_pt_PT";
exports.CUST_STRING8_RU__R_U = "cust_string8_ru_RU";
exports.CUST_STRING8_ZH__C_N = "cust_string8_zh_CN";
exports.CUST_STRING8_ZH__T_W = "cust_string8_zh_TW";
exports.CUST_STRING9_DE__D_E = "cust_string9_de_DE";
exports.CUST_STRING9_DEFAULT_VALUE = "cust_string9_defaultValue";
exports.CUST_STRING9_EN__G_B = "cust_string9_en_GB";
exports.CUST_STRING9_EN__U_S = "cust_string9_en_US";
exports.CUST_STRING9_ES__E_S = "cust_string9_es_ES";
exports.CUST_STRING9_FR__F_R = "cust_string9_fr_FR";
exports.CUST_STRING9_JA__J_P = "cust_string9_ja_JP";
exports.CUST_STRING9_KO__K_R = "cust_string9_ko_KR";
exports.CUST_STRING9_LOCALIZED = "cust_string9_localized";
exports.CUST_STRING9_NL__N_L = "cust_string9_nl_NL";
exports.CUST_STRING9_PT__B_R = "cust_string9_pt_BR";
exports.CUST_STRING9_PT__P_T = "cust_string9_pt_PT";
exports.CUST_STRING9_RU__R_U = "cust_string9_ru_RU";
exports.CUST_STRING9_ZH__C_N = "cust_string9_zh_CN";
exports.CUST_STRING9_ZH__T_W = "cust_string9_zh_TW";
exports.CUSTOM_STRING1 = "customString1";
exports.CUSTOM_STRING2 = "customString2";
exports.CUSTOM_STRING3 = "customString3";
exports.CUSTOM_STRING4 = "customString4";
exports.CUSTOM_STRING5 = "customString5";
exports.CUSTOM_STRING6 = "customString6";
exports.CUSTOM_STRING7 = "customString7";
exports.CUSTOM_STRING8 = "customString8";
exports.CUSTOM_STRING9 = "customString9";
exports.DEFAULT_EMPLOYEE_CLASS = "defaultEmployeeClass";
exports.DEFAULT_JOB_LEVEL = "defaultJobLevel";
exports.DEFAULT_SUPERVISOR_LEVEL = "defaultSupervisorLevel";
exports.DESCRIPTION = "description";
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
exports.EMPLOYEE_CLASS = "employeeClass";
exports.END_DATE = "endDate";
exports.EXTERNAL_CODE = "externalCode";
exports.GRADE = "grade";
exports.IS_FULLTIME_EMPLOYEE = "isFulltimeEmployee";
exports.IS_REGULAR = "isRegular";
exports.JOB_FUNCTION = "jobFunction";
exports.JOB_LEVEL = "jobLevel";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.NAME = "name";
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
exports.PARENT_JOB_CODE = "parentJobCode";
exports.REGULAR_TEMPORARY = "regularTemporary";
exports.STANDARD_HOURS = "standardHours";
exports.START_DATE = "startDate";
exports.STATUS = "status";
exports.SUPERVISOR_LEVEL = "supervisorLevel";
exports.WORKER_COMP_CODE = "workerCompCode";
exports.CUSTOM_STRING1_TRANSLATION_NAV = "customString1TranslationNav";
exports.CUSTOM_STRING2_TRANSLATION_NAV = "customString2TranslationNav";
exports.CUSTOM_STRING6_TRANSLATION_NAV = "customString6TranslationNav";
exports.CUSTOM_STRING7_TRANSLATION_NAV = "customString7TranslationNav";
exports.CUSTOM_STRING8_TRANSLATION_NAV = "customString8TranslationNav";
exports.CUSTOM_STRING9_TRANSLATION_NAV = "customString9TranslationNav";
exports.DESCRIPTION_TRANSLATION_NAV = "descriptionTranslationNav";
exports.GRADE_NAV = "gradeNav";
exports.JOB_FUNCTION_NAV = "jobFunctionNav";
exports.LOCAL_NAV_A_U_S = "localNavAUS";
exports.LOCAL_NAV_B_R_A = "localNavBRA";
exports.LOCAL_NAV_C_A_N = "localNavCAN";
exports.LOCAL_NAV_D_E_F_L_T = "localNavDEFLT";
exports.LOCAL_NAV_F_R_A = "localNavFRA";
exports.LOCAL_NAV_G_B_R = "localNavGBR";
exports.LOCAL_NAV_I_T_A = "localNavITA";
exports.LOCAL_NAV_U_S_A = "localNavUSA";
exports.NAME_TRANSLATION_NAV = "nameTranslationNav";
exports.PARENT_JOB_CODE_NAV = "parentJobCodeNav";
exports.TO_JOB_CLASSIFICATION_COUNTRY = "toJobClassificationCountry";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FOJobCodeEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FOJobCodeClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new FOJobCodeClientAsync(configurations);
};

function FOJobCodeClient (configurations) {

	var API_PATH = "/odata/v2/FOJobCode";

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

function FOJobCodeClientAsync (configurations) {

	var API_PATH = "/odata/v2/FOJobCode";

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
