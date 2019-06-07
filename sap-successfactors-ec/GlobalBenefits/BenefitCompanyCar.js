var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitCompanyCarEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitCompanyCarEntityBuilder");

exports.BENEFIT_BENEFIT_ID = "Benefit_benefitId";
exports.BENEFIT_EFFECTIVE_START_DATE = "Benefit_effectiveStartDate";
exports.BENEFIT_COMPANY_CAR_ID = "benefitCompanyCarId";
exports.BUY_BACK_SUPPORTED = "buyBackSupported";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_STATUS = "effectiveStatus";
exports.INSTALLMENT_FREQUENCY = "installmentFrequency";
exports.INTEREST_RATE = "interestRate";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.LOCK_IN_POLICY_DURATION = "lockInPolicyDuration";
exports.MAINTAINANCE_COVERED = "maintainanceCovered";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.ROAD_TAX_COVERED = "roadTaxCovered";
exports.BEN_COMPANY_CAR_ALLOWED_MODELS = "benCompanyCarAllowedModels";
exports.BEN_COMPANY_CAR_RECOMMENDED_VENDORS = "benCompanyCarRecommendedVendors";
exports.CAR_LEASE_SERVICE_PROVIDERS = "carLeaseServiceProviders";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitCompanyCarEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitCompanyCarClient(configurations);
};

function BenefitCompanyCarClient (configurations) {

	var API_PATH = "/odata/v2/BenefitCompanyCar";

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
