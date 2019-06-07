var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BankEntityBuilder = require("sap-successfactors-ec/PaymentInformation/Builders/BankEntityBuilder");

exports.BANK_BRANCH = "bankBranch";
exports.BANK_COUNTRY = "bankCountry";
exports.BANK_NAME = "bankName";
exports.BUSINESS_IDENTIFIER_CODE = "businessIdentifierCode";
exports.CITY = "city";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_STATUS = "effectiveStatus";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.POSTAL_CODE = "postalCode";
exports.ROUTING_NUMBER = "routingNumber";
exports.STREET = "street";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BankEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BankClient(configurations);
};

function BankClient (configurations) {

	var API_PATH = "/odata/v2/Bank";

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
