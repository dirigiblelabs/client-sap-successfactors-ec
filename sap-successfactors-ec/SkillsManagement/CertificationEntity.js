var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var CertificationEntityEntityBuilder = require("sap-successfactors-ec/SkillsManagement/Builders/CertificationEntityEntityBuilder");

exports.CERTIFICATION_DE__D_E = "certification_de_DE";
exports.CERTIFICATION_DEFAULT_VALUE = "certification_defaultValue";
exports.CERTIFICATION_EN__G_B = "certification_en_GB";
exports.CERTIFICATION_EN__U_S = "certification_en_US";
exports.CERTIFICATION_ES__E_S = "certification_es_ES";
exports.CERTIFICATION_FR__F_R = "certification_fr_FR";
exports.CERTIFICATION_JA__J_P = "certification_ja_JP";
exports.CERTIFICATION_KO__K_R = "certification_ko_KR";
exports.CERTIFICATION_LOCALIZED = "certification_localized";
exports.CERTIFICATION_NL__N_L = "certification_nl_NL";
exports.CERTIFICATION_PT__B_R = "certification_pt_BR";
exports.CERTIFICATION_PT__P_T = "certification_pt_PT";
exports.CERTIFICATION_RU__R_U = "certification_ru_RU";
exports.CERTIFICATION_ZH__C_N = "certification_zh_CN";
exports.CERTIFICATION_ZH__T_W = "certification_zh_TW";
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
exports.STATUS = "status";
exports.SUB_MODULE = "subModule";
exports.TRANSACTION_SEQUENCE = "transactionSequence";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new CertificationEntityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new CertificationEntityClient(configurations);
};

function CertificationEntityClient (configurations) {

	var API_PATH = "/odata/v2/CertificationEntity";

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
