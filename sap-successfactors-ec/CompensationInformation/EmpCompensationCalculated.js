var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EmpCompensationCalculatedEntityBuilder = require("sap-successfactors-ec/CompensationInformation/Builders/EmpCompensationCalculatedEntityBuilder");

exports.COMPA_RATIO = "compaRatio";
exports.ERROR_CODE = "errorCode";
exports.ERROR_MESSAGE = "errorMessage";
exports.RANGE_PENETRATION = "rangePenetration";
exports.SEQ_NUMBER = "seqNumber";
exports.START_DATE = "startDate";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmpCompensationCalculatedEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmpCompensationCalculatedClient(configurations);
};

function EmpCompensationCalculatedClient (configurations) {

	var API_PATH = "/odata/v2/EmpCompensationCalculated";

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
