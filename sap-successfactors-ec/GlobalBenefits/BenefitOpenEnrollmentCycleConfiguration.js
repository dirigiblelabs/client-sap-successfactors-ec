var Client = require("sap/Client");
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

function BenefitOpenEnrollmentCycleConfigurationClient (configurations) {

	var API_PATH = "/odata/v2/BenefitOpenEnrollmentCycleConfiguration";

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
