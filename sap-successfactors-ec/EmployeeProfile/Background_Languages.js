var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var Background_LanguagesEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/Background_LanguagesEntityBuilder");

exports.BACKGROUND_ELEMENT_ID = "backgroundElementId";
exports.BG_ORDER_POS = "bgOrderPos";
exports.LANGUAGE = "language";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.READING_PROF = "readingProf";
exports.SPEAKING_PROF = "speakingProf";
exports.USER_ID = "userId";
exports.VARIANT = "variant";
exports.WRITING_PROF = "writingProf";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new Background_LanguagesEntityBuilder();
};

exports.getClient = function(configurations) {
	return new Background_LanguagesClient(configurations);
};

function Background_LanguagesClient (configurations) {

	var API_PATH = "/odata/v2/Background_Languages";

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
