var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var PositionCompetencyMappingEntityEntityBuilder = require("sap-successfactors-ec/PositionManagement/Builders/PositionCompetencyMappingEntityEntityBuilder");

exports.POSITION_ENTITY_EXTERNAL_CODE = "PositionEntity_externalCode";
exports.COMPETENCY = "competency";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.RATING_DE__D_E = "rating_de_DE";
exports.RATING_DEFAULT_VALUE = "rating_defaultValue";
exports.RATING_EN__G_B = "rating_en_GB";
exports.RATING_EN__U_S = "rating_en_US";
exports.RATING_ES__E_S = "rating_es_ES";
exports.RATING_FR__F_R = "rating_fr_FR";
exports.RATING_JA__J_P = "rating_ja_JP";
exports.RATING_KO__K_R = "rating_ko_KR";
exports.RATING_LOCALIZED = "rating_localized";
exports.RATING_NL__N_L = "rating_nl_NL";
exports.RATING_PT__B_R = "rating_pt_BR";
exports.RATING_PT__P_T = "rating_pt_PT";
exports.RATING_RU__R_U = "rating_ru_RU";
exports.RATING_ZH__C_N = "rating_zh_CN";
exports.RATING_ZH__T_W = "rating_zh_TW";
exports.STATUS = "status";
exports.SUB_MODULE = "subModule";
exports.TRANSACTION_SEQUENCE = "transactionSequence";
exports.WEIGHT_DE__D_E = "weight_de_DE";
exports.WEIGHT_DEFAULT_VALUE = "weight_defaultValue";
exports.WEIGHT_EN__G_B = "weight_en_GB";
exports.WEIGHT_EN__U_S = "weight_en_US";
exports.WEIGHT_ES__E_S = "weight_es_ES";
exports.WEIGHT_FR__F_R = "weight_fr_FR";
exports.WEIGHT_JA__J_P = "weight_ja_JP";
exports.WEIGHT_KO__K_R = "weight_ko_KR";
exports.WEIGHT_LOCALIZED = "weight_localized";
exports.WEIGHT_NL__N_L = "weight_nl_NL";
exports.WEIGHT_PT__B_R = "weight_pt_BR";
exports.WEIGHT_PT__P_T = "weight_pt_PT";
exports.WEIGHT_RU__R_U = "weight_ru_RU";
exports.WEIGHT_ZH__C_N = "weight_zh_CN";
exports.WEIGHT_ZH__T_W = "weight_zh_TW";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PositionCompetencyMappingEntityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PositionCompetencyMappingEntityClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new PositionCompetencyMappingEntityClientAsync(configurations);
};

function PositionCompetencyMappingEntityClient (configurations) {

	var API_PATH = "/odata/v2/PositionCompetencyMappingEntity";

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

function PositionCompetencyMappingEntityClientAsync (configurations) {

	var API_PATH = "/odata/v2/PositionCompetencyMappingEntity";

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
