var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var AlertMessageEntityBuilder = require("sap-successfactors-ec/Workflow/Builders/AlertMessageEntityBuilder");

exports.ALERT_DESCRIPTION = "alertDescription";
exports.ALERT_DESCRIPTION_LOCALIZED_DE__D_E = "alertDescriptionLocalized_de_DE";
exports.ALERT_DESCRIPTION_LOCALIZED_DEFAULT_VALUE = "alertDescriptionLocalized_defaultValue";
exports.ALERT_DESCRIPTION_LOCALIZED_EN__G_B = "alertDescriptionLocalized_en_GB";
exports.ALERT_DESCRIPTION_LOCALIZED_EN__U_S = "alertDescriptionLocalized_en_US";
exports.ALERT_DESCRIPTION_LOCALIZED_ES__E_S = "alertDescriptionLocalized_es_ES";
exports.ALERT_DESCRIPTION_LOCALIZED_FR__F_R = "alertDescriptionLocalized_fr_FR";
exports.ALERT_DESCRIPTION_LOCALIZED_JA__J_P = "alertDescriptionLocalized_ja_JP";
exports.ALERT_DESCRIPTION_LOCALIZED_KO__K_R = "alertDescriptionLocalized_ko_KR";
exports.ALERT_DESCRIPTION_LOCALIZED_LOCALIZED = "alertDescriptionLocalized_localized";
exports.ALERT_DESCRIPTION_LOCALIZED_NL__N_L = "alertDescriptionLocalized_nl_NL";
exports.ALERT_DESCRIPTION_LOCALIZED_PT__B_R = "alertDescriptionLocalized_pt_BR";
exports.ALERT_DESCRIPTION_LOCALIZED_PT__P_T = "alertDescriptionLocalized_pt_PT";
exports.ALERT_DESCRIPTION_LOCALIZED_RU__R_U = "alertDescriptionLocalized_ru_RU";
exports.ALERT_DESCRIPTION_LOCALIZED_ZH__C_N = "alertDescriptionLocalized_zh_CN";
exports.ALERT_DESCRIPTION_LOCALIZED_ZH__T_W = "alertDescriptionLocalized_zh_TW";
exports.ALERT_HEADER = "alertHeader";
exports.ALERT_HEADER_LOCALIZED_DE__D_E = "alertHeaderLocalized_de_DE";
exports.ALERT_HEADER_LOCALIZED_DEFAULT_VALUE = "alertHeaderLocalized_defaultValue";
exports.ALERT_HEADER_LOCALIZED_EN__G_B = "alertHeaderLocalized_en_GB";
exports.ALERT_HEADER_LOCALIZED_EN__U_S = "alertHeaderLocalized_en_US";
exports.ALERT_HEADER_LOCALIZED_ES__E_S = "alertHeaderLocalized_es_ES";
exports.ALERT_HEADER_LOCALIZED_FR__F_R = "alertHeaderLocalized_fr_FR";
exports.ALERT_HEADER_LOCALIZED_JA__J_P = "alertHeaderLocalized_ja_JP";
exports.ALERT_HEADER_LOCALIZED_KO__K_R = "alertHeaderLocalized_ko_KR";
exports.ALERT_HEADER_LOCALIZED_LOCALIZED = "alertHeaderLocalized_localized";
exports.ALERT_HEADER_LOCALIZED_NL__N_L = "alertHeaderLocalized_nl_NL";
exports.ALERT_HEADER_LOCALIZED_PT__B_R = "alertHeaderLocalized_pt_BR";
exports.ALERT_HEADER_LOCALIZED_PT__P_T = "alertHeaderLocalized_pt_PT";
exports.ALERT_HEADER_LOCALIZED_RU__R_U = "alertHeaderLocalized_ru_RU";
exports.ALERT_HEADER_LOCALIZED_ZH__C_N = "alertHeaderLocalized_zh_CN";
exports.ALERT_HEADER_LOCALIZED_ZH__T_W = "alertHeaderLocalized_zh_TW";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_STATUS = "effectiveStatus";
exports.EXTERNAL_CODE = "externalCode";
exports.EXTERNAL_NAME = "externalName";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_CREATED_BY = "mdfSystemCreatedBy";
exports.MDF_SYSTEM_CREATED_DATE = "mdfSystemCreatedDate";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_LAST_MODIFIED_BY = "mdfSystemLastModifiedBy";
exports.MDF_SYSTEM_LAST_MODIFIED_DATE = "mdfSystemLastModifiedDate";
exports.MDF_SYSTEM_LAST_MODIFIED_DATE_WITH_T_Z = "mdfSystemLastModifiedDateWithTZ";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.WF_REQUEST_NAV = "wfRequestNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new AlertMessageEntityBuilder();
};

exports.getClient = function(configurations) {
	return new AlertMessageClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new AlertMessageClientAsync(configurations);
};

function AlertMessageClient (configurations) {

	var API_PATH = "/odata/v2/AlertMessage";

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

function AlertMessageClientAsync (configurations) {

	var API_PATH = "/odata/v2/AlertMessage";

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
