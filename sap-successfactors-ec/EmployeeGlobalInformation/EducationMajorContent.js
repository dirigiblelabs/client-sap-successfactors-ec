var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EducationMajorContentEntityBuilder = require("sap-successfactors-ec/EmployeeGlobalInformation/Builders/EducationMajorContentEntityBuilder");

exports.JOB_PROFILE_EXTERNAL_CODE = "JobProfile_externalCode";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.ENTITY = "entity";
exports.EXTERNAL_CODE = "externalCode";
exports.JOB_PROFILE_ID = "jobProfileId";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MAPPED_DEGREE_ID = "mappedDegreeId";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.ORDER = "order";
exports.SECTION_ID = "sectionId";
exports.SECTION_TYPE = "sectionType";
exports.STATUS = "status";
exports.SUB_MODULE = "subModule";
exports.TRANSACTION_SEQUENCE = "transactionSequence";
exports.ENTITY_NAV = "entityNav";
exports.MAPPED_DEGREE_ID_NAV = "mappedDegreeIdNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EducationMajorContentEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EducationMajorContentClient(configurations);
};

function EducationMajorContentClient (configurations) {

	var API_PATH = "/odata/v2/EducationMajorContent";

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