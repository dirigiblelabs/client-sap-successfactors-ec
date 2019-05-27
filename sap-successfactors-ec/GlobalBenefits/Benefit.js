var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitEntityBuilder");

exports.AGE_OF_RETIREMENT = "ageOfRetirement";
exports.ANNUAL_MAX_CONTRIBUTION_AMOUNT = "annualMaxContributionAmount";
exports.ANNUAL_MIN_CONTRIBUTION_AMOUNT = "annualMinContributionAmount";
exports.BALANCE_CARRY_FORWARD = "balanceCarryForward";
exports.BENEFIT_ID = "benefitId";
exports.BENEFIT_NAME = "benefitName";
exports.BENEFIT_PROGRAM = "benefitProgram";
exports.BENEFIT_SAVINGS_PLAN_SUB_TYPE = "benefitSavingsPlanSubType";
exports.BENEFIT_SCHEDULE = "benefitSchedule";
exports.BENEFIT_SHORT_DESCRIPTION = "benefitShortDescription";
exports.BENEFIT_SPECIFIC = "benefitSpecific";
exports.BENEFIT_TYPE = "benefitType";
exports.BOTH_BALANCE_CARRY_FORWARD_PARAMETERS_PRESENT = "bothBalanceCarryForwardParametersPresent";
exports.CARRY_FORWARD_ENROLLMENT = "carryForwardEnrollment";
exports.CLAIM = "claim";
exports.CLAIM_DETAIL = "claimDetail";
exports.CLAIM_DETAIL_REQUIRED = "claimDetailRequired";
exports.CLAIM_SCREEN_I_D = "claimScreenID";
exports.CLAIMS_LIMIT_PER_FREQUENCY_PERIOD = "claimsLimitPerFrequencyPeriod";
exports.CONVERSION_FACTOR = "conversionFactor";
exports.COUNTRY = "country";
exports.COVERAGE = "coverage";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREDIT_POINTS = "creditPoints";
exports.CURRENCY = "currency";
exports.DECIMAL_PRECISION_SETTING_FOR_CONTRIBUTION_AMOUNT = "decimalPrecisionSettingForContributionAmount";
exports.DEDUCTION_START_DATE = "deductionStartDate";
exports.DEPENDENT_SPECIFIC_RULE = "dependentSpecificRule";
exports.DUMMY_FIELD = "dummyField";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EFFECTIVE_STATUS = "effectiveStatus";
exports.ELIGIBILITY_RULE_ID = "eligibilityRuleId";
exports.EMAIL_NOTIFICATION_FOR_ENROLLMENT = "emailNotificationForEnrollment";
exports.EMPLOYEE_CLAIM_WORKFLOW_ID = "employeeClaimWorkflowId";
exports.EMPLOYEE_ENROLLMENT_EDIT_ALLOWED = "employeeEnrollmentEditAllowed";
exports.EMPLOYEE_ENROLLMENT_EDIT_TYPE = "employeeEnrollmentEditType";
exports.EMPLOYEE_ENROLLMENT_WORKFLOW_ID = "employeeEnrollmentWorkflowId";
exports.ENROLLEE_OPTIONS = "enrolleeOptions";
exports.ENROLLMENT = "enrollment";
exports.ENROLLMENT_REQUIRED = "enrollmentRequired";
exports.ENROLLMENT_SCREEN_I_D = "enrollmentScreenID";
exports.ENROLLMENT_TYPE = "enrollmentType";
exports.ENTITLEMENT_AMOUNT = "entitlementAmount";
exports.EXCEED_ENTITLEMENT_AMOUNT = "exceedEntitlementAmount";
exports.EXCEPTION_WORKFLOW_ID = "exceptionWorkflowId";
exports.FREQUENCY = "frequency";
exports.INSURANCE_TYPE = "insuranceType";
exports.JOB_ENROLLMENT_EDIT_ALLOWED = "jobEnrollmentEditAllowed";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.MULTIPLE_FUND_SELECTIONS_ALLOWED = "multipleFundSelectionsAllowed";
exports.NO_OF_CLAIM_TANSACTIONS = "noOfClaimTansactions";
exports.NO_OF_DEPENDENTS_TO_CONSIDER = "noOfDependentsToConsider";
exports.NOMINEE_RELEVANT = "nomineeRelevant";
exports.PAYROLL_INTEGRATION = "payrollIntegration";
exports.PLAN = "plan";
exports.SAVINGS_PLAN_SUB_TYPE = "savingsPlanSubType";
exports.STATUS = "status";
exports.SUPRESS_CLIENT_DATE_VALIDATION = "supressClientDateValidation";
exports.TRIGGER_DATE = "triggerDate";
exports.TYPE_OF_PENSION = "typeOfPension";
exports.WALLET_TYPE = "walletType";
exports.BALANCE_CARRY_FORWARD_OPTION = "balanceCarryForwardOption";
exports.BEN_COMPANY_CAR = "benCompanyCar";
exports.BEN_PAYMENT_OPTIONS = "benPaymentOptions";
exports.BENEFIT_COMPANY_HOUSING = "benefitCompanyHousing";
exports.BENEFIT_CONTACT = "benefitContact";
exports.BENEFIT_PROGRAM_NAV = "benefitProgramNav";
exports.BENEFIT_SAVINGS_PLAN_SUB_TYPE_NAV = "benefitSavingsPlanSubTypeNav";
exports.BENEFIT_SCHEDULE_NAV = "benefitScheduleNav";
exports.COVERAGE_NAV = "coverageNav";
exports.ELIGIBLE_BENEFITS = "eligibleBenefits";
exports.EMPLOYEE_CONTRIBUTION_DETAIL = "employeeContributionDetail";
exports.EMPLOYER_CONTRIBUTION_DETAIL = "employerContributionDetail";
exports.ENROLLEE_OPTIONS_NAV = "enrolleeOptionsNav";
exports.FORMS = "forms";
exports.INSURANCE_PLANS = "insurancePlans";
exports.LEGAL_ENTITIES = "legalEntities";
exports.PENSION_FUNDS = "pensionFunds";
exports.PLAN_NAV = "planNav";
exports.POLICY_DOCUMENTS = "policyDocuments";
exports.STATUTORY_MINIMUM_LOOK_UP = "statutoryMinimumLookUp";
exports.USEFUL_LINKS = "usefulLinks";
exports.WALLETS_ASSOCIATED = "walletsAssociated";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitClient(configurations);
};

function BenefitClient (configurations) {

	var API_PATH = "/odata/v2/Benefit";

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
