var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EmpGlobalAssignmentEntityBuilder = require("sap-successfactors-ec/GlobalAssignment/Builders/EmpGlobalAssignmentEntityBuilder");

exports.ASSIGNMENT_CLASS = "assignmentClass";
exports.ASSIGNMENT_TYPE = "assignmentType";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.END_DATE = "endDate";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.PAYROLL_END_DATE = "payrollEndDate";
exports.PERSON_ID_EXTERNAL = "personIdExternal";
exports.PLANNED_END_DATE = "plannedEndDate";
exports.START_DATE = "startDate";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmpGlobalAssignmentEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmpGlobalAssignmentClient(configurations);
};

function EmpGlobalAssignmentClient (configurations) {

	var API_PATH = "/odata/v2/EmpGlobalAssignment";

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
