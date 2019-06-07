var Client = require("sap/Client");
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

function PerPersonalClient (configurations) {

	var API_PATH = "/odata/v2/PerPersonal";

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
