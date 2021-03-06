var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var JobDescSectionEntityBuilder = require("sap-successfactors-ec/SkillsManagement/Builders/JobDescSectionEntityBuilder");

exports.JOB_DESC_TEMPLATE_EXTERNAL_CODE = "JobDescTemplate_externalCode";
exports.BOLD = "bold";
exports.BOLD_HEADER = "boldHeader";
exports.BULLET_TYPE = "bulletType";
exports.CONTENT_TYPE = "contentType";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EXTERNAL_CODE = "externalCode";
exports.EXTERNAL_POSTING = "externalPosting";
exports.FONT_SIZE_HEADER = "fontSizeHeader";
exports.INTERNAL_POSTING = "internalPosting";
exports.ITALIC = "italic";
exports.ITALIC_HEADER = "italicHeader";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.MULTI_CONTENTS = "multiContents";
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
exports.ONLY_ADMIN = "onlyAdmin";
exports.ORDER = "order";
exports.REMOVABLE = "removable";
exports.REQUIRED = "required";
exports.SHOW_IN_JOB_REQ = "showInJobReq";
exports.SMALL_ICON = "smallIcon";
exports.STATUS = "status";
exports.SUB_MODULE = "subModule";
exports.TRANSACTION_SEQUENCE = "transactionSequence";
exports.UNDERLINE = "underline";
exports.UNDERLINE_HEADER = "underlineHeader";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new JobDescSectionEntityBuilder();
};

exports.getClient = function(configurations) {
	return new JobDescSectionClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new JobDescSectionClientAsync(configurations);
};

function JobDescSectionClient (configurations) {

	var API_PATH = "/odata/v2/JobDescSection";

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

function JobDescSectionClientAsync (configurations) {

	var API_PATH = "/odata/v2/JobDescSection";

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
