var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var ApprenticeEventTypeEntityBuilder = require("sap-successfactors-ec/EmployeeGlobalInformation/Builders/ApprenticeEventTypeEntityBuilder");

exports.APPRENTICE_EVENT_TYPE_CATEGORY = "apprenticeEventTypeCategory";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EVENT_TYPE_DESCRIPTION_DE__D_E = "eventTypeDescription_de_DE";
exports.EVENT_TYPE_DESCRIPTION_DEFAULT_VALUE = "eventTypeDescription_defaultValue";
exports.EVENT_TYPE_DESCRIPTION_EN__G_B = "eventTypeDescription_en_GB";
exports.EVENT_TYPE_DESCRIPTION_EN__U_S = "eventTypeDescription_en_US";
exports.EVENT_TYPE_DESCRIPTION_ES__E_S = "eventTypeDescription_es_ES";
exports.EVENT_TYPE_DESCRIPTION_FR__F_R = "eventTypeDescription_fr_FR";
exports.EVENT_TYPE_DESCRIPTION_JA__J_P = "eventTypeDescription_ja_JP";
exports.EVENT_TYPE_DESCRIPTION_KO__K_R = "eventTypeDescription_ko_KR";
exports.EVENT_TYPE_DESCRIPTION_LOCALIZED = "eventTypeDescription_localized";
exports.EVENT_TYPE_DESCRIPTION_NL__N_L = "eventTypeDescription_nl_NL";
exports.EVENT_TYPE_DESCRIPTION_PT__B_R = "eventTypeDescription_pt_BR";
exports.EVENT_TYPE_DESCRIPTION_PT__P_T = "eventTypeDescription_pt_PT";
exports.EVENT_TYPE_DESCRIPTION_RU__R_U = "eventTypeDescription_ru_RU";
exports.EVENT_TYPE_DESCRIPTION_ZH__C_N = "eventTypeDescription_zh_CN";
exports.EVENT_TYPE_DESCRIPTION_ZH__T_W = "eventTypeDescription_zh_TW";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new ApprenticeEventTypeEntityBuilder();
};

exports.getClient = function(configurations) {
	return new ApprenticeEventTypeClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new ApprenticeEventTypeClientAsync(configurations);
};

function ApprenticeEventTypeClient (configurations) {

	var API_PATH = "/odata/v2/ApprenticeEventType";

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

function ApprenticeEventTypeClientAsync (configurations) {

	var API_PATH = "/odata/v2/ApprenticeEventType";

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
