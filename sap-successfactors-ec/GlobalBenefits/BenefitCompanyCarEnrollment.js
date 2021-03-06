var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
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

exports.getClientAsync = function(configurations) {
	return new BenefitCompanyCarEnrollmentClientAsync(configurations);
};

function BenefitCompanyCarEnrollmentClient (configurations) {

	var API_PATH = "/odata/v2/BenefitCompanyCarEnrollment";

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

function BenefitCompanyCarEnrollmentClientAsync (configurations) {

	var API_PATH = "/odata/v2/BenefitCompanyCarEnrollment";

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
