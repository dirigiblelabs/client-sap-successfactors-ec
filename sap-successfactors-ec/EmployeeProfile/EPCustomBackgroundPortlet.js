var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var EPCustomBackgroundPortletEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/EPCustomBackgroundPortletEntityBuilder");

exports.BACKGROUND_ELEMENT_ID = "backgroundElementId";
exports.BACKGROUND_PROPERTY_LISTS = "backgroundPropertyLists";
exports.EDITABLE = "editable";
exports.USER_ID = "userId";
exports.VIEWABLE = "viewable";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EPCustomBackgroundPortletEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EPCustomBackgroundPortletClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new EPCustomBackgroundPortletClientAsync(configurations);
};

function EPCustomBackgroundPortletClient (configurations) {

	var API_PATH = "/odata/v2/EPCustomBackgroundPortlet";

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

function EPCustomBackgroundPortletClientAsync (configurations) {

	var API_PATH = "/odata/v2/EPCustomBackgroundPortlet";

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
