var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var EmpEmploymentTerminationEntityBuilder = require("sap-successfactors-ec/EmploymentInformation/Builders/EmpEmploymentTerminationEntityBuilder");

exports.STOCK_END_DATE = "StockEndDate";
exports.ATTACHMENT_ID = "attachmentId";
exports.BENEFITS_END_DATE = "benefitsEndDate";
exports.BONUS_PAY_EXPIRATION_DATE = "bonusPayExpirationDate";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.ELIGIBLE_FOR_SAL_CONTINUATION = "eligibleForSalContinuation";
exports.END_DATE = "endDate";
exports.EVENT_REASON = "eventReason";
exports.LAST_DATE_WORKED = "lastDateWorked";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.NEW_MAIN_EMPLOYMENT_ID = "newMainEmploymentId";
exports.NOTES = "notes";
exports.OK_TO_REHIRE = "okToRehire";
exports.PAYROLL_END_DATE = "payrollEndDate";
exports.PERSON_ID_EXTERNAL = "personIdExternal";
exports.REGRET_TERMINATION = "regretTermination";
exports.SALARY_END_DATE = "salaryEndDate";
exports.USER_ID = "userId";
exports.EMPLOYMENT_NAV = "employmentNav";
exports.JOB_INFO_NAV = "jobInfoNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmpEmploymentTerminationEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmpEmploymentTerminationClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new EmpEmploymentTerminationClientAsync(configurations);
};

function EmpEmploymentTerminationClient (configurations) {

	var API_PATH = "/odata/v2/EmpEmploymentTermination";

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

function EmpEmploymentTerminationClientAsync (configurations) {

	var API_PATH = "/odata/v2/EmpEmploymentTermination";

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
