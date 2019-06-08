var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitSavingsPlanEnrollmentContributionDetailEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitSavingsPlanEnrollmentContributionDetailEntityBuilder");

exports.BENEFIT_ENROLLMENT_EFFECTIVE_START_DATE = "BenefitEnrollment_effectiveStartDate";
exports.BENEFIT_ENROLLMENT_ID = "BenefitEnrollment_id";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.ID = "id";
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
exports.PENSION_FUND = "pensionFund";
exports.POST_TAX_AMOUNT_BONUS = "postTaxAmountBonus";
exports.POST_TAX_AMOUNT_REGULAR = "postTaxAmountRegular";
exports.POST_TAX_PERCENTAGE_BONUS = "postTaxPercentageBonus";
exports.POST_TAX_PERCENTAGE_REGULAR = "postTaxPercentageRegular";
exports.PRE_TAX_AMOUNT_BONUS = "preTaxAmountBonus";
exports.PRE_TAX_AMOUNT_REGULAR = "preTaxAmountRegular";
exports.PRE_TAX_PERCENTAGE_BONUS = "preTaxPercentageBonus";
exports.PRE_TAX_PERCENTAGE_REGULAR = "preTaxPercentageRegular";
exports.ROLL_OVER_BONUS = "rollOverBonus";
exports.ROLL_OVER_REGULAR = "rollOverRegular";
exports.START_POST_TAX_BONUS = "startPostTaxBonus";
exports.START_POST_TAX_REGULAR = "startPostTaxRegular";
exports.PENSION_FUND_NAV = "pensionFundNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitSavingsPlanEnrollmentContributionDetailEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitSavingsPlanEnrollmentContributionDetailClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new BenefitSavingsPlanEnrollmentContributionDetailClientAsync(configurations);
};

function BenefitSavingsPlanEnrollmentContributionDetailClient (configurations) {

	var API_PATH = "/odata/v2/BenefitSavingsPlanEnrollmentContributionDetail";

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

function BenefitSavingsPlanEnrollmentContributionDetailClientAsync (configurations) {

	var API_PATH = "/odata/v2/BenefitSavingsPlanEnrollmentContributionDetail";

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
