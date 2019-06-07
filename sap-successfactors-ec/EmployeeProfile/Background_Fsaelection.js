var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var Background_FsaelectionEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/Background_FsaelectionEntityBuilder");

exports.BACKGROUND_ELEMENT_ID = "backgroundElementId";
exports.BG_ORDER_POS = "bgOrderPos";
exports.FSABALANCE = "fsabalance";
exports.FSACONTRIBUTIONS = "fsacontributions";
exports.FSAELECTIONAMOUNT = "fsaelectionamount";
exports.FSAFUNDSOUT = "fsafundsout";
exports.FSAPLAN = "fsaplan";
exports.FSAREPAYMENT = "fsarepayment";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new Background_FsaelectionEntityBuilder();
};

exports.getClient = function(configurations) {
	return new Background_FsaelectionClient(configurations);
};

function Background_FsaelectionClient (configurations) {

	var API_PATH = "/odata/v2/Background_Fsaelection";

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
