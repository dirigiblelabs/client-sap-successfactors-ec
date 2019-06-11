var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var HrisEmergencyContactAddressDEFLTEntityBuilder = require("sap-successfactors-ec/PersonalInformation/Builders/HrisEmergencyContactAddressDEFLTEntityBuilder");

exports.ADDRESS1 = "address1";
exports.ADDRESS2 = "address2";
exports.ADDRESS3 = "address3";
exports.ADDRESS4 = "address4";
exports.ADDRESS5 = "address5";
exports.ADDRESS_ID = "addressId";
exports.ADDRESS_TYPE = "addressType";
exports.CITY = "city";
exports.COUNTRY = "country";
exports.COUNTY = "county";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.END_DATE = "endDate";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.NOTES = "notes";
exports.PROVINCE = "province";
exports.START_DATE = "startDate";
exports.STATE = "state";
exports.ZIP_CODE = "zipCode";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new HrisEmergencyContactAddressDEFLTEntityBuilder();
};

exports.getClient = function(configurations) {
	return new HrisEmergencyContactAddressDEFLTClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new HrisEmergencyContactAddressDEFLTClientAsync(configurations);
};

function HrisEmergencyContactAddressDEFLTClient (configurations) {

	var API_PATH = "/odata/v2/HrisEmergencyContactAddressDEFLT";

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

function HrisEmergencyContactAddressDEFLTClientAsync (configurations) {

	var API_PATH = "/odata/v2/HrisEmergencyContactAddressDEFLT";

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
