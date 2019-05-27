var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var Background_VarPayEmpHistDataEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/Background_VarPayEmpHistDataEntityBuilder");

exports.BACKGROUND_ELEMENT_ID = "backgroundElementId";
exports.BASIS = "basis";
exports.BUSINESS_GOAL_CODE = "businessGoalCode";
exports.COUNTRY = "country";
exports.CURRENCY_CODE = "currencyCode";
exports.DEPARTMENT = "department";
exports.DIVISION = "division";
exports.END_DATE = "endDate";
exports.INCENTIVE_PLAN_CODE = "incentivePlanCode";
exports.JOB_TITLE = "jobTitle";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LOCATION = "location";
exports.PAY_GRADE = "payGrade";
exports.SALARY = "salary";
exports.START_DATE = "startDate";
exports.TGT_PCT = "tgtPct";
exports.USER_ID = "userId";
exports.VAR_PAY_PROGRAM_NAME = "varPayProgramName";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new Background_VarPayEmpHistDataEntityBuilder();
};

exports.getClient = function(configurations) {
	return new Background_VarPayEmpHistDataClient(configurations);
};

function Background_VarPayEmpHistDataClient (configurations) {

	var API_PATH = "/odata/v2/Background_VarPayEmpHistData";

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