var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var EmpEmploymentEntityBuilder = require("sap-successfactors-ec/EmploymentInformation/Builders/EmpEmploymentEntityBuilder");

exports.STOCK_END_DATE = "StockEndDate";
exports.ASSIGNMENT_CLASS = "assignmentClass";
exports.BENEFITS_ELIGIBILITY_START_DATE = "benefitsEligibilityStartDate";
exports.BENEFITS_END_DATE = "benefitsEndDate";
exports.BONUS_PAY_EXPIRATION_DATE = "bonusPayExpirationDate";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.ELIGIBLE_FOR_SAL_CONTINUATION = "eligibleForSalContinuation";
exports.ELIGIBLE_FOR_STOCK = "eligibleForStock";
exports.EMPLOYEE_FIRST_EMPLOYMENT = "employeeFirstEmployment";
exports.END_DATE = "endDate";
exports.FIRST_DATE_WORKED = "firstDateWorked";
exports.INCLUDE_ALL_RECORDS = "includeAllRecords";
exports.INITIAL_OPTION_GRANT = "initialOptionGrant";
exports.INITIAL_STOCK_GRANT = "initialStockGrant";
exports.IS_CONTINGENT_WORKER = "isContingentWorker";
exports.IS_E_C_RECORD = "isECRecord";
exports.JOB_NUMBER = "jobNumber";
exports.LAST_DATE_WORKED = "lastDateWorked";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.OK_TO_REHIRE = "okToRehire";
exports.ORIGINAL_START_DATE = "originalStartDate";
exports.PAYROLL_END_DATE = "payrollEndDate";
exports.PERSON_ID_EXTERNAL = "personIdExternal";
exports.PREV_EMPLOYEE_ID = "prevEmployeeId";
exports.PROFESSIONAL_SERVICE_DATE = "professionalServiceDate";
exports.REGRET_TERMINATION = "regretTermination";
exports.SALARY_END_DATE = "salaryEndDate";
exports.SENIORITY_DATE = "seniorityDate";
exports.SERVICE_DATE = "serviceDate";
exports.START_DATE = "startDate";
exports.USER_ID = "userId";
exports.EMP_JOB_RELATIONSHIP_NAV = "empJobRelationshipNav";
exports.EMP_WORK_PERMIT_NAV = "empWorkPermitNav";
exports.JOB_INFO_NAV = "jobInfoNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmpEmploymentEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmpEmploymentClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new EmpEmploymentClientAsync(configurations);
};

function EmpEmploymentClient (configurations) {

	var API_PATH = "/odata/v2/EmpEmployment";

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

	this.count = function() {
		return this.client.get("/$count");
	};
}

function EmpEmploymentClientAsync (configurations) {

	var API_PATH = "/odata/v2/EmpEmployment";

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

	this.countAsync = function(callback) {
		return this.client.getAsync(callback, "/$count");
	};

	this.execute = function() {
		return this.client.execute();
	};
}

function getId(id) {
	return "('" + id + "')";
}
