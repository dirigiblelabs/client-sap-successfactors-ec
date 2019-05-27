var Client = require("sap/Client");
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

function EducationMajorEntityClient (configurations) {

	var API_PATH = "/odata/v2/EducationMajorEntity";

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
