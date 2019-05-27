var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var JobClassificationUSAEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/JobClassificationUSAEntityBuilder");

exports.JOB_CLASSIFICATION_COUNTRY_COUNTRY = "JobClassificationCountry_country";
exports.JOB_CLASSIFICATION_EFFECTIVE_START_DATE = "JobClassification_effectiveStartDate";
exports.JOB_CLASSIFICATION_EXTERNAL_CODE = "JobClassification_externalCode";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EEO1_JOB_CATEGORY = "eeo1JobCategory";
exports.EEO4_JOB_CATEGORY = "eeo4JobCategory";
exports.EEO5_JOB_CATEGORY = "eeo5JobCategory";
exports.EEO6_JOB_CATEGORY = "eeo6JobCategory";
exports.EEO_JOB_GROUP = "eeoJobGroup";
exports.EXTERNAL_CODE = "externalCode";
exports.FLSA_STATUS_U_S_A = "flsaStatusUSA";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.LOCAL_JOB_TITLE = "localJobTitle";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new JobClassificationUSAEntityBuilder();
};

exports.getClient = function(configurations) {
	return new JobClassificationUSAClient(configurations);
};

function JobClassificationUSAClient (configurations) {

	var API_PATH = "/odata/v2/JobClassificationUSA";

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
