var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var PositionEntityBuilder = require("sap-successfactors-ec/PositionManagement/Builders/PositionEntityBuilder");

exports.BUSINESS_UNIT = "businessUnit";
exports.CHANGE_REASON = "changeReason";
exports.CODE = "code";
exports.COMMENT = "comment";
exports.COMPANY = "company";
exports.COST_CENTER = "costCenter";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATION_SOURCE = "creationSource";
exports.CRITICALITY = "criticality";
exports.DEPARTMENT = "department";
exports.DESCRIPTION = "description";
exports.DIVISION = "division";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EFFECTIVE_STATUS = "effectiveStatus";
exports.EMPLOYEE_CLASS = "employeeClass";
exports.EXTERNAL_NAME_DE__D_E = "externalName_de_DE";
exports.EXTERNAL_NAME_DEFAULT_VALUE = "externalName_defaultValue";
exports.EXTERNAL_NAME_EN__G_B = "externalName_en_GB";
exports.EXTERNAL_NAME_EN__U_S = "externalName_en_US";
exports.EXTERNAL_NAME_ES__E_S = "externalName_es_ES";
exports.EXTERNAL_NAME_FR__F_R = "externalName_fr_FR";
exports.EXTERNAL_NAME_JA__J_P = "externalName_ja_JP";
exports.EXTERNAL_NAME_KO__K_R = "externalName_ko_KR";
exports.EXTERNAL_NAME_LOCALIZED = "externalName_localized";
exports.EXTERNAL_NAME_NL__N_L = "externalName_nl_NL";
exports.EXTERNAL_NAME_PT__B_R = "externalName_pt_BR";
exports.EXTERNAL_NAME_PT__P_T = "externalName_pt_PT";
exports.EXTERNAL_NAME_RU__R_U = "externalName_ru_RU";
exports.EXTERNAL_NAME_ZH__C_N = "externalName_zh_CN";
exports.EXTERNAL_NAME_ZH__T_W = "externalName_zh_TW";
exports.INCUMBENT = "incumbent";
exports.JOB_CODE = "jobCode";
exports.JOB_LEVEL = "jobLevel";
exports.JOB_TITLE = "jobTitle";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.LEGACY_POSITION_ID = "legacyPositionId";
exports.LOCATION = "location";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_OPTIMISTIC_LOCK_U_U_I_D = "mdfSystemOptimisticLockUUID";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.MULTIPLE_INCUMBENTS_ALLOWED = "multipleIncumbentsAllowed";
exports.PAY_GRADE = "payGrade";
exports.PAY_RANGE = "payRange";
exports.POSITION_CONTROLLED = "positionControlled";
exports.POSITION_CRITICALITY = "positionCriticality";
exports.POSITION_TITLE = "positionTitle";
exports.REGULAR_TEMPORARY = "regularTemporary";
exports.STANDARD_HOURS = "standardHours";
exports.TARGET_F_T_E = "targetFTE";
exports.TECHNICAL_PARAMETERS = "technicalParameters";
exports.TRANSACTION_SEQUENCE = "transactionSequence";
exports.TYPE = "type";
exports.VACANT = "vacant";
exports.PARENT_POSITION = "parentPosition";
exports.POSITION_MATRIX_RELATIONSHIP = "positionMatrixRelationship";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PositionEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PositionClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new PositionClientAsync(configurations);
};

function PositionClient (configurations) {

	var API_PATH = "/odata/v2/Position";

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

function PositionClientAsync (configurations) {

	var API_PATH = "/odata/v2/Position";

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
