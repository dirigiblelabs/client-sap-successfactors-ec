var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var FODivisionEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FODivisionEntityBuilder");

exports.BUSINESS_UNIT_FLX = "businessUnitFlx";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
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
exports.HEAD_OF_UNIT = "headOfUnit";
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
exports.PARENT = "parent";
exports.START_DATE = "startDate";
exports.STATUS = "status";
exports.BUSINESS_UNIT_FLX_NAV = "businessUnitFlxNav";
exports.CUST_TO_BUSINESS_UNIT = "cust_toBusinessUnit";
exports.DESCRIPTION_TRANSLATION_NAV = "descriptionTranslationNav";
exports.NAME_TRANSLATION_NAV = "nameTranslationNav";
exports.PARENT_NAV = "parentNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FODivisionEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FODivisionClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new FODivisionClientAsync(configurations);
};

function FODivisionClient (configurations) {

	var API_PATH = "/odata/v2/FODivision";

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

function FODivisionClientAsync (configurations) {

	var API_PATH = "/odata/v2/FODivision";

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
