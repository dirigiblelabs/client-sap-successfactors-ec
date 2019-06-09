var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var PerPersonEntityBuilder = require("sap-successfactors-ec/PersonalInformation/Builders/PerPersonEntityBuilder");

exports.BIRTH_NAME = "birthName";
exports.COUNTRY_OF_BIRTH = "countryOfBirth";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.DATE_OF_BIRTH = "dateOfBirth";
exports.INCLUDE_ALL_RECORDS = "includeAllRecords";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.PER_PERSON_UUID = "perPersonUuid";
exports.PERSON_ID = "personId";
exports.PERSON_ID_EXTERNAL = "personIdExternal";
exports.REGION_OF_BIRTH = "regionOfBirth";
exports.USER_ID = "userId";
exports.EMAIL_NAV = "emailNav";
exports.EMERGENCY_CONTACT_NAV = "emergencyContactNav";
exports.HOME_ADDRESS_NAV_D_E_F_L_T = "homeAddressNavDEFLT";
exports.NATIONAL_ID_NAV = "nationalIdNav";
exports.PERSON_RERLATIONSHIP_NAV = "personRerlationshipNav";
exports.PERSONAL_INFO_NAV = "personalInfoNav";
exports.PHONE_NAV = "phoneNav";
exports.SOCIAL_ACCOUNT_NAV = "socialAccountNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PerPersonEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PerPersonClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new PerPersonClientAsync(configurations);
};

function PerPersonClient (configurations) {

	var API_PATH = "/odata/v2/PerPerson";

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

function PerPersonClientAsync (configurations) {

	var API_PATH = "/odata/v2/PerPerson";

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
