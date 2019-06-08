var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var FOCompanyEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FOCompanyEntityBuilder");

exports.COUNTRY = "country";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.CURRENCY = "currency";
exports.DEFAULT_LOCATION = "defaultLocation";
exports.DEFAULT_PAY_GROUP = "defaultPayGroup";
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
exports.END_DATE = "endDate";
exports.EXTERNAL_CODE = "externalCode";
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
exports.STANDARD_HOURS = "standardHours";
exports.START_DATE = "startDate";
exports.STATUS = "status";
exports.COUNTRY_NAV = "countryNav";
exports.DEFAULT_LOCATION_NAV = "defaultLocationNav";
exports.DEFAULT_PAY_GROUP_NAV = "defaultPayGroupNav";
exports.DESCRIPTION_TRANSLATION_NAV = "descriptionTranslationNav";
exports.LOCAL_NAV_A_R_G = "localNavARG";
exports.LOCAL_NAV_D_E_F_L_T = "localNavDEFLT";
exports.LOCAL_NAV_D_E_U = "localNavDEU";
exports.LOCAL_NAV_E_S_P = "localNavESP";
exports.LOCAL_NAV_F_R_A = "localNavFRA";
exports.LOCAL_NAV_U_S_A = "localNavUSA";
exports.NAME_TRANSLATION_NAV = "nameTranslationNav";
exports.TO_LEGAL_ENTITY_A_R_G = "toLegalEntityARG";
exports.TO_LEGAL_ENTITY_D_E_U = "toLegalEntityDEU";
exports.TO_LEGAL_ENTITY_E_S_P = "toLegalEntityESP";
exports.TO_LEGAL_ENTITY_F_R_A = "toLegalEntityFRA";
exports.TO_LEGAL_ENTITY_R_U_S = "toLegalEntityRUS";
exports.TO_LEGAL_ENTITY_U_S_A = "toLegalEntityUSA";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FOCompanyEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FOCompanyClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new FOCompanyClientAsync(configurations);
};

function FOCompanyClient (configurations) {

	var API_PATH = "/odata/v2/FOCompany";

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

function FOCompanyClientAsync (configurations) {

	var API_PATH = "/odata/v2/FOCompany";

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
