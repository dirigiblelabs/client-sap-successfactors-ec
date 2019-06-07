var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var Background_EducationEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/Background_EducationEntityBuilder");

exports.BACKGROUND_ELEMENT_ID = "backgroundElementId";
exports.BG_ORDER_POS = "bgOrderPos";
exports.DEGREE = "degree";
exports.DEGREE_DATE = "degreeDate";
exports.END_DATE = "endDate";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.MAJOR = "major";
exports.SCHOOL = "school";
exports.SCHOOL_ADDRESS = "schoolAddress";
exports.SCHOOL_CITY = "schoolCity";
exports.SCHOOL_COUNTRY = "schoolCountry";
exports.SCHOOL_STATE = "schoolState";
exports.SCHOOL_TYPE = "schoolType";
exports.SCHOOL_ZIP = "schoolZip";
exports.START_DATE = "startDate";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new Background_EducationEntityBuilder();
};

exports.getClient = function(configurations) {
	return new Background_EducationClient(configurations);
};

function Background_EducationClient (configurations) {

	var API_PATH = "/odata/v2/Background_Education";

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
