var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var RoleTalentPoolMappingEntityEntityBuilder = require("sap-successfactors-ec/SkillsManagement/Builders/RoleTalentPoolMappingEntityEntityBuilder");

exports.ROLE_ENTITY_EXTERNAL_CODE = "RoleEntity_externalCode";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DESCRIPTION = "description";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.MDF_TALENT_POOL = "mdfTalentPool";
exports.NAME = "name";
exports.STATUS = "status";
exports.SUB_MODULE = "subModule";
exports.TALENT_POOL_ID = "talentPoolId";
exports.TRANSACTION_SEQUENCE = "transactionSequence";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new RoleTalentPoolMappingEntityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new RoleTalentPoolMappingEntityClient(configurations);
};

function RoleTalentPoolMappingEntityClient (configurations) {

	var API_PATH = "/odata/v2/RoleTalentPoolMappingEntity";

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
