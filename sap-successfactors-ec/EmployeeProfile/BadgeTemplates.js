var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BadgeTemplatesEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/BadgeTemplatesEntityBuilder");

exports.BADGE_ID = "badgeId";
exports.BADGE_TITLE = "badgeTitle";
exports.CUSTOM_BADGE = "customBadge";
exports.PHOTO = "photo";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BadgeTemplatesEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BadgeTemplatesClient(configurations);
};

function BadgeTemplatesClient (configurations) {

	var API_PATH = "/odata/v2/BadgeTemplates";

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
