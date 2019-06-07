var Client = require("sap/Client");
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

function FoTranslationClient (configurations) {

	var API_PATH = "/odata/v2/FoTranslation";

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
