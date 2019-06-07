var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EmpTimeAccountBalanceEntityBuilder = require("sap-successfactors-ec/TimeOff/Builders/EmpTimeAccountBalanceEntityBuilder");

exports.ACCOUNT_CLOSED = "accountClosed";
exports.BALANCE = "balance";
exports.TIME_ACCOUNT = "timeAccount";
exports.TIME_ACCOUNT_TYPE = "timeAccountType";
exports.TIME_UNIT = "timeUnit";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmpTimeAccountBalanceEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmpTimeAccountBalanceClient(configurations);
};

function EmpTimeAccountBalanceClient (configurations) {

	var API_PATH = "/odata/v2/EmpTimeAccountBalance";

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
