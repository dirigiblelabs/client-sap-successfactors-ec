var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitProgramEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitProgramEntityBuilder");

exports.AMOUNT = "amount";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CURRENCY = "currency";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.ELIGIBILITY_RULE_ID = "eligibilityRuleId";
exports.EXCEPTION_WORKFLOW_ID = "exceptionWorkflowId";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_CREATED_BY = "mdfSystemCreatedBy";
exports.MDF_SYSTEM_CREATED_DATE = "mdfSystemCreatedDate";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
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
exports.MULTIPLE_SELECTION_ALLOWED = "multipleSelectionAllowed";
exports.PROGRAM_ENROLLMENT_WORKFLOW_ID = "programEnrollmentWorkflowId";
exports.PROGRAM_ID = "programId";
exports.PROGRAM_NAME = "programName";
exports.PROGRAM_SCHEDULE = "programSchedule";
exports.STATUS = "status";
exports.SUPRESS_CLIENT_DATE_VALIDATION = "supressClientDateValidation";
exports.BENEFITS = "benefits";
exports.FORMS = "forms";
exports.POLICY_DOCUMENTS = "policyDocuments";
exports.PROGRAM_SCHEDULE_NAV = "programScheduleNav";
exports.USEFUL_LINKS = "usefulLinks";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitProgramEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitProgramClient(configurations);
};

function BenefitProgramClient (configurations) {

	var API_PATH = "/odata/v2/BenefitProgram";

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