var Client = require("sap/Client");
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

function HrisEmergencyContactAddressDEFLTClient (configurations) {

	var API_PATH = "/odata/v2/HrisEmergencyContactAddressDEFLT";

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
