var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var Background_LeadExperienceEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/Background_LeadExperienceEntityBuilder");

exports.BACKGROUND_ELEMENT_ID = "backgroundElementId";
exports.BG_ORDER_POS = "bgOrderPos";
exports.COMMENTS = "comments";
exports.DOLLARS = "dollars";
exports.EXPERIENCE = "experience";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.PEOPLE = "people";
exports.USER_ID = "userId";
exports.YEARS = "years";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new Background_LeadExperienceEntityBuilder();
};

exports.getClient = function(configurations) {
	return new Background_LeadExperienceClient(configurations);
};

function Background_LeadExperienceClient (configurations) {

	var API_PATH = "/odata/v2/Background_LeadExperience";

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
