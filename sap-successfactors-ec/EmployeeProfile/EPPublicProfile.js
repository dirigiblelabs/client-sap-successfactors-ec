var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var EPPublicProfileEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/EPPublicProfileEntityBuilder");

exports.ABOUT_ME_VIDEO_TOKEN = "aboutMeVideoToken";
exports.ABOUT_ME_VIDEO_UPLOAD_ID = "aboutMeVideoUploadId";
exports.APPLICATION_ID = "applicationId";
exports.HAS_ABOUT_ME_VIDEO = "hasAboutMeVideo";
exports.HAS_INTRODUCTION = "hasIntroduction";
exports.HAS_MY_NAME = "hasMyName";
exports.HAS_MY_NAME_AUDIO = "hasMyNameAudio";
exports.INTRODUCTION = "introduction";
exports.IS_ADD_BADGE_ALLOWED = "isAddBadgeAllowed";
exports.IS_BADGES_SECTION_ENABLED = "isBadgesSectionEnabled";
exports.IS_EXPRESSIVE_MODE = "isExpressiveMode";
exports.IS_EXPRESSIVE_PHOTO_EDITABLE = "isExpressivePhotoEditable";
exports.MEDIA_SERVICE_BASE_URL = "mediaServiceBaseUrl";
exports.MY_NAME_AUDIO_TOKEN = "myNameAudioToken";
exports.MY_NAME_AUDIO_UPLOAD_ID = "myNameAudioUploadId";
exports.MY_NAME_TEXT = "myNameText";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EPPublicProfileEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EPPublicProfileClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new EPPublicProfileClientAsync(configurations);
};

function EPPublicProfileClient (configurations) {

	var API_PATH = "/odata/v2/EPPublicProfile";

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

function EPPublicProfileClientAsync (configurations) {

	var API_PATH = "/odata/v2/EPPublicProfile";

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
