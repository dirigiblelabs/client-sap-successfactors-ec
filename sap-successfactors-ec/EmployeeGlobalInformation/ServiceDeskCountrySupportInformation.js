var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var ServiceDeskCountrySupportInformationEntityBuilder = require("sap-successfactors-ec/EmployeeGlobalInformation/Builders/ServiceDeskCountrySupportInformationEntityBuilder");

exports.SERVICE_DESK_CONTACT_SUPPORT_INFORMATION_EXTERNAL_CODE = "ServiceDeskContactSupportInformation_externalCode";
exports.COUNTRY = "country";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EMAIL = "email";
exports.EXTERNAL_CODE = "externalCode";
exports.IS_INTERNATIONAL_SUPPORT = "isInternationalSupport";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.PHONE_NUMBER = "phoneNumber";
exports.PLACE = "place";
exports.TOLL_FREE_NUMBER = "tollFreeNumber";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new ServiceDeskCountrySupportInformationEntityBuilder();
};

exports.getClient = function(configurations) {
	return new ServiceDeskCountrySupportInformationClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new ServiceDeskCountrySupportInformationClientAsync(configurations);
};

function ServiceDeskCountrySupportInformationClient (configurations) {

	var API_PATH = "/odata/v2/ServiceDeskCountrySupportInformation";

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

function ServiceDeskCountrySupportInformationClientAsync (configurations) {

	var API_PATH = "/odata/v2/ServiceDeskCountrySupportInformation";

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
