var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var Background_CertificatesEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/Background_CertificatesEntityBuilder");

exports.BACKGROUND_ELEMENT_ID = "backgroundElementId";
exports.BG_ORDER_POS = "bgOrderPos";
exports.CUSTOM1 = "custom1";
exports.DESCRIPTION = "description";
exports.END_DATE = "endDate";
exports.INSTITUTION = "institution";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LICENSE_COUNTRY = "licenseCountry";
exports.LICENSE_NAME = "licenseName";
exports.LICENSE_NUMBER = "licenseNumber";
exports.LICENSE_STATE = "licenseState";
exports.NAME = "name";
exports.START_DATE = "startDate";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new Background_CertificatesEntityBuilder();
};

exports.getClient = function(configurations) {
	return new Background_CertificatesClient(configurations);
};

function Background_CertificatesClient (configurations) {

	var API_PATH = "/odata/v2/Background_Certificates";

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
}

function getId(id) {
	return "('" + id + "')";
}