var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitOpenEnrollmentCycleConfigurationEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitOpenEnrollmentCycleConfigurationEntityBuilder");

exports.CART_WORKFLOW_ID = "cartWorkflowId";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.INSTRUCTION_TEXT_U_R_L = "instructionTextURL";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LEGAL_ENTITY = "legalEntity";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.OPEN_ENROLLMENT_ID = "openEnrollmentId";
exports.OPEN_ENROLLMENT_SCHEDULE = "openEnrollmentSchedule";
exports.TNC_U_R_L = "tncURL";
exports.BENEFITS = "benefits";
exports.LEGAL_ENTITY_NAV = "legalEntityNav";
exports.OPEN_ENROLLMENT_SCHEDULE_NAV = "openEnrollmentScheduleNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitOpenEnrollmentCycleConfigurationEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitOpenEnrollmentCycleConfigurationClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new BenefitOpenEnrollmentCycleConfigurationClientAsync(configurations);
};

function BenefitOpenEnrollmentCycleConfigurationClient (configurations) {

	var API_PATH = "/odata/v2/BenefitOpenEnrollmentCycleConfiguration";

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

function BenefitOpenEnrollmentCycleConfigurationClientAsync (configurations) {

	var API_PATH = "/odata/v2/BenefitOpenEnrollmentCycleConfiguration";

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
