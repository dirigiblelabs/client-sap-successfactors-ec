var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var Background_OutsideWorkExperienceEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/Background_OutsideWorkExperienceEntityBuilder");

exports.BACKGROUND_ELEMENT_ID = "backgroundElementId";
exports.BG_ORDER_POS = "bgOrderPos";
exports.BUSINESS_TYPE = "businessType";
exports.EMPLOYER = "employer";
exports.EMPLOYER_ADDRESS = "employerAddress";
exports.EMPLOYER_CITY = "employerCity";
exports.EMPLOYER_CONTACT = "employerContact";
exports.EMPLOYER_COUNTRY = "employerCountry";
exports.EMPLOYER_EMAIL = "employerEmail";
exports.EMPLOYER_PHONE = "employerPhone";
exports.EMPLOYER_STATE = "employerState";
exports.EMPLOYER_ZIP = "employerZip";
exports.END_DATE = "endDate";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.PRESENT_EMPLOYER = "presentEmployer";
exports.START_DATE = "startDate";
exports.START_TITLE = "startTitle";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new Background_OutsideWorkExperienceEntityBuilder();
};

exports.getClient = function(configurations) {
	return new Background_OutsideWorkExperienceClient(configurations);
};

function Background_OutsideWorkExperienceClient (configurations) {

	var API_PATH = "/odata/v2/Background_OutsideWorkExperience";

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
