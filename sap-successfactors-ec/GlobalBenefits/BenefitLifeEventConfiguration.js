var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitLifeEventConfigurationEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitLifeEventConfigurationEntityBuilder");

exports.BENEFIT_EVENT = "benefitEvent";
exports.CONFIGURATION_ID = "configurationId";
exports.CONFIGURATION_NAME = "configurationName";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EXCEPTION_FOR_PERIOD = "exceptionForPeriod";
exports.EXCEPTION_WINDOW_RULE = "exceptionWindowRule";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LEGAL_ENTITY = "legalEntity";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.BENEFIT_EFFECTIVE_DATE_CONFIGURATION = "benefitEffectiveDateConfiguration";
exports.BENEFIT_EVENT_NAV = "benefitEventNav";
exports.LEGAL_ENTITY_NAV = "legalEntityNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitLifeEventConfigurationEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitLifeEventConfigurationClient(configurations);
};

function BenefitLifeEventConfigurationClient (configurations) {

	var API_PATH = "/odata/v2/BenefitLifeEventConfiguration";

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
