var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
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

exports.getClientAsync = function(configurations) {
	return new EmpCompensationClientAsync(configurations);
};

function EmpCompensationClient (configurations) {

	var API_PATH = "/odata/v2/EmpCompensation";

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

function EmpCompensationClientAsync (configurations) {

	var API_PATH = "/odata/v2/EmpCompensation";

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
