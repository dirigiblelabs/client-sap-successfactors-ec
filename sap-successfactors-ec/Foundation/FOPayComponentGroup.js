var Client = require("sap/Client");
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

function FOPayComponentGroupClient (configurations) {

	var API_PATH = "/odata/v2/FOPayComponentGroup";

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
