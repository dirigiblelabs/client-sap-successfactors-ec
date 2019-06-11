var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var HolidayCalendarEntityBuilder = require("sap-successfactors-ec/TimeOff/Builders/HolidayCalendarEntityBuilder");

exports.COUNTRY = "country";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EXTERNAL_CODE = "externalCode";
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
exports.OLD_NAME = "oldName";
exports.HOLIDAY_ASSIGNMENTS = "holidayAssignments";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new HolidayCalendarEntityBuilder();
};

exports.getClient = function(configurations) {
	return new HolidayCalendarClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new HolidayCalendarClientAsync(configurations);
};

function HolidayCalendarClient (configurations) {

	var API_PATH = "/odata/v2/HolidayCalendar";

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

function HolidayCalendarClientAsync (configurations) {

	var API_PATH = "/odata/v2/HolidayCalendar";

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
