var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EPProfileViewEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/EPProfileViewEntityBuilder");

exports.DASHBOARD_ID = "dashboardId";
exports.DASHBOARD_TITLE = "dashboardTitle";
exports.DASHBOARD_TYPE = "dashboardType";
exports.LIVE_PROFILE_PHOTO_PERMISSION = "liveProfilePhotoPermission";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EPProfileViewEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EPProfileViewClient(configurations);
};

function EPProfileViewClient (configurations) {

	var API_PATH = "/odata/v2/EPProfileView";

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
