var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EmploymentConditionEntityEntityBuilder = require("sap-successfactors-ec/SkillsManagement/Builders/EmploymentConditionEntityEntityBuilder");

exports.CONDITION_DE__D_E = "condition_de_DE";
exports.CONDITION_DEFAULT_VALUE = "condition_defaultValue";
exports.CONDITION_EN__G_B = "condition_en_GB";
exports.CONDITION_EN__U_S = "condition_en_US";
exports.CONDITION_ES__E_S = "condition_es_ES";
exports.CONDITION_FR__F_R = "condition_fr_FR";
exports.CONDITION_JA__J_P = "condition_ja_JP";
exports.CONDITION_KO__K_R = "condition_ko_KR";
exports.CONDITION_LOCALIZED = "condition_localized";
exports.CONDITION_NL__N_L = "condition_nl_NL";
exports.CONDITION_PT__B_R = "condition_pt_BR";
exports.CONDITION_PT__P_T = "condition_pt_PT";
exports.CONDITION_RU__R_U = "condition_ru_RU";
exports.CONDITION_ZH__C_N = "condition_zh_CN";
exports.CONDITION_ZH__T_W = "condition_zh_TW";
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
exports.STATUS = "status";
exports.SUB_MODULE = "subModule";
exports.TRANSACTION_SEQUENCE = "transactionSequence";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmploymentConditionEntityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmploymentConditionEntityClient(configurations);
};

function EmploymentConditionEntityClient (configurations) {

	var API_PATH = "/odata/v2/EmploymentConditionEntity";

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
