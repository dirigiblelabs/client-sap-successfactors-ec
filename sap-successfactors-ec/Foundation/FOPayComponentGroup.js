var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var FOPayComponentGroupEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FOPayComponentGroupEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.CURRENCY = "currency";
exports.DESCRIPTION = "description";
exports.END_DATE = "endDate";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.NAME = "name";
exports.PAY_COMPONENT_FLX = "payComponentFlx";
exports.SHOW_ON_COMP_U_I = "showOnCompUI";
exports.SORT_ORDER = "sortOrder";
exports.START_DATE = "startDate";
exports.STATUS = "status";
exports.USE_FOR_COMPARATIO_CALC = "useForComparatioCalc";
exports.USE_FOR_RANGE_PENETRATION = "useForRangePenetration";
exports.DESCRIPTION_TRANSLATION_NAV = "descriptionTranslationNav";
exports.NAME_TRANSLATION_NAV = "nameTranslationNav";
exports.PAY_COMPONENT_FLX_NAV = "payComponentFlxNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FOPayComponentGroupEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FOPayComponentGroupClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new FOPayComponentGroupClientAsync(configurations);
};

function FOPayComponentGroupClient (configurations) {

	var API_PATH = "/odata/v2/FOPayComponentGroup";

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

function FOPayComponentGroupClientAsync (configurations) {

	var API_PATH = "/odata/v2/FOPayComponentGroup";

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
