var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EmpCompensationEntityBuilder = require("sap-successfactors-ec/CompensationInformation/Builders/EmpCompensationEntityBuilder");

exports.BENEFITS_RATE = "benefitsRate";
exports.BONUS_TARGET = "bonusTarget";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.CUSTOM_DOUBLE5 = "customDouble5";
exports.CUSTOM_DOUBLE6 = "customDouble6";
exports.CUSTOM_DOUBLE7 = "customDouble7";
exports.CUSTOM_STRING20 = "customString20";
exports.END_DATE = "endDate";
exports.EVENT = "event";
exports.EVENT_REASON = "eventReason";
exports.IS_ELIGIBLE_FOR_BENEFITS = "isEligibleForBenefits";
exports.IS_ELIGIBLE_FOR_CAR = "isEligibleForCar";
exports.IS_HIGHLY_COMPENSATED_EMPLOYEE = "isHighlyCompensatedEmployee";
exports.IS_INSIDER = "isInsider";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.PAY_GRADE = "payGrade";
exports.PAY_GROUP = "payGroup";
exports.PAYROLL_SYSTEM_ID = "payrollSystemId";
exports.START_DATE = "startDate";
exports.USER_ID = "userId";
exports.EMP_COMPENSATION_CALCULATED_NAV = "empCompensationCalculatedNav";
exports.EMP_COMPENSATION_GROUP_SUM_CALCULATED_NAV = "empCompensationGroupSumCalculatedNav";
exports.EMP_PAY_COMP_RECURRING_NAV = "empPayCompRecurringNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmpCompensationEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmpCompensationClient(configurations);
};

function EmpCompensationClient (configurations) {

	var API_PATH = "/odata/v2/EmpCompensation";

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
