var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
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

exports.getClientAsync = function(configurations) {
	return new Background_OutsideWorkExperienceClientAsync(configurations);
};

function Background_OutsideWorkExperienceClient (configurations) {

	var API_PATH = "/odata/v2/Background_OutsideWorkExperience";

	this.client = new Client(configurations, API_PATH);

	this.list = function(queryParameters, options) {
		return this.client.list(queryParameters, options);
	};

	this.get = function(id, queryParameters, options) {
		return this.client.get(getId(id), queryParameters, options);
	};

	this.create = function(entity, queryParameters, options) {
		return this.client.create(entity, queryParameters, options);
	};

	this.update = function(id, entity, queryParameters, options) {
		return this.client.update(getId(id), entity, queryParameters, options);
	};

	this.delete = function(id, queryParameters, options) {
		return this.client.delete(getId(id), queryParameters, options);
	};

	this.count = function() {
		return this.client.get("/$count");
	};
}

function Background_OutsideWorkExperienceClientAsync (configurations) {

	var API_PATH = "/odata/v2/Background_OutsideWorkExperience";

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
