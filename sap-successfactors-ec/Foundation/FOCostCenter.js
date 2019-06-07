var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var FOCostCenterEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FOCostCenterEntityBuilder");

exports.COSTCENTER_EXTERNAL_OBJECT_I_D = "costcenterExternalObjectID";
exports.COSTCENTER_MANAGER = "costcenterManager";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.CUST__LEGAL_ENTITY_PROP = "cust_LegalEntityProp";
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
exports.GL_STATEMENT_CODE = "glStatementCode";
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
exports.CUST__LEGAL_ENTITY = "cust_LegalEntity";
exports.DESCRIPTION_TRANSLATION_NAV = "descriptionTranslationNav";
exports.NAME_TRANSLATION_NAV = "nameTranslationNav";
exports.PARENT_NAV = "parentNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FOCostCenterEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FOCostCenterClient(configurations);
};

function FOCostCenterClient (configurations) {

	var API_PATH = "/odata/v2/FOCostCenter";

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
