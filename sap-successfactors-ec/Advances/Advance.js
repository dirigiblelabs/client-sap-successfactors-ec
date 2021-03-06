var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
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

exports.getClientAsync = function(configurations) {
	return new AdvanceClientAsync(configurations);
};

function AdvanceClient (configurations) {

	var API_PATH = "/odata/v2/Advance";

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

function AdvanceClientAsync (configurations) {

	var API_PATH = "/odata/v2/Advance";

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
