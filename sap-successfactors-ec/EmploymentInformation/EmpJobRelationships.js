var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EmpJobRelationshipsEntityBuilder = require("sap-successfactors-ec/EmploymentInformation/Builders/EmpJobRelationshipsEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.END_DATE = "endDate";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.OPERATION = "operation";
exports.REL_USER_ID = "relUserId";
exports.RELATIONSHIP_TYPE = "relationshipType";
exports.START_DATE = "startDate";
exports.USER_ID = "userId";
exports.EMPLOYMENT_NAV = "employmentNav";
exports.REL_EMPLOYMENT_NAV = "relEmploymentNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmpJobRelationshipsEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmpJobRelationshipsClient(configurations);
};

function EmpJobRelationshipsClient (configurations) {

	var API_PATH = "/odata/v2/EmpJobRelationships";

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
