var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var JobProfileLocalizedDataEntityBuilder = require("sap-successfactors-ec/SkillsManagement/Builders/JobProfileLocalizedDataEntityBuilder");

exports.JOB_PROFILE_EXTERNAL_CODE = "JobProfile_externalCode";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DESC_DE__D_E = "desc_de_DE";
exports.DESC_DEFAULT_VALUE = "desc_defaultValue";
exports.DESC_EN__G_B = "desc_en_GB";
exports.DESC_EN__U_S = "desc_en_US";
exports.DESC_ES__E_S = "desc_es_ES";
exports.DESC_FR__F_R = "desc_fr_FR";
exports.DESC_JA__J_P = "desc_ja_JP";
exports.DESC_KO__K_R = "desc_ko_KR";
exports.DESC_LOCALIZED = "desc_localized";
exports.DESC_NL__N_L = "desc_nl_NL";
exports.DESC_PT__B_R = "desc_pt_BR";
exports.DESC_PT__P_T = "desc_pt_PT";
exports.DESC_RU__R_U = "desc_ru_RU";
exports.DESC_ZH__C_N = "desc_zh_CN";
exports.DESC_ZH__T_W = "desc_zh_TW";
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
exports.SECTION_ID = "sectionId";
exports.SECTION_TYPE = "sectionType";
exports.STATUS = "status";
exports.SUB_MODULE = "subModule";
exports.TRANSACTION_SEQUENCE = "transactionSequence";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new JobProfileLocalizedDataEntityBuilder();
};

exports.getClient = function(configurations) {
	return new JobProfileLocalizedDataClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new JobProfileLocalizedDataClientAsync(configurations);
};

function JobProfileLocalizedDataClient (configurations) {

	var API_PATH = "/odata/v2/JobProfileLocalizedData";

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

function JobProfileLocalizedDataClientAsync (configurations) {

	var API_PATH = "/odata/v2/JobProfileLocalizedData";

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
