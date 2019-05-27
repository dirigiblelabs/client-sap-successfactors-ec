var Client = require("sap/Client");
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

function EducationDegreeEntityClient (configurations) {

	var API_PATH = "/odata/v2/EducationDegreeEntity";

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