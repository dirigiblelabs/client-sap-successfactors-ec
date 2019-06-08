var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var UserBadgesEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/UserBadgesEntityBuilder");

exports.BADGE_CREATOR_NAME = "badgeCreatorName";
exports.BADGE_ID = "badgeId";
exports.BADGE_INSTANCE_ID = "badgeInstanceId";
exports.BADGE_TITLE = "badgeTitle";
exports.COMMENT = "comment";
exports.CREATOR_USER_I_D = "creatorUserID";
exports.LAST_MODIFIED = "lastModified";
exports.PHOTO = "photo";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new UserBadgesEntityBuilder();
};

exports.getClient = function(configurations) {
	return new UserBadgesClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new UserBadgesClientAsync(configurations);
};

function UserBadgesClient (configurations) {

	var API_PATH = "/odata/v2/UserBadges";

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

function UserBadgesClientAsync (configurations) {

	var API_PATH = "/odata/v2/UserBadges";

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

	this.countAsync = function(callback) {
		return this.client.getAsync(callback, "/$count");
	};

	this.execute = function() {
		return this.client.execute();
	};
}

function getId(id) {
	return "('" + id + "')";
}
