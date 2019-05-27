var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var AdvanceEntityBuilder = require("sap-successfactors-ec/Advances/Builders/AdvanceEntityBuilder");

exports.NON_RECURRING_PAYMENT_EXTERNAL_CODE = "NonRecurringPayment_externalCode";
exports.ADVANCE_ELIGIBILITY_CODE = "advanceEligibilityCode";
exports.ADVANCE_TYPE = "advanceType";
exports.APPROVAL_STATUS = "approvalStatus";
exports.APPROVER = "approver";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CURRENCY_CODE = "currencyCode";
exports.CURRENCY_G_O = "currencyGO";
exports.ELIGIBILE_AMOUNT = "eligibileAmount";
exports.ELIGIBILITY_AMOUNT = "eligibilityAmount";
exports.ELIGIBLE_ADVANCE_TYPE = "eligibleAdvanceType";
exports.EXTERNAL_CODE = "externalCode";
exports.INSTALLMENT_AMOUNT = "installmentAmount";
exports.INSTALLMENT_FREQUENCY = "installmentFrequency";
exports.INTEREST_RATE = "interestRate";
exports.INTEREST_TYPE = "interestType";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.NOTES_FOR_APPROVER = "notesForApprover";
exports.NUMBER_OF_INSTALLMENTS = "numberOfInstallments";
exports.PAYMENT_MODE = "paymentMode";
exports.PENDING_AMOUNT = "pendingAmount";
exports.PERIOD_END_DATE = "periodEndDate";
exports.PERIOD_START_DATE = "periodStartDate";
exports.RECOVERY_MODE = "recoveryMode";
exports.RECOVERY_STATUS = "recoveryStatus";
exports.REMAINING_REQUESTS = "remainingRequests";
exports.REQUEST_DATE = "requestDate";
exports.REQUESTED_AMOUNT = "requestedAmount";
exports.TOTAL_REPAYMENT_AMOUNT = "totalRepaymentAmount";
exports.ADVANCE_ELIGIBILITY_CODE_NAV = "advanceEligibilityCodeNav";
exports.ADVANCES_INSTALLMENTS = "advancesInstallments";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new AdvanceEntityBuilder();
};

exports.getClient = function(configurations) {
	return new AdvanceClient(configurations);
};

function AdvanceClient (configurations) {

	var API_PATH = "/odata/v2/Advance";

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
