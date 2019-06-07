var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var ApprenticeEntityBuilder = require("sap-successfactors-ec/EmployeeGlobalInformation/Builders/ApprenticeEntityBuilder");

exports.ACTIVE_STATUS = "activeStatus";
exports.ASSIGNED_ADD_SUPERVISOR = "assignedAddSupervisor";
exports.ASSIGNED_GROUP = "assignedGroup";
exports.ASSIGNED_SCHOOL = "assignedSchool";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.END_DATE = "endDate";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.NAME = "name";
exports.NOTE = "note";
exports.START_DATE = "startDate";
exports.USER = "user";
exports.YEAR = "year";
exports.ASSIGNED_GROUP_NAV = "assignedGroupNav";
exports.ASSIGNED_SCHOOL_NAV = "assignedSchoolNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new ApprenticeEntityBuilder();
};

exports.getClient = function(configurations) {
	return new ApprenticeClient(configurations);
};

function ApprenticeClient (configurations) {

	var API_PATH = "/odata/v2/Apprentice";

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
