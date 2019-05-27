var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitProgramEnrollmentEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitProgramEnrollmentEntityBuilder");

exports.BENEFIT_PROGRAM = "benefitProgram";
exports.BENEFIT_PROGRAM_DATA_SOURCE = "benefitProgramDataSource";
exports.BENEFIT_PROGRAM_DATA_SOURCE_WITH_EXTERNAL_CODE = "benefitProgramDataSourceWithExternalCode";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EFFECTIVE_STATUS = "effectiveStatus";
exports.ENROLLMENT_DATE = "enrollmentDate";
exports.EXCEPTION = "exception";
exports.EXTERNAL_NAME = "externalName";
exports.ID = "id";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_CREATED_BY = "mdfSystemCreatedBy";
exports.MDF_SYSTEM_CREATED_DATE = "mdfSystemCreatedDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_LAST_MODIFIED_BY = "mdfSystemLastModifiedBy";
exports.MDF_SYSTEM_LAST_MODIFIED_DATE = "mdfSystemLastModifiedDate";
exports.MDF_SYSTEM_LAST_MODIFIED_DATE_WITH_T_Z = "mdfSystemLastModifiedDateWithTZ";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.PROGRAM_AMOUNT = "programAmount";
exports.PROGRAM_CURRENCY = "programCurrency";
exports.PROGRAM_ENTITLEMENT_AMOUNT = "programEntitlementAmount";
exports.RECORD_STATUS = "recordStatus";
exports.WORKER_ID = "workerId";
exports.BENEFIT_PROGRAM_ENROLLMENT_DETAIL = "benefitProgramEnrollmentDetail";
exports.BENEFIT_PROGRAM_NAV = "benefitProgramNav";
exports.EXCEPTION_NAV = "exceptionNav";
exports.FORMS = "forms";
exports.POLICY_DOCUMENTS = "policyDocuments";
exports.USEFUL_LINKS = "usefulLinks";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitProgramEnrollmentEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitProgramEnrollmentClient(configurations);
};

function BenefitProgramEnrollmentClient (configurations) {

	var API_PATH = "/odata/v2/BenefitProgramEnrollment";

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
