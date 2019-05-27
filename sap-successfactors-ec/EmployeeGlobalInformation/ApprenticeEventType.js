var Client = require("sap/Client");
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

function ApprenticeEventTypeClient (configurations) {

	var API_PATH = "/odata/v2/ApprenticeEventType";

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
