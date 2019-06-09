var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
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

exports.getClientAsync = function(configurations) {
	return new JobClassificationCountryClientAsync(configurations);
};

function JobClassificationCountryClient (configurations) {

	var API_PATH = "/odata/v2/JobClassificationCountry";

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

	this.count = function() {
		return this.client.get("/$count");
	};
}

function JobClassificationCountryClientAsync (configurations) {

	var API_PATH = "/odata/v2/JobClassificationCountry";

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
