var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitPensionEnrollmentContributionDetailEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitPensionEnrollmentContributionDetailEntityBuilder");

exports.BENEFIT_ENROLLMENT_EFFECTIVE_START_DATE = "BenefitEnrollment_effectiveStartDate";
exports.BENEFIT_ENROLLMENT_ID = "BenefitEnrollment_id";
exports.CONTRIBUTION_ID = "contributionId";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EMPLOYEE_CONTRIBUTION_AMT = "employeeContributionAmt";
exports.EMPLOYEE_CONTRIBUTION_PERC = "employeeContributionPerc";
exports.EMPLOYEE_STATUTORY_MAX_AMT = "employeeStatutoryMaxAmt";
exports.EMPLOYEE_STATUTORY_MAX_PERC = "employeeStatutoryMaxPerc";
exports.EMPLOYEE_STATUTORY_MIN_AMT = "employeeStatutoryMinAmt";
exports.EMPLOYEE_STATUTORY_MIN_PERC = "employeeStatutoryMinPerc";
exports.EMPLOYER_CONTRIBUTION_AMT = "employerContributionAmt";
exports.EMPLOYER_CONTRIBUTION_PERC = "employerContributionPerc";
exports.EMPLOYER_STATUTORY_MAX_AMT = "employerStatutoryMaxAmt";
exports.EMPLOYER_STATUTORY_MAX_PERC = "employerStatutoryMaxPerc";
exports.EMPLOYER_STATUTORY_MIN_AMT = "employerStatutoryMinAmt";
exports.EMPLOYER_STATUTORY_MIN_PERC = "employerStatutoryMinPerc";
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

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitPensionEnrollmentContributionDetailEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitPensionEnrollmentContributionDetailClient(configurations);
};

function BenefitPensionEnrollmentContributionDetailClient (configurations) {

	var API_PATH = "/odata/v2/BenefitPensionEnrollmentContributionDetail";

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
