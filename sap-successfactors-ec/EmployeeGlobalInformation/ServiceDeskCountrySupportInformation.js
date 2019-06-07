var Client = require("sap/Client");
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

function ServiceDeskCountrySupportInformationClient (configurations) {

	var API_PATH = "/odata/v2/ServiceDeskCountrySupportInformation";

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
