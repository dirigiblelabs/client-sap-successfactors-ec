var Client = require("sap/Client");
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

function PayrollSystemConfigurationClient (configurations) {

	var API_PATH = "/odata/v2/PayrollSystemConfiguration";

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
