var Client = require("sap/Client");
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

function EmpEmploymentTerminationClient (configurations) {

	var API_PATH = "/odata/v2/EmpEmploymentTermination";

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
