var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitPensionEmployeeContributionDetailEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitPensionEmployeeContributionDetailEntityBuilder");

exports.BENEFIT_BENEFIT_ID = "Benefit_benefitId";
exports.BENEFIT_EFFECTIVE_START_DATE = "Benefit_effectiveStartDate";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EMPLOYEE_CAN_EDIT_EMPLOYEE_CONTRIBUTION = "employeeCanEditEmployeeContribution";
exports.EMPLOYEE_CONTRIBUTION_AMOUNT = "employeeContributionAmount";
exports.EMPLOYEE_CONTRIBUTION_PERCENTAGE = "employeeContributionPercentage";
exports.EMPLOYEE_CONTRIBUTION_RULE = "employeeContributionRule";
exports.EMPLOYEE_CONTRIBUTION_TYPE = "employeeContributionType";
exports.EMPLOYEE_STATUTORY_MINIMUM_AMOUNT = "employeeStatutoryMinimumAmount";
exports.EMPLOYEE_STATUTORY_MINIMUM_PERCENTAGE = "employeeStatutoryMinimumPercentage";
exports.ID = "id";
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

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitPensionEmployeeContributionDetailEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitPensionEmployeeContributionDetailClient(configurations);
};

function BenefitPensionEmployeeContributionDetailClient (configurations) {

	var API_PATH = "/odata/v2/BenefitPensionEmployeeContributionDetail";

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
