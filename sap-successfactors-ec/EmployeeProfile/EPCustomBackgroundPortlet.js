var Client = require("sap/Client");
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

function EPCustomBackgroundPortletClient (configurations) {

	var API_PATH = "/odata/v2/EPCustomBackgroundPortlet";

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
