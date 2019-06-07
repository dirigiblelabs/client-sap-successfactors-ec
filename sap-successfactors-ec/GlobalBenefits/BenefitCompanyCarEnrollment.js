var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitCompanyCarEnrollmentEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitCompanyCarEnrollmentEntityBuilder");

exports.BENEFIT_ENROLLMENT_EFFECTIVE_START_DATE = "BenefitEnrollment_effectiveStartDate";
exports.BENEFIT_ENROLLMENT_ID = "BenefitEnrollment_id";
exports.BENEFIT_I_D = "benefitID";
exports.CAR_LEASE_END_DATE = "carLeaseEndDate";
exports.CAR_LEASE_SERVICE_PROVIDER = "carLeaseServiceProvider";
exports.CAR_LEASE_START_DATE = "carLeaseStartDate";
exports.CAR_MODEL = "carModel";
exports.CAR_REGISTRATION_NUMBER = "carRegistrationNumber";
exports.CAR_VENDOR = "carVendor";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CURRENCY = "currency";
exports.EFFECTIVE_STATUS = "effectiveStatus";
exports.EMI_AMOUNT = "emiAmount";
exports.EMPLOYEE_CONTRIBUTION = "employeeContribution";
exports.EMPLOYER_CONTRIBUTION = "employerContribution";
exports.EX_SHOWROOM_VALUE = "exShowroomValue";
exports.ID = "id";
exports.INSTALLMENT_FREQUENCY = "installmentFrequency";
exports.INTEREST_RATE = "interestRate";
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
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.PERIOD_DURATION = "periodDuration";
exports.UNIT_OF_PERIOD = "unitOfPeriod";
exports.CAR_LEASE_SERVICE_PROVIDER_NAV = "carLeaseServiceProviderNav";
exports.CAR_MODEL_NAV = "carModelNav";
exports.CAR_VENDOR_NAV = "carVendorNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitCompanyCarEnrollmentEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitCompanyCarEnrollmentClient(configurations);
};

function BenefitCompanyCarEnrollmentClient (configurations) {

	var API_PATH = "/odata/v2/BenefitCompanyCarEnrollment";

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
