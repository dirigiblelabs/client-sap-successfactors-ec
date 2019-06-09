var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var FOLocationEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FOLocationEntityBuilder");

exports.ADDRESS_ADDRESS1 = "addressAddress1";
exports.ADDRESS_ADDRESS2 = "addressAddress2";
exports.ADDRESS_ADDRESS3 = "addressAddress3";
exports.ADDRESS_ADDRESS4 = "addressAddress4";
exports.ADDRESS_ADDRESS5 = "addressAddress5";
exports.ADDRESS_CITY = "addressCity";
exports.ADDRESS_COUNTRY = "addressCountry";
exports.ADDRESS_COUNTY = "addressCounty";
exports.ADDRESS_PROVINCE = "addressProvince";
exports.ADDRESS_STATE = "addressState";
exports.ADDRESS_ZIP_CODE = "addressZipCode";
exports.COMPANY_FLX = "companyFlx";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.DESCRIPTION = "description";
exports.END_DATE = "endDate";
exports.EXTERNAL_CODE = "externalCode";
exports.GEOZONE_FLX = "geozoneFlx";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.LOCATION_GROUP = "locationGroup";
exports.NAME = "name";
exports.STANDARD_HOURS = "standardHours";
exports.START_DATE = "startDate";
exports.STATUS = "status";
exports.TIMEZONE = "timezone";
exports.ADDRESS_NAV_D_E_F_L_T = "addressNavDEFLT";
exports.COMPANY_FLX_NAV = "companyFlxNav";
exports.DESCRIPTION_TRANSLATION_NAV = "descriptionTranslationNav";
exports.GEOZONE_FLX_NAV = "geozoneFlxNav";
exports.LOCATION_GROUP_NAV = "locationGroupNav";
exports.NAME_TRANSLATION_NAV = "nameTranslationNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FOLocationEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FOLocationClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new FOLocationClientAsync(configurations);
};

function FOLocationClient (configurations) {

	var API_PATH = "/odata/v2/FOLocation";

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

function FOLocationClientAsync (configurations) {

	var API_PATH = "/odata/v2/FOLocation";

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
