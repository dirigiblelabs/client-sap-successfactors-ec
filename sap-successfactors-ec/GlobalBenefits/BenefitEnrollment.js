var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitEnrollmentEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitEnrollmentEntityBuilder");

exports.AMOUNT = "amount";
exports.AMOUNT_FROM_WALLET = "amountFromWallet";
exports.BENEFIT = "benefit";
exports.BENEFIT_DATA_SOURCE = "benefitDataSource";
exports.BENEFIT_DATA_SOURCE_WITH_EXTERNAL_CODE = "benefitDataSourceWithExternalCode";
exports.BENEFIT_ENTITLEMENT_AMOUNT = "benefitEntitlementAmount";
exports.BENEFIT_PAYMENT_OPTION = "benefitPaymentOption";
exports.BENEFIT_PROGRAM = "benefitProgram";
exports.COMPENSATION_ADJUSTMENT_UNTIL = "compensationAdjustmentUntil";
exports.COMPENSATION_ID = "compensationId";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREDIT_POINTS_FROM_WALLET = "creditPointsFromWallet";
exports.CURRENCY = "currency";
exports.DEDUCTION_START_DATE = "deductionStartDate";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EFFECTIVE_STATUS = "effectiveStatus";
exports.ELIGIBLE_WALLET = "eligibleWallet";
exports.ELIGIBLE_WALLET_AMOUNT = "eligibleWalletAmount";
exports.ELIGIBLE_WALLET_CREDITS = "eligibleWalletCredits";
exports.ELIGIBLE_WALLET_WITH_DATA_SOURCE = "eligibleWalletWithDataSource";
exports.ENROLLMENT_CONTEXT = "enrollmentContext";
exports.ENROLLMENT_DATE = "enrollmentDate";
exports.EXCEPTION = "exception";
exports.EXTERNAL_NAME = "externalName";
exports.ID = "id";
exports.JOB_RUN_DATE = "jobRunDate";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.PREVIOUS_ENROLLMENT_ID = "previousEnrollmentId";
exports.RECORD_STATUS = "recordStatus";
exports.RETIREMENT_DATE = "retirementDate";
exports.SCHEDULE_PERIOD = "schedulePeriod";
exports.WALLET_CONSUMED_TILL = "walletConsumedTill";
exports.WORKER_ID = "workerId";
exports.BENEFIT_COMPANY_CAR_ENROLLMENT = "benefitCompanyCarEnrollment";
exports.BENEFIT_COMPANY_HOUSING_ENROLLMENT = "benefitCompanyHousingEnrollment";
exports.BENEFIT_CONTACTS = "benefitContacts";
exports.BENEFIT_INSURANCE_PLAN_ENROLLMENT_DETAILS = "benefitInsurancePlanEnrollmentDetails";
exports.BENEFIT_NAV = "benefitNav";
exports.BENEFIT_PAYMENT_OPTION_NAV = "benefitPaymentOptionNav";
exports.BENEFIT_PENSION_DEPENDENT_NOMINEES = "benefitPensionDependentNominees";
exports.BENEFIT_PENSION_ENROLLMENT_CONTRIBUTION_DETAIL = "benefitPensionEnrollmentContributionDetail";
exports.BENEFIT_PENSION_FUND_ENROLLMENT_CONTRIBUTION_DETAIL = "benefitPensionFundEnrollmentContributionDetail";
exports.BENEFIT_PENSION_NON_DEPENDENT_NOMINEES = "benefitPensionNonDependentNominees";
exports.BENEFIT_PROGRAM_NAV = "benefitProgramNav";
exports.BENEFIT_SAVINGS_PLAN_ENROLLMENT_CONTRIBUTION_DETAIL = "benefitSavingsPlanEnrollmentContributionDetail";
exports.ELIGIBLE_WALLET_NAV = "eligibleWalletNav";
exports.EXCEPTION_NAV = "exceptionNav";
exports.FORMS = "forms";
exports.POLICY_DOCUMENTS = "policyDocuments";
exports.SCHEDULE_PERIOD_NAV = "schedulePeriodNav";
exports.USEFUL_LINKS = "usefulLinks";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitEnrollmentEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitEnrollmentClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new BenefitEnrollmentClientAsync(configurations);
};

function BenefitEnrollmentClient (configurations) {

	var API_PATH = "/odata/v2/BenefitEnrollment";

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

function BenefitEnrollmentClientAsync (configurations) {

	var API_PATH = "/odata/v2/BenefitEnrollment";

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
