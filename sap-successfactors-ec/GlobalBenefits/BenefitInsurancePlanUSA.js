var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitInsurancePlanUSAEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitInsurancePlanUSAEntityBuilder");

exports.BENEFIT_INSURANCE_PLAN_EFFECTIVE_START_DATE = "BenefitInsurancePlan_effectiveStartDate";
exports.BENEFIT_INSURANCE_PLAN_ID = "BenefitInsurancePlan_id";
exports.COBRA_RELEVANT = "cobraRelevant";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.ID = "id";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitInsurancePlanUSAEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitInsurancePlanUSAClient(configurations);
};

function BenefitInsurancePlanUSAClient (configurations) {

	var API_PATH = "/odata/v2/BenefitInsurancePlanUSA";

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
