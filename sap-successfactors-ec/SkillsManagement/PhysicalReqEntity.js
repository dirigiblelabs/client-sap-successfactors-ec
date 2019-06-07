var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var PhysicalReqEntityEntityBuilder = require("sap-successfactors-ec/SkillsManagement/Builders/PhysicalReqEntityEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DESCRIPTION_DE__D_E = "description_de_DE";
exports.DESCRIPTION_DEFAULT_VALUE = "description_defaultValue";
exports.DESCRIPTION_EN__G_B = "description_en_GB";
exports.DESCRIPTION_EN__U_S = "description_en_US";
exports.DESCRIPTION_ES__E_S = "description_es_ES";
exports.DESCRIPTION_FR__F_R = "description_fr_FR";
exports.DESCRIPTION_JA__J_P = "description_ja_JP";
exports.DESCRIPTION_KO__K_R = "description_ko_KR";
exports.DESCRIPTION_LOCALIZED = "description_localized";
exports.DESCRIPTION_NL__N_L = "description_nl_NL";
exports.DESCRIPTION_PT__B_R = "description_pt_BR";
exports.DESCRIPTION_PT__P_T = "description_pt_PT";
exports.DESCRIPTION_RU__R_U = "description_ru_RU";
exports.DESCRIPTION_ZH__C_N = "description_zh_CN";
exports.DESCRIPTION_ZH__T_W = "description_zh_TW";
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
exports.REQUIREMENT_DE__D_E = "requirement_de_DE";
exports.REQUIREMENT_DEFAULT_VALUE = "requirement_defaultValue";
exports.REQUIREMENT_EN__G_B = "requirement_en_GB";
exports.REQUIREMENT_EN__U_S = "requirement_en_US";
exports.REQUIREMENT_ES__E_S = "requirement_es_ES";
exports.REQUIREMENT_FR__F_R = "requirement_fr_FR";
exports.REQUIREMENT_JA__J_P = "requirement_ja_JP";
exports.REQUIREMENT_KO__K_R = "requirement_ko_KR";
exports.REQUIREMENT_LOCALIZED = "requirement_localized";
exports.REQUIREMENT_NL__N_L = "requirement_nl_NL";
exports.REQUIREMENT_PT__B_R = "requirement_pt_BR";
exports.REQUIREMENT_PT__P_T = "requirement_pt_PT";
exports.REQUIREMENT_RU__R_U = "requirement_ru_RU";
exports.REQUIREMENT_ZH__C_N = "requirement_zh_CN";
exports.REQUIREMENT_ZH__T_W = "requirement_zh_TW";
exports.STATUS = "status";
exports.SUB_MODULE = "subModule";
exports.TRANSACTION_SEQUENCE = "transactionSequence";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PhysicalReqEntityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PhysicalReqEntityClient(configurations);
};

function PhysicalReqEntityClient (configurations) {

	var API_PATH = "/odata/v2/PhysicalReqEntity";

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

function getId(id) {
	return "('" + id + "')";
}
