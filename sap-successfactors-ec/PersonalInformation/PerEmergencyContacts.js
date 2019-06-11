var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var PerEmergencyContactsEntityBuilder = require("sap-successfactors-ec/PersonalInformation/Builders/PerEmergencyContactsEntityBuilder");

exports.ADDRESS_ADDRESS1 = "addressAddress1";
exports.ADDRESS_ADDRESS2 = "addressAddress2";
exports.ADDRESS_ADDRESS3 = "addressAddress3";
exports.ADDRESS_CITY = "addressCity";
exports.ADDRESS_COUNTRY = "addressCountry";
exports.ADDRESS_COUNTY = "addressCounty";
exports.ADDRESS_PROVINCE = "addressProvince";
exports.ADDRESS_STATE = "addressState";
exports.ADDRESS_ZIP_CODE = "addressZipCode";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.EMAIL = "email";
exports.IS_ADD_SAME_AS_EMPLOYEE = "isAddSameAsEmployee";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.NAME = "name";
exports.OPERATION = "operation";
exports.PERSON_ID_EXTERNAL = "personIdExternal";
exports.PHONE = "phone";
exports.PRIMARY_FLAG = "primaryFlag";
exports.RELATIONSHIP = "relationship";
exports.SECOND_PHONE = "secondPhone";
exports.ADDRESS_NAV_D_E_F_L_T = "addressNavDEFLT";
exports.PERSON_NAV = "personNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PerEmergencyContactsEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PerEmergencyContactsClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new PerEmergencyContactsClientAsync(configurations);
};

function PerEmergencyContactsClient (configurations) {

	var API_PATH = "/odata/v2/PerEmergencyContacts";

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

function PerEmergencyContactsClientAsync (configurations) {

	var API_PATH = "/odata/v2/PerEmergencyContacts";

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
