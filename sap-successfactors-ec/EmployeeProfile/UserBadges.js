var Client = require("sap/Client");
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

function getId(id) {
	return "('" + id + "')";
}
