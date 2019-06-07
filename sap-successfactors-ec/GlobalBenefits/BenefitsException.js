var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitsExceptionEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitsExceptionEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EVENT_DATE = "eventDate";
exports.EXCEPTION_CREATION_DATE = "exceptionCreationDate";
exports.EXCEPTION_END_DATE = "exceptionEndDate";
exports.EXCEPTION_FOR = "exceptionFor";
exports.EXCEPTION_ID = "exceptionId";
exports.EXCEPTION_NAME = "exceptionName";
exports.EXCEPTION_START_DATE = "exceptionStartDate";
exports.IS_AUTOMATION = "isAutomation";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LEGAL_ENTITY = "legalEntity";
exports.LIFE_EVENT_CONFIGURATION = "lifeEventConfiguration";
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
exports.NEW_EXCEPTION_WINDOW = "newExceptionWindow";
exports.WORKER_ID = "workerId";
exports.BENEFIT_EXCEPTION_DETAILS = "benefitExceptionDetails";
exports.BENEFIT_PROGRAM_EXCEPTION_DETAILS = "benefitProgramExceptionDetails";
exports.LIFE_EVENT_CONFIGURATION_NAV = "lifeEventConfigurationNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitsExceptionEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitsExceptionClient(configurations);
};

function BenefitsExceptionClient (configurations) {

	var API_PATH = "/odata/v2/BenefitsException";

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
