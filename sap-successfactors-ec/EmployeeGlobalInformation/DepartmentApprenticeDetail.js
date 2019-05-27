var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var DepartmentApprenticeDetailEntityBuilder = require("sap-successfactors-ec/EmployeeGlobalInformation/Builders/DepartmentApprenticeDetailEntityBuilder");

exports.DEPARTMENT_EFFECTIVE_START_DATE = "Department_effectiveStartDate";
exports.DEPARTMENT_EXTERNAL_CODE = "Department_externalCode";
exports.APPRENTICE_DEPARTMENT_LOCATION = "apprenticeDepartmentLocation";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DECENTRAL_TRAINER_USER_ID = "decentralTrainerUserId";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MAX_NUMBER_OF_APPRENTICES = "maxNumberOfApprentices";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.NOTE = "note";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new DepartmentApprenticeDetailEntityBuilder();
};

exports.getClient = function(configurations) {
	return new DepartmentApprenticeDetailClient(configurations);
};

function DepartmentApprenticeDetailClient (configurations) {

	var API_PATH = "/odata/v2/DepartmentApprenticeDetail";

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
