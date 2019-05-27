var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var PayrollConfigurationCategoryEntityBuilder = require("sap-successfactors-ec/MasterDataReplication/Builders/PayrollConfigurationCategoryEntityBuilder");

exports.PAYROLL_SYSTEM_CONFIGURATION_EXTERNAL_CODE = "PayrollSystemConfiguration_externalCode";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EXTERNAL_CATEGORY_NAME_DE__D_E = "externalCategoryName_de_DE";
exports.EXTERNAL_CATEGORY_NAME_DEFAULT_VALUE = "externalCategoryName_defaultValue";
exports.EXTERNAL_CATEGORY_NAME_EN__G_B = "externalCategoryName_en_GB";
exports.EXTERNAL_CATEGORY_NAME_EN__U_S = "externalCategoryName_en_US";
exports.EXTERNAL_CATEGORY_NAME_ES__E_S = "externalCategoryName_es_ES";
exports.EXTERNAL_CATEGORY_NAME_FR__F_R = "externalCategoryName_fr_FR";
exports.EXTERNAL_CATEGORY_NAME_JA__J_P = "externalCategoryName_ja_JP";
exports.EXTERNAL_CATEGORY_NAME_KO__K_R = "externalCategoryName_ko_KR";
exports.EXTERNAL_CATEGORY_NAME_LOCALIZED = "externalCategoryName_localized";
exports.EXTERNAL_CATEGORY_NAME_NL__N_L = "externalCategoryName_nl_NL";
exports.EXTERNAL_CATEGORY_NAME_PT__B_R = "externalCategoryName_pt_BR";
exports.EXTERNAL_CATEGORY_NAME_PT__P_T = "externalCategoryName_pt_PT";
exports.EXTERNAL_CATEGORY_NAME_RU__R_U = "externalCategoryName_ru_RU";
exports.EXTERNAL_CATEGORY_NAME_ZH__C_N = "externalCategoryName_zh_CN";
exports.EXTERNAL_CATEGORY_NAME_ZH__T_W = "externalCategoryName_zh_TW";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.LINKS = "links";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PayrollConfigurationCategoryEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PayrollConfigurationCategoryClient(configurations);
};

function PayrollConfigurationCategoryClient (configurations) {

	var API_PATH = "/odata/v2/PayrollConfigurationCategory";

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
