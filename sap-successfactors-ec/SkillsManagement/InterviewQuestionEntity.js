var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var InterviewQuestionEntityEntityBuilder = require("sap-successfactors-ec/SkillsManagement/Builders/InterviewQuestionEntityEntityBuilder");

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
exports.QUESTION_DE__D_E = "question_de_DE";
exports.QUESTION_DEFAULT_VALUE = "question_defaultValue";
exports.QUESTION_EN__G_B = "question_en_GB";
exports.QUESTION_EN__U_S = "question_en_US";
exports.QUESTION_ES__E_S = "question_es_ES";
exports.QUESTION_FR__F_R = "question_fr_FR";
exports.QUESTION_JA__J_P = "question_ja_JP";
exports.QUESTION_KO__K_R = "question_ko_KR";
exports.QUESTION_LOCALIZED = "question_localized";
exports.QUESTION_NL__N_L = "question_nl_NL";
exports.QUESTION_PT__B_R = "question_pt_BR";
exports.QUESTION_PT__P_T = "question_pt_PT";
exports.QUESTION_RU__R_U = "question_ru_RU";
exports.QUESTION_ZH__C_N = "question_zh_CN";
exports.QUESTION_ZH__T_W = "question_zh_TW";
exports.STATUS = "status";
exports.SUB_MODULE = "subModule";
exports.TRANSACTION_SEQUENCE = "transactionSequence";
exports.TYPE_DE__D_E = "type_de_DE";
exports.TYPE_DEFAULT_VALUE = "type_defaultValue";
exports.TYPE_EN__G_B = "type_en_GB";
exports.TYPE_EN__U_S = "type_en_US";
exports.TYPE_ES__E_S = "type_es_ES";
exports.TYPE_FR__F_R = "type_fr_FR";
exports.TYPE_JA__J_P = "type_ja_JP";
exports.TYPE_KO__K_R = "type_ko_KR";
exports.TYPE_LOCALIZED = "type_localized";
exports.TYPE_NL__N_L = "type_nl_NL";
exports.TYPE_PT__B_R = "type_pt_BR";
exports.TYPE_PT__P_T = "type_pt_PT";
exports.TYPE_RU__R_U = "type_ru_RU";
exports.TYPE_ZH__C_N = "type_zh_CN";
exports.TYPE_ZH__T_W = "type_zh_TW";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new InterviewQuestionEntityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new InterviewQuestionEntityClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new InterviewQuestionEntityClientAsync(configurations);
};

function InterviewQuestionEntityClient (configurations) {

	var API_PATH = "/odata/v2/InterviewQuestionEntity";

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

function InterviewQuestionEntityClientAsync (configurations) {

	var API_PATH = "/odata/v2/InterviewQuestionEntity";

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
