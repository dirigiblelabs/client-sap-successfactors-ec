var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitInsurancePlanEnrollmentDetailsEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitInsurancePlanEnrollmentDetailsEntityBuilder");

exports.BENEFIT_ENROLLMENT_EFFECTIVE_START_DATE = "BenefitEnrollment_effectiveStartDate";
exports.BENEFIT_ENROLLMENT_ID = "BenefitEnrollment_id";
exports.BENEFIT_SALARY_AMOUNT = "benefitSalaryAmount";
exports.COVERAGE = "coverage";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EMPLOYEE_CONTRIBUTION = "employeeContribution";
exports.EMPLOYER_CONTRIBUTION = "employerContribution";
exports.ENROLLEE_OPTIONS = "enrolleeOptions";
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
exports.PLAN = "plan";
exports.PROVIDER = "provider";
exports.ROUNDED_COVERAGE_AMOUNT = "roundedCoverageAmount";
exports.SMOKING = "smoking";
exports.BENEFIT_INSURANCE_DEPENDENT_DETAILS = "benefitInsuranceDependentDetails";
exports.COVERAGE_NAV = "coverageNav";
exports.ENROLLEE_OPTIONS_NAV = "enrolleeOptionsNav";
exports.PLAN_NAV = "planNav";
exports.PROVIDER_NAV = "providerNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitInsurancePlanEnrollmentDetailsEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitInsurancePlanEnrollmentDetailsClient(configurations);
};

function BenefitInsurancePlanEnrollmentDetailsClient (configurations) {

	var API_PATH = "/odata/v2/BenefitInsurancePlanEnrollmentDetails";

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
