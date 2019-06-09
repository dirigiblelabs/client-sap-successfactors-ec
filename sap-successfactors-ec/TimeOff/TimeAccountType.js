var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var TimeAccountTypeEntityBuilder = require("sap-successfactors-ec/TimeOff/Builders/TimeAccountTypeEntityBuilder");

exports.ACCOUNT_BOOKING_OFFSET_IN_MONTHS = "accountBookingOffsetInMonths";
exports.ACCOUNT_CREATION_AUTOMATION_LEVEL = "accountCreationAutomationLevel";
exports.ACCOUNT_CREATION_DAY = "accountCreationDay";
exports.ACCOUNT_CREATION_MONTH = "accountCreationMonth";
exports.ACCOUNT_CREATION_OFFSET_IN_MONTHS = "accountCreationOffsetInMonths";
exports.ACCOUNT_CREATION_REFERENCE_DATE = "accountCreationReferenceDate";
exports.ACCOUNT_DETAIL_RETENTION_GROUP = "accountDetailRetentionGroup";
exports.ACCOUNT_RETENTION_GROUP = "accountRetentionGroup";
exports.ACCRUAL_AUTOMATION_LEVEL = "accrualAutomationLevel";
exports.ACCRUAL_CALCULATION_METHOD = "accrualCalculationMethod";
exports.ACCRUAL_CREATION_OFFSET = "accrualCreationOffset";
exports.ACCRUAL_FREQUENCY = "accrualFrequency";
exports.ACCRUAL_FREQUENCY_START_DATE = "accrualFrequencyStartDate";
exports.ACCRUAL_PERIOD_START_DAY = "accrualPeriodStartDay";
exports.ACCRUAL_PERIOD_START_MONTH = "accrualPeriodStartMonth";
exports.ACCRUAL_RECALCULATION_POSTING_METHOD = "accrualRecalculationPostingMethod";
exports.ACCRUAL_RULE = "accrualRule";
exports.ACCRUAL_TRANSFER_DATE_RULE = "accrualTransferDateRule";
exports.ACCRUAL_TRANSFER_RULE = "accrualTransferRule";
exports.ACCRUAL_WAITING_PERIOD = "accrualWaitingPeriod";
exports.ACCRUAL_WAITING_PERIOD_UNIT = "accrualWaitingPeriodUnit";
exports.ADVANCES_ALLOWED = "advancesAllowed";
exports.ALLOW_PAYOUT_WITH_SIMULATION = "allowPayoutWithSimulation";
exports.CALCULATE_SNAPSHOT_APPROVED_ABSENCE_BALANCE = "calculateSnapshotApprovedAbsenceBalance";
exports.COUNTRY = "country";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATION = "creation";
exports.ENTITLEMENT_METHOD = "entitlementMethod";
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
exports.HIRE_RULE = "hireRule";
exports.INITIAL_ACCRUAL_TRANSFER_DATE_RULE = "initialAccrualTransferDateRule";
exports.INITIAL_FLEXIBLE_ACCOUNT_START_DATE_RULE = "initialFlexibleAccountStartDateRule";
exports.INTERIM_RULE = "interimRule";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.LEVEL_OF_SIMULATION_PRECISION = "levelOfSimulationPrecision";
exports.MAXIMUM_SIMULATION_HORIZON_IN_MONTHS = "maximumSimulationHorizonInMonths";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.MINIMUM_BALANCE_ALLOWED = "minimumBalanceAllowed";
exports.PAY_COMPONENT = "payComponent";
exports.PAY_COMPONENT_ACCRUAL_SEPARATED = "payComponentAccrualSeparated";
exports.PAY_COMPONENT_GROUP = "payComponentGroup";
exports.PAY_COMPONENT_TERMINATION = "payComponentTermination";
exports.PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED = "payComponentTerminationAccrualSeparated";
exports.PAYOUT_ELIGIBILITY = "payoutEligibility";
exports.PEP_CALENDAR_AUTOMATION_LEVEL = "pepCalendarAutomationLevel";
exports.PERIOD_END_PROCESSING_RULE = "periodEndProcessingRule";
exports.POSTING_ORDER = "postingOrder";
exports.SECOND_ACCRUAL_CREATION_OFFSET = "secondAccrualCreationOffset";
exports.SIMULATE_ACCRUALS = "simulateAccruals";
exports.SIMULATION_RULE = "simulationRule";
exports.SNAPSHOTS_ALLOWED = "snapshotsAllowed";
exports.TERMINATION_RULE = "terminationRule";
exports.TERMINATION_RULE_DATA_EFFECTIVE_DATE = "terminationRuleDataEffectiveDate";
exports.TIME_COLLECTOR_TYPE = "timeCollectorType";
exports.UNIT = "unit";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new TimeAccountTypeEntityBuilder();
};

exports.getClient = function(configurations) {
	return new TimeAccountTypeClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new TimeAccountTypeClientAsync(configurations);
};

function TimeAccountTypeClient (configurations) {

	var API_PATH = "/odata/v2/TimeAccountType";

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

	this.count = function() {
		return this.client.get("/$count");
	};
}

function TimeAccountTypeClientAsync (configurations) {

	var API_PATH = "/odata/v2/TimeAccountType";

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

	this.countAsync = function(callback) {
		return this.client.getAsync(callback, "/$count");
	};

	this.execute = function() {
		return this.client.execute();
	};
}

function getId(id) {
	return "('" + id + "')";
}
