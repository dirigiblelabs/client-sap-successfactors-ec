var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var Background_PromotabilityEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/Background_PromotabilityEntityBuilder");

exports.BACKGROUND_ELEMENT_ID = "backgroundElementId";
exports.BG_ORDER_POS = "bgOrderPos";
exports.COMMENT = "comment";
exports.FUNCTION = "function";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LEVEL = "level";
exports.TIMEFRAME = "timeframe";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new Background_PromotabilityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new Background_PromotabilityClient(configurations);
};

function Background_PromotabilityClient (configurations) {

	var API_PATH = "/odata/v2/Background_Promotability";

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
