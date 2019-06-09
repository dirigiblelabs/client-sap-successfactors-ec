var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var EducationDegreeEntityEntityBuilder = require("sap-successfactors-ec/EmployeeGlobalInformation/Builders/EducationDegreeEntityEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DEGREE_DE__D_E = "degree_de_DE";
exports.DEGREE_DEFAULT_VALUE = "degree_defaultValue";
exports.DEGREE_EN__G_B = "degree_en_GB";
exports.DEGREE_EN__U_S = "degree_en_US";
exports.DEGREE_ES__E_S = "degree_es_ES";
exports.DEGREE_FR__F_R = "degree_fr_FR";
exports.DEGREE_JA__J_P = "degree_ja_JP";
exports.DEGREE_KO__K_R = "degree_ko_KR";
exports.DEGREE_LOCALIZED = "degree_localized";
exports.DEGREE_NL__N_L = "degree_nl_NL";
exports.DEGREE_PT__B_R = "degree_pt_BR";
exports.DEGREE_PT__P_T = "degree_pt_PT";
exports.DEGREE_RU__R_U = "degree_ru_RU";
exports.DEGREE_ZH__C_N = "degree_zh_CN";
exports.DEGREE_ZH__T_W = "degree_zh_TW";
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
exports.STATUS = "status";
exports.SUB_MODULE = "subModule";
exports.TRANSACTION_SEQUENCE = "transactionSequence";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EducationDegreeEntityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EducationDegreeEntityClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new EducationDegreeEntityClientAsync(configurations);
};

function EducationDegreeEntityClient (configurations) {

	var API_PATH = "/odata/v2/EducationDegreeEntity";

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

function EducationDegreeEntityClientAsync (configurations) {

	var API_PATH = "/odata/v2/EducationDegreeEntity";

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
