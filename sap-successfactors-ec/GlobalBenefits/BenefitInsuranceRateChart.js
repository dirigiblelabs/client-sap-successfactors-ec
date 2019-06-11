var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitInsuranceRateChartEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitInsuranceRateChartEntityBuilder");

exports.AGE_AS_OF_DAY = "ageAsOfDay";
exports.AGE_AS_OF_MONTH = "ageAsOfMonth";
exports.AGE_AS_OF_YEAR = "ageAsOfYear";
exports.COVERAGE = "coverage";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CURRENCY = "currency";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.FACTOR = "factor";
exports.GENDER_RELEVANT = "genderRelevant";
exports.INSURANCE_PLAN = "insurancePlan";
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
exports.PROVIDER = "provider";
exports.RATE_CHART_ID = "rateChartId";
exports.COVERAGE_NAV = "coverageNav";
exports.INSURANCE_PLAN_NAV = "insurancePlanNav";
exports.PROVIDER_NAV = "providerNav";
exports.RATE_CHART_ENROLLEE = "rateChartEnrollee";
exports.RATE_CHART_FIXED_AMOUNT = "rateChartFixedAmount";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitInsuranceRateChartEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitInsuranceRateChartClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new BenefitInsuranceRateChartClientAsync(configurations);
};

function BenefitInsuranceRateChartClient (configurations) {

	var API_PATH = "/odata/v2/BenefitInsuranceRateChart";

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

function BenefitInsuranceRateChartClientAsync (configurations) {

	var API_PATH = "/odata/v2/BenefitInsuranceRateChart";

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
