var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var PayrollSystemConfigurationEntityBuilder = require("sap-successfactors-ec/MasterDataReplication/Builders/PayrollSystemConfigurationEntityBuilder");

exports.COUNTRY = "country";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.ENABLE_BSI = "enableBsi";
exports.ENABLE_ENHANCED_VALIDATIONS_FOR_PRODUCTION = "enableEnhancedValidationsForProduction";
exports.ENABLE_PAY_STATEMENT = "enablePayStatement";
exports.ENABLE_PAYROLL_UI_INTEGRATION = "enablePayrollUiIntegration";
exports.EXTERNAL_CODE = "externalCode";
exports.EXTERNAL_NAME = "externalName";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.PAYROLL_SYSTEM_CLIENT_ID = "payrollSystemClientId";
exports.PAYROLL_SYSTEM_URL = "payrollSystemUrl";
exports.STATUS = "status";
exports.THIRD_PARTY_IDP_URL = "thirdPartyIdpUrl";
exports.CATEGORIES = "categories";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PayrollSystemConfigurationEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PayrollSystemConfigurationClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new PayrollSystemConfigurationClientAsync(configurations);
};

function PayrollSystemConfigurationClient (configurations) {

	var API_PATH = "/odata/v2/PayrollSystemConfiguration";

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

function PayrollSystemConfigurationClientAsync (configurations) {

	var API_PATH = "/odata/v2/PayrollSystemConfiguration";

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
