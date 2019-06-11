var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var FOPayComponentEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FOPayComponentEntityBuilder");

exports.BASE_PAY_COMPONENT_GROUP = "basePayComponentGroup";
exports.CAN_OVERRIDE = "canOverride";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.CURRENCY = "currency";
exports.DESCRIPTION = "description";
exports.DISPLAY_ON_SELF_SERVICE = "displayOnSelfService";
exports.END_DATE = "endDate";
exports.EXTERNAL_CODE = "externalCode";
exports.FREQUENCY_CODE = "frequencyCode";
exports.IS_EARNING = "isEarning";
exports.IS_END_DATED_PAYMENT = "isEndDatedPayment";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.MAX_FRACTION_DIGITS = "maxFractionDigits";
exports.NAME = "name";
exports.PAY_COMPONENT_TYPE = "payComponentType";
exports.PAY_COMPONENT_VALUE = "payComponentValue";
exports.RECURRING = "recurring";
exports.SELF_SERVICE_DESCRIPTION = "selfServiceDescription";
exports.START_DATE = "startDate";
exports.STATUS = "status";
exports.TARGET = "target";
exports.TAX_TREATMENT = "taxTreatment";
exports.USED_FOR_COMP_PLANNING = "usedForCompPlanning";
exports.BASE_PAY_COMPONENT_GROUP_NAV = "basePayComponentGroupNav";
exports.DESCRIPTION_TRANSLATION_NAV = "descriptionTranslationNav";
exports.FREQUENCY_CODE_NAV = "frequencyCodeNav";
exports.NAME_TRANSLATION_NAV = "nameTranslationNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FOPayComponentEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FOPayComponentClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new FOPayComponentClientAsync(configurations);
};

function FOPayComponentClient (configurations) {

	var API_PATH = "/odata/v2/FOPayComponent";

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

	this.count = function(queryParameters, options) {
		return this.client.get("/$count", queryParameters, options);
	};
}

function FOPayComponentClientAsync (configurations) {

	var API_PATH = "/odata/v2/FOPayComponent";

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

	this.countAsync = function(callback, queryParameters, options) {
		return this.client.getAsync(callback, "/$count", queryParameters, options);
	};

	this.execute = function() {
		return this.client.execute();
	};
}

function getId(id) {
	return "('" + id + "')";
}
