var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var ServiceDeskContactSupportInformationEntityBuilder = require("sap-successfactors-ec/EmployeeGlobalInformation/Builders/ServiceDeskContactSupportInformationEntityBuilder");

exports.CENTRAL_SUPPORT_MAIL = "centralSupportMail";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.SERVICE_DESK_COUNTRY_SUPPORT_INFORMATION = "serviceDeskCountrySupportInformation";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new ServiceDeskContactSupportInformationEntityBuilder();
};

exports.getClient = function(configurations) {
	return new ServiceDeskContactSupportInformationClient(configurations);
};

function ServiceDeskContactSupportInformationClient (configurations) {

	var API_PATH = "/odata/v2/ServiceDeskContactSupportInformation";

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