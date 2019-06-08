var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitEnrollmentGroupEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitEnrollmentGroupEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.ID = "id";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.OPEN_ENROLLMENT_CONFIG = "openEnrollmentConfig";
exports.RECORD_STATUS = "recordStatus";
exports.SCHEDULE_PERIOD = "schedulePeriod";
exports.WORKER_ID = "workerId";
exports.BENEFIT_ENROLLMENTS = "benefitEnrollments";
exports.OPEN_ENROLLMENT_CONFIG_NAV = "openEnrollmentConfigNav";
exports.SCHEDULE_PERIOD_NAV = "schedulePeriodNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitEnrollmentGroupEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitEnrollmentGroupClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new BenefitEnrollmentGroupClientAsync(configurations);
};

function BenefitEnrollmentGroupClient (configurations) {

	var API_PATH = "/odata/v2/BenefitEnrollmentGroup";

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

function BenefitEnrollmentGroupClientAsync (configurations) {

	var API_PATH = "/odata/v2/BenefitEnrollmentGroup";

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
