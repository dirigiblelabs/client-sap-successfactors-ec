var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var Background_MembershipsEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/Background_MembershipsEntityBuilder");

exports.BACKGROUND_ELEMENT_ID = "backgroundElementId";
exports.BG_ORDER_POS = "bgOrderPos";
exports.END_DATE = "endDate";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.ORGANIZATION = "organization";
exports.ROLE = "role";
exports.START_DATE = "startDate";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new Background_MembershipsEntityBuilder();
};

exports.getClient = function(configurations) {
	return new Background_MembershipsClient(configurations);
};

function Background_MembershipsClient (configurations) {

	var API_PATH = "/odata/v2/Background_Memberships";

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
