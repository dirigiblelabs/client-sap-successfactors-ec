var Client = require("sap/Client");
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

function EmpEmploymentClient (configurations) {

	var API_PATH = "/odata/v2/EmpEmployment";

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
