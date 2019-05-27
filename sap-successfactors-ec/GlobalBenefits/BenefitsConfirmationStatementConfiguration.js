var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitsConfirmationStatementConfigurationEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitsConfirmationStatementConfigurationEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LEGAL_ENTITY = "legalEntity";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.TEMPLATE_ID = "templateId";
exports.LEGAL_ENTITY_NAV = "legalEntityNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitsConfirmationStatementConfigurationEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitsConfirmationStatementConfigurationClient(configurations);
};

function BenefitsConfirmationStatementConfigurationClient (configurations) {

	var API_PATH = "/odata/v2/BenefitsConfirmationStatementConfiguration";

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
