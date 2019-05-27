var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var Background_CommunityEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/Background_CommunityEntityBuilder");

exports.BACKGROUND_ELEMENT_ID = "backgroundElementId";
exports.BG_ORDER_POS = "bgOrderPos";
exports.END_DATE = "endDate";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.NAME = "name";
exports.ROLE = "role";
exports.START_DATE = "startDate";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new Background_CommunityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new Background_CommunityClient(configurations);
};

function Background_CommunityClient (configurations) {

	var API_PATH = "/odata/v2/Background_Community";

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
