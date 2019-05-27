var Client = require("sap/Client");
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

function BenefitEffectiveDateConfigurationClient (configurations) {

	var API_PATH = "/odata/v2/BenefitEffectiveDateConfiguration";

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