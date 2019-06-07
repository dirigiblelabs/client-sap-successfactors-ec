var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var Background_CoursesEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/Background_CoursesEntityBuilder");

exports.BACKGROUND_ELEMENT_ID = "backgroundElementId";
exports.BG_ORDER_POS = "bgOrderPos";
exports.COURSE = "course";
exports.END_DATE = "endDate";
exports.INSTITUTION = "institution";
exports.INSTRUCTION_TYPE = "instructionType";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LENGTH = "length";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new Background_CoursesEntityBuilder();
};

exports.getClient = function(configurations) {
	return new Background_CoursesClient(configurations);
};

function Background_CoursesClient (configurations) {

	var API_PATH = "/odata/v2/Background_Courses";

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
