var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitEmployeeClaimEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitEmployeeClaimEntityBuilder");

exports.BENEFIT = "benefit";
exports.BENEFIT_DATA_SOURCE = "benefitDataSource";
exports.BENEFIT_DATA_SOURCE_WITH_EXTERNAL_CODE = "benefitDataSourceWithExternalCode";
exports.BENEFIT_PROGRAM = "benefitProgram";
exports.BY_PASS_WORKFLOW = "byPassWorkflow";
exports.CLAIM_DATE = "claimDate";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CURRENCY = "currency";
exports.ENTITLEMENT_AMOUNT = "entitlementAmount";
exports.EXCEPTION = "exception";
exports.EXTERNAL_NAME = "externalName";
exports.ID = "id";
exports.IS_TOTAL_AMOUNT_READ_ONLY = "isTotalAmountReadOnly";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_CREATED_BY = "mdfSystemCreatedBy";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.NRP_ID = "nrpId";
exports.RECORD_STATUS = "recordStatus";
exports.REMARKS = "remarks";
exports.STATUS = "status";
exports.TOTAL_AMOUNT = "totalAmount";
exports.WORKER_ID = "workerId";
exports.BEN_FUEL_REIMBURSEMENT = "benFuelReimbursement";
exports.BEN_TRAVEL_REIMBURSEMENT_CLAIM = "benTravelReimbursementClaim";
exports.BENEFIT_CONTACTS = "benefitContacts";
exports.BENEFIT_DEPENDENT_DETAIL = "benefitDependentDetail";
exports.BENEFIT_EMPLOYEE_CAR_CLAIM = "benefitEmployeeCarClaim";
exports.BENEFIT_EMPLOYEE_CLAIM_DETAIL = "benefitEmployeeClaimDetail";
exports.BENEFIT_FUEL_REIMBURSEMENT_CLAIM_DETAIL = "benefitFuelReimbursementClaimDetail";
exports.BENEFIT_NAV = "benefitNav";
exports.BENEFIT_PROGRAM_NAV = "benefitProgramNav";
exports.EXCEPTION_NAV = "exceptionNav";
exports.FORMS = "forms";
exports.POLICY_DOCUMENTS = "policyDocuments";
exports.USEFUL_LINKS = "usefulLinks";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitEmployeeClaimEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitEmployeeClaimClient(configurations);
};

function BenefitEmployeeClaimClient (configurations) {

	var API_PATH = "/odata/v2/BenefitEmployeeClaim";

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
