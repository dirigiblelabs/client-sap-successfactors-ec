var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var Background_PromotabilityEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/Background_PromotabilityEntityBuilder");

exports.BACKGROUND_ELEMENT_ID = "backgroundElementId";
exports.BG_ORDER_POS = "bgOrderPos";
exports.COMMENT = "comment";
exports.FUNCTION = "function";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LEVEL = "level";
exports.TIMEFRAME = "timeframe";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new Background_PromotabilityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new Background_PromotabilityClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new Background_PromotabilityClientAsync(configurations);
};

function Background_PromotabilityClient (configurations) {

	var API_PATH = "/odata/v2/Background_Promotability";

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

	this.count = function(queryParameters, options) {
		return this.client.get("/$count", queryParameters, options);
	};
}

function Background_PromotabilityClientAsync (configurations) {

	var API_PATH = "/odata/v2/Background_Promotability";

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

	this.countAsync = function(callback, queryParameters, options) {
		return this.client.getAsync(callback, "/$count", queryParameters, options);
	};

	this.execute = function() {
		return this.client.execute();
	};
}

function getId(id) {
	return "('" + id + "')";
}
