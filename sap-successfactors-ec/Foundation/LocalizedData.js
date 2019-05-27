var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var LocalizedDataEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/LocalizedDataEntityBuilder");

exports.LOCALIZED_DATA_CODE = "localizedDataCode";
exports.LOCALIZED_DATA_LOCALE = "localizedDataLocale";
exports.LOCALIZED_DATA_TRANSLATION = "localizedDataTranslation";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new LocalizedDataEntityBuilder();
};

exports.getClient = function(configurations) {
	return new LocalizedDataClient(configurations);
};

function LocalizedDataClient (configurations) {

	var API_PATH = "/odata/v2/LocalizedData";

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
