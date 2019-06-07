var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var JobClassificationCountryEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/JobClassificationCountryEntityBuilder");

exports.JOB_CLASSIFICATION_EFFECTIVE_START_DATE = "JobClassification_effectiveStartDate";
exports.JOB_CLASSIFICATION_EXTERNAL_CODE = "JobClassification_externalCode";
exports.COUNTRY = "country";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_STATUS = "effectiveStatus";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.TO_JOB_CLASSIFICATION_A_U_S = "toJobClassificationAUS";
exports.TO_JOB_CLASSIFICATION_B_R_A = "toJobClassificationBRA";
exports.TO_JOB_CLASSIFICATION_C_A_N = "toJobClassificationCAN";
exports.TO_JOB_CLASSIFICATION_F_R_A = "toJobClassificationFRA";
exports.TO_JOB_CLASSIFICATION_G_B_R = "toJobClassificationGBR";
exports.TO_JOB_CLASSIFICATION_I_T_A = "toJobClassificationITA";
exports.TO_JOB_CLASSIFICATION_U_S_A = "toJobClassificationUSA";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new JobClassificationCountryEntityBuilder();
};

exports.getClient = function(configurations) {
	return new JobClassificationCountryClient(configurations);
};

function JobClassificationCountryClient (configurations) {

	var API_PATH = "/odata/v2/JobClassificationCountry";

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
