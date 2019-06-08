var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitInsurancePlanUSAEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitInsurancePlanUSAEntityBuilder");

exports.BENEFIT_INSURANCE_PLAN_EFFECTIVE_START_DATE = "BenefitInsurancePlan_effectiveStartDate";
exports.BENEFIT_INSURANCE_PLAN_ID = "BenefitInsurancePlan_id";
exports.COBRA_RELEVANT = "cobraRelevant";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.ID = "id";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitInsurancePlanUSAEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitInsurancePlanUSAClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new BenefitInsurancePlanUSAClientAsync(configurations);
};

function BenefitInsurancePlanUSAClient (configurations) {

	var API_PATH = "/odata/v2/BenefitInsurancePlanUSA";

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

function BenefitInsurancePlanUSAClientAsync (configurations) {

	var API_PATH = "/odata/v2/BenefitInsurancePlanUSA";

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
