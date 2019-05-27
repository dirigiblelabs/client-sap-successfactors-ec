var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var FOPayGroupEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FOPayGroupEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.DATA_DELIMITER = "dataDelimiter";
exports.DECIMAL_POINT = "decimalPoint";
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
exports.EARLIEST_CHANGE_DATE = "earliestChangeDate";
exports.END_DATE = "endDate";
exports.EXTERNAL_CODE = "externalCode";
exports.LAG = "lag";
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
exports.PAY_FREQUENCY = "payFrequency";
exports.PAYMENT_FREQUENCY = "paymentFrequency";
exports.PAYROLL_VENDOR_ID = "payrollVendorId";
exports.PRIMARY_CONTACT_EMAIL = "primaryContactEmail";
exports.PRIMARY_CONTACT_I_D = "primaryContactID";
exports.PRIMARY_CONTACT_NAME = "primaryContactName";
exports.SECONDARY_CONTACT_EMAIL = "secondaryContactEmail";
exports.SECONDARY_CONTACT_I_D = "secondaryContactID";
exports.SECONDARY_CONTACT_NAME = "secondaryContactName";
exports.START_DATE = "startDate";
exports.STATUS = "status";
exports.WEEKS_IN_PAY_PERIOD = "weeksInPayPeriod";
exports.DESCRIPTION_TRANSLATION_NAV = "descriptionTranslationNav";
exports.NAME_TRANSLATION_NAV = "nameTranslationNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FOPayGroupEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FOPayGroupClient(configurations);
};

function FOPayGroupClient (configurations) {

	var API_PATH = "/odata/v2/FOPayGroup";

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
