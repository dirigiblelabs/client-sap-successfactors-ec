var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitEffectiveDateConfigurationEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitEffectiveDateConfigurationEntityBuilder");

exports.BENEFIT_LIFE_EVENT_CONFIGURATION_CONFIGURATION_ID = "BenefitLifeEventConfiguration_configurationId";
exports.BENEFIT_LIFE_EVENT_CONFIGURATION_EFFECTIVE_START_DATE = "BenefitLifeEventConfiguration_effectiveStartDate";
exports.BENEFIT = "benefit";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DEDUCTION_RULE = "deductionRule";
exports.EXCEPTION_FOR = "exceptionFor";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.RULE = "rule";
exports.BENEFIT_NAV = "benefitNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitEffectiveDateConfigurationEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitEffectiveDateConfigurationClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new BenefitEffectiveDateConfigurationClientAsync(configurations);
};

function BenefitEffectiveDateConfigurationClient (configurations) {

	var API_PATH = "/odata/v2/BenefitEffectiveDateConfiguration";

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

function BenefitEffectiveDateConfigurationClientAsync (configurations) {

	var API_PATH = "/odata/v2/BenefitEffectiveDateConfiguration";

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
