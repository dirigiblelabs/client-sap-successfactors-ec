var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
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

exports.getClientAsync = function(configurations) {
	return new BenefitEmployeeClaimClientAsync(configurations);
};

function BenefitEmployeeClaimClient (configurations) {

	var API_PATH = "/odata/v2/BenefitEmployeeClaim";

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

function BenefitEmployeeClaimClientAsync (configurations) {

	var API_PATH = "/odata/v2/BenefitEmployeeClaim";

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
