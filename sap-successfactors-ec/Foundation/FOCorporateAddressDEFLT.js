var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var FOCorporateAddressDEFLTEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FOCorporateAddressDEFLTEntityBuilder");

exports.ADDRESS1 = "address1";
exports.ADDRESS2 = "address2";
exports.ADDRESS3 = "address3";
exports.ADDRESS4 = "address4";
exports.ADDRESS5 = "address5";
exports.ADDRESS_ID = "addressId";
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
exports.PROVINCE = "province";
exports.START_DATE = "startDate";
exports.STATE = "state";
exports.ZIP_CODE = "zipCode";
exports.COUNTRY_NAV = "countryNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FOCorporateAddressDEFLTEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FOCorporateAddressDEFLTClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new FOCorporateAddressDEFLTClientAsync(configurations);
};

function FOCorporateAddressDEFLTClient (configurations) {

	var API_PATH = "/odata/v2/FOCorporateAddressDEFLT";

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

function FOCorporateAddressDEFLTClientAsync (configurations) {

	var API_PATH = "/odata/v2/FOCorporateAddressDEFLT";

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
