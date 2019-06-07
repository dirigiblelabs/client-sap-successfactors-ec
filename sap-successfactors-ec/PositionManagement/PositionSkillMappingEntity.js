var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var PositionSkillMappingEntityEntityBuilder = require("sap-successfactors-ec/PositionManagement/Builders/PositionSkillMappingEntityEntityBuilder");

exports.POSITION_ENTITY_EXTERNAL_CODE = "PositionEntity_externalCode";
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
exports.PRO_LEVEL_DE__D_E = "proLevel_de_DE";
exports.PRO_LEVEL_DEFAULT_VALUE = "proLevel_defaultValue";
exports.PRO_LEVEL_EN__G_B = "proLevel_en_GB";
exports.PRO_LEVEL_EN__U_S = "proLevel_en_US";
exports.PRO_LEVEL_ES__E_S = "proLevel_es_ES";
exports.PRO_LEVEL_FR__F_R = "proLevel_fr_FR";
exports.PRO_LEVEL_JA__J_P = "proLevel_ja_JP";
exports.PRO_LEVEL_KO__K_R = "proLevel_ko_KR";
exports.PRO_LEVEL_LOCALIZED = "proLevel_localized";
exports.PRO_LEVEL_NL__N_L = "proLevel_nl_NL";
exports.PRO_LEVEL_PT__B_R = "proLevel_pt_BR";
exports.PRO_LEVEL_PT__P_T = "proLevel_pt_PT";
exports.PRO_LEVEL_RU__R_U = "proLevel_ru_RU";
exports.PRO_LEVEL_ZH__C_N = "proLevel_zh_CN";
exports.PRO_LEVEL_ZH__T_W = "proLevel_zh_TW";
exports.SKILL = "skill";
exports.STATUS = "status";
exports.SUB_MODULE = "subModule";
exports.TRANSACTION_SEQUENCE = "transactionSequence";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PositionSkillMappingEntityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PositionSkillMappingEntityClient(configurations);
};

function PositionSkillMappingEntityClient (configurations) {

	var API_PATH = "/odata/v2/PositionSkillMappingEntity";

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
