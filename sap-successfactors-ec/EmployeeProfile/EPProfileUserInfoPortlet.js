var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EPProfileUserInfoPortletEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/EPProfileUserInfoPortletEntityBuilder");

exports.DASHBOARD_ID = "dashboardId";
exports.IS_P_I_I = "isPII";
exports.IS_WRITABLE = "isWritable";
exports.PORTLET_ID = "portletId";
exports.STANDARD_OR_USER_INFO_ELEMENT_ID = "standardOrUserInfoElementId";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EPProfileUserInfoPortletEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EPProfileUserInfoPortletClient(configurations);
};

function EPProfileUserInfoPortletClient (configurations) {

	var API_PATH = "/odata/v2/EPProfileUserInfoPortlet";

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
