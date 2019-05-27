var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var RelevantIndustryEntityEntityBuilder = require("sap-successfactors-ec/SkillsManagement/Builders/RelevantIndustryEntityEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EXTERNAL_CODE = "externalCode";
exports.INDUSTRY_DE__D_E = "industry_de_DE";
exports.INDUSTRY_DEFAULT_VALUE = "industry_defaultValue";
exports.INDUSTRY_EN__G_B = "industry_en_GB";
exports.INDUSTRY_EN__U_S = "industry_en_US";
exports.INDUSTRY_ES__E_S = "industry_es_ES";
exports.INDUSTRY_FR__F_R = "industry_fr_FR";
exports.INDUSTRY_JA__J_P = "industry_ja_JP";
exports.INDUSTRY_KO__K_R = "industry_ko_KR";
exports.INDUSTRY_LOCALIZED = "industry_localized";
exports.INDUSTRY_NL__N_L = "industry_nl_NL";
exports.INDUSTRY_PT__B_R = "industry_pt_BR";
exports.INDUSTRY_PT__P_T = "industry_pt_PT";
exports.INDUSTRY_RU__R_U = "industry_ru_RU";
exports.INDUSTRY_ZH__C_N = "industry_zh_CN";
exports.INDUSTRY_ZH__T_W = "industry_zh_TW";
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
	return new RelevantIndustryEntityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new RelevantIndustryEntityClient(configurations);
};

function RelevantIndustryEntityClient (configurations) {

	var API_PATH = "/odata/v2/RelevantIndustryEntity";

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
