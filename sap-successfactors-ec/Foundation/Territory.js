var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var TerritoryEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/TerritoryEntityBuilder");

exports.TERRITORY_CODE = "territoryCode";
exports.TERRITORY_NAME = "territoryName";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new TerritoryEntityBuilder();
};

exports.getClient = function(configurations) {
	return new TerritoryClient(configurations);
};

function TerritoryClient (configurations) {

	var API_PATH = "/odata/v2/Territory";

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
