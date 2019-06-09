var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
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

exports.getClientAsync = function(configurations) {
	return new BenefitPensionEnrollmentContributionDetailClientAsync(configurations);
};

function BenefitPensionEnrollmentContributionDetailClient (configurations) {

	var API_PATH = "/odata/v2/BenefitPensionEnrollmentContributionDetail";

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

function BenefitPensionEnrollmentContributionDetailClientAsync (configurations) {

	var API_PATH = "/odata/v2/BenefitPensionEnrollmentContributionDetail";

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
