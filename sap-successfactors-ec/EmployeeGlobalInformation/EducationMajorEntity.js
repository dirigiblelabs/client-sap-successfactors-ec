var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var EducationMajorEntityEntityBuilder = require("sap-successfactors-ec/EmployeeGlobalInformation/Builders/EducationMajorEntityEntityBuilder");

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
exports.MAJOR_DE__D_E = "major_de_DE";
exports.MAJOR_DEFAULT_VALUE = "major_defaultValue";
exports.MAJOR_EN__G_B = "major_en_GB";
exports.MAJOR_EN__U_S = "major_en_US";
exports.MAJOR_ES__E_S = "major_es_ES";
exports.MAJOR_FR__F_R = "major_fr_FR";
exports.MAJOR_JA__J_P = "major_ja_JP";
exports.MAJOR_KO__K_R = "major_ko_KR";
exports.MAJOR_LOCALIZED = "major_localized";
exports.MAJOR_NL__N_L = "major_nl_NL";
exports.MAJOR_PT__B_R = "major_pt_BR";
exports.MAJOR_PT__P_T = "major_pt_PT";
exports.MAJOR_RU__R_U = "major_ru_RU";
exports.MAJOR_ZH__C_N = "major_zh_CN";
exports.MAJOR_ZH__T_W = "major_zh_TW";
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
	return new EducationMajorEntityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EducationMajorEntityClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new EducationMajorEntityClientAsync(configurations);
};

function EducationMajorEntityClient (configurations) {

	var API_PATH = "/odata/v2/EducationMajorEntity";

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

function EducationMajorEntityClientAsync (configurations) {

	var API_PATH = "/odata/v2/EducationMajorEntity";

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
