var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var TimeTypeEntityBuilder = require("sap-successfactors-ec/TimeOff/Builders/TimeTypeEntityBuilder");

exports.ABSENCE_CLASS = "absenceClass";
exports.ABSENCE_RETENTION_GROUP = "absenceRetentionGroup";
exports.ACCRUAL_RECALCULATION_RELEVANCE = "accrualRecalculationRelevance";
exports.ACTIVATE_CANCELLATION_WORKFLOW = "activateCancellationWorkflow";
exports.ADMIN_WORKFLOW = "adminWorkflow";
exports.ALLOCATION_STRATEGY = "allocationStrategy";
exports.ALLOWED_FRACTIONS_UNIT_DAY = "allowedFractionsUnitDay";
exports.ALLOWED_FRACTIONS_UNIT_HOUR = "allowedFractionsUnitHour";
exports.ALLOWED_REQUESTING_INCREMENT = "allowedRequestingIncrement";
exports.BALANCE_CALCULATION_SETTING = "balanceCalculationSetting";
exports.CALCULATION_METHOD = "calculationMethod";
exports.CATEGORY = "category";
exports.COLLISION_GROUPING = "collisionGrouping";
exports.COUNTING_METHOD = "countingMethod";
exports.COUNTRY = "country";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EXTERNAL_CODE = "externalCode";
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
exports.FLEXIBLE_REQUESTING_ALLOWED = "flexibleRequestingAllowed";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.LOA_END_EVENT_REASON = "loaEndEventReason";
exports.LOA_START_EVENT_REASON = "loaStartEventReason";
exports.MAXIMUM_DURATION_IN_MONTHS = "maximumDurationInMonths";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.REQUESTING_ON_NON_WORKING_DAYS_ALLOWED = "requestingOnNonWorkingDaysAllowed";
exports.UNDETERMINED_END_DATE_ALLOWED = "undeterminedEndDateAllowed";
exports.UNIT = "unit";
exports.WORKFLOW_CONFIGURATION = "workflowConfiguration";
exports.COUNTING_METHOD_NAV = "countingMethodNav";
exports.TIME_ACCOUNT_POSTING_RULES = "timeAccountPostingRules";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new TimeTypeEntityBuilder();
};

exports.getClient = function(configurations) {
	return new TimeTypeClient(configurations);
};

function TimeTypeClient (configurations) {

	var API_PATH = "/odata/v2/TimeType";

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
