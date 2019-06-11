var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var PerPersonalEntityBuilder = require("sap-successfactors-ec/PersonalInformation/Builders/PerPersonalEntityBuilder");

exports.ATTACHMENT_ID = "attachmentId";
exports.BUSINESS_FIRST_NAME = "businessFirstName";
exports.BUSINESS_LAST_NAME = "businessLastName";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.DISPLAY_NAME = "displayName";
exports.END_DATE = "endDate";
exports.FIRST_NAME = "firstName";
exports.GENDER = "gender";
exports.INCLUDE_ALL_RECORDS = "includeAllRecords";
exports.INITIALS = "initials";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.LAST_NAME = "lastName";
exports.MARITAL_STATUS = "maritalStatus";
exports.MIDDLE_NAME = "middleName";
exports.NATIONALITY = "nationality";
exports.NATIVE_PREFERRED_LANG = "nativePreferredLang";
exports.OPERATION = "operation";
exports.PERSON_ID_EXTERNAL = "personIdExternal";
exports.PREFERRED_NAME = "preferredName";
exports.SALUTATION = "salutation";
exports.SCRIPT = "script";
exports.START_DATE = "startDate";
exports.TITLE = "title";
exports.PERSON_NAV = "personNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PerPersonalEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PerPersonalClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new PerPersonalClientAsync(configurations);
};

function PerPersonalClient (configurations) {

	var API_PATH = "/odata/v2/PerPersonal";

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

	this.count = function(queryParameters, options) {
		return this.client.get("/$count", queryParameters, options);
	};
}

function PerPersonalClientAsync (configurations) {

	var API_PATH = "/odata/v2/PerPersonal";

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

	this.countAsync = function(callback, queryParameters, options) {
		return this.client.getAsync(callback, "/$count", queryParameters, options);
	};

	this.execute = function() {
		return this.client.execute();
	};
}

function getId(id) {
	return "('" + id + "')";
}
