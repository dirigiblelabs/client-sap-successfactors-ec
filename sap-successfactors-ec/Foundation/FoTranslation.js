var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var FoTranslationEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FoTranslationEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EXTERNAL_CODE = "externalCode";
exports.FO_FIELD = "foField";
exports.FO_OBJECT_I_D = "foObjectID";
exports.FO_TYPE = "foType";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.VALUE_DE__D_E = "value_de_DE";
exports.VALUE_DEFAULT_VALUE = "value_defaultValue";
exports.VALUE_EN__G_B = "value_en_GB";
exports.VALUE_EN__U_S = "value_en_US";
exports.VALUE_ES__E_S = "value_es_ES";
exports.VALUE_FR__F_R = "value_fr_FR";
exports.VALUE_JA__J_P = "value_ja_JP";
exports.VALUE_KO__K_R = "value_ko_KR";
exports.VALUE_LOCALIZED = "value_localized";
exports.VALUE_NL__N_L = "value_nl_NL";
exports.VALUE_PT__B_R = "value_pt_BR";
exports.VALUE_PT__P_T = "value_pt_PT";
exports.VALUE_RU__R_U = "value_ru_RU";
exports.VALUE_ZH__C_N = "value_zh_CN";
exports.VALUE_ZH__T_W = "value_zh_TW";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FoTranslationEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FoTranslationClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new FoTranslationClientAsync(configurations);
};

function FoTranslationClient (configurations) {

	var API_PATH = "/odata/v2/FoTranslation";

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

function FoTranslationClientAsync (configurations) {

	var API_PATH = "/odata/v2/FoTranslation";

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
