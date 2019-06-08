var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitEventEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitEventEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EVENT_CODE = "eventCode";
exports.EVENT_ID = "eventId";
exports.EVENT_NAME_DE__D_E = "eventName_de_DE";
exports.EVENT_NAME_DEFAULT_VALUE = "eventName_defaultValue";
exports.EVENT_NAME_EN__G_B = "eventName_en_GB";
exports.EVENT_NAME_EN__U_S = "eventName_en_US";
exports.EVENT_NAME_ES__E_S = "eventName_es_ES";
exports.EVENT_NAME_FR__F_R = "eventName_fr_FR";
exports.EVENT_NAME_JA__J_P = "eventName_ja_JP";
exports.EVENT_NAME_KO__K_R = "eventName_ko_KR";
exports.EVENT_NAME_LOCALIZED = "eventName_localized";
exports.EVENT_NAME_NL__N_L = "eventName_nl_NL";
exports.EVENT_NAME_PT__B_R = "eventName_pt_BR";
exports.EVENT_NAME_PT__P_T = "eventName_pt_PT";
exports.EVENT_NAME_RU__R_U = "eventName_ru_RU";
exports.EVENT_NAME_ZH__C_N = "eventName_zh_CN";
exports.EVENT_NAME_ZH__T_W = "eventName_zh_TW";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitEventEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitEventClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new BenefitEventClientAsync(configurations);
};

function BenefitEventClient (configurations) {

	var API_PATH = "/odata/v2/BenefitEvent";

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

function BenefitEventClientAsync (configurations) {

	var API_PATH = "/odata/v2/BenefitEvent";

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
