var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitClaimAccumulationEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitClaimAccumulationEntityBuilder");

exports.ACCUMULATED_AMOUNT = "accumulatedAmount";
exports.ACCUMULATED_CREDITS = "accumulatedCredits";
exports.BALANCE_CARRY_FORWARD_AMOUNT = "balanceCarryForwardAmount";
exports.BALANCE_CREDITS = "balanceCredits";
exports.BENEFIT = "benefit";
exports.CLAIM_WINDOW_END = "claimWindowEnd";
exports.CLAIM_WINDOW_START = "claimWindowStart";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CURRENCY = "currency";
exports.EXCEPTION = "exception";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_CREATED_BY = "mdfSystemCreatedBy";
exports.MDF_SYSTEM_CREATED_DATE = "mdfSystemCreatedDate";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_LAST_MODIFIED_BY = "mdfSystemLastModifiedBy";
exports.MDF_SYSTEM_LAST_MODIFIED_DATE = "mdfSystemLastModifiedDate";
exports.MDF_SYSTEM_LAST_MODIFIED_DATE_WITH_T_Z = "mdfSystemLastModifiedDateWithTZ";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.REMAINING_AMOUNT = "remainingAmount";
exports.SCHEDULE_PERIOD = "schedulePeriod";
exports.WORKER_ID = "workerId";
exports.BENEFIT_BALANCE_CARRY_FORWARD_DETAILS = "benefitBalanceCarryForwardDetails";
exports.BENEFIT_CLAIMS = "benefitClaims";
exports.BENEFIT_ENROLLMENTS = "benefitEnrollments";
exports.BENEFIT_NAV = "benefitNav";
exports.EXCEPTION_NAV = "exceptionNav";
exports.SCHEDULE_PERIOD_NAV = "schedulePeriodNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitClaimAccumulationEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitClaimAccumulationClient(configurations);
};

function BenefitClaimAccumulationClient (configurations) {

	var API_PATH = "/odata/v2/BenefitClaimAccumulation";

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