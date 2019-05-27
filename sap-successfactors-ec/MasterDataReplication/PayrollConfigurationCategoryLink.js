var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var PayrollConfigurationCategoryLinkEntityBuilder = require("sap-successfactors-ec/MasterDataReplication/Builders/PayrollConfigurationCategoryLinkEntityBuilder");

exports.PAYROLL_CONFIGURATION_CATEGORY_EXTERNAL_CODE = "PayrollConfigurationCategory_externalCode";
exports.PAYROLL_SYSTEM_CONFIGURATION_EXTERNAL_CODE = "PayrollSystemConfiguration_externalCode";
exports.ADMIN_SERVICE = "adminService";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EXTERNAL_CODE = "externalCode";
exports.EXTERNAL_LINK_NAME_DE__D_E = "externalLinkName_de_DE";
exports.EXTERNAL_LINK_NAME_DEFAULT_VALUE = "externalLinkName_defaultValue";
exports.EXTERNAL_LINK_NAME_EN__G_B = "externalLinkName_en_GB";
exports.EXTERNAL_LINK_NAME_EN__U_S = "externalLinkName_en_US";
exports.EXTERNAL_LINK_NAME_ES__E_S = "externalLinkName_es_ES";
exports.EXTERNAL_LINK_NAME_FR__F_R = "externalLinkName_fr_FR";
exports.EXTERNAL_LINK_NAME_JA__J_P = "externalLinkName_ja_JP";
exports.EXTERNAL_LINK_NAME_KO__K_R = "externalLinkName_ko_KR";
exports.EXTERNAL_LINK_NAME_LOCALIZED = "externalLinkName_localized";
exports.EXTERNAL_LINK_NAME_NL__N_L = "externalLinkName_nl_NL";
exports.EXTERNAL_LINK_NAME_PT__B_R = "externalLinkName_pt_BR";
exports.EXTERNAL_LINK_NAME_PT__P_T = "externalLinkName_pt_PT";
exports.EXTERNAL_LINK_NAME_RU__R_U = "externalLinkName_ru_RU";
exports.EXTERNAL_LINK_NAME_ZH__C_N = "externalLinkName_zh_CN";
exports.EXTERNAL_LINK_NAME_ZH__T_W = "externalLinkName_zh_TW";
exports.INFOTYPE_NUMBER = "infotypeNumber";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.SELF_SERVICE = "selfService";
exports.SERVICE = "service";
exports.TYPE_OF_URL = "typeOfUrl";
exports.URL = "url";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PayrollConfigurationCategoryLinkEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PayrollConfigurationCategoryLinkClient(configurations);
};

function PayrollConfigurationCategoryLinkClient (configurations) {

	var API_PATH = "/odata/v2/PayrollConfigurationCategoryLink";

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
