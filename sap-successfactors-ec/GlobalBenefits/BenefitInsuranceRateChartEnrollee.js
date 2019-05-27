var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitInsuranceRateChartEnrolleeEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitInsuranceRateChartEnrolleeEntityBuilder");

exports.BENEFIT_INSURANCE_RATE_CHART_EFFECTIVE_START_DATE = "BenefitInsuranceRateChart_effectiveStartDate";
exports.BENEFIT_INSURANCE_RATE_CHART_RATE_CHART_ID = "BenefitInsuranceRateChart_rateChartId";
exports.AGE_FROM = "ageFrom";
exports.AGE_TO = "ageTo";
exports.BENEFIT_INSURANCE_ENROLLEE_TYPE = "benefitInsuranceEnrolleeType";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EMPLOYEE_CONTRIBUTION = "employeeContribution";
exports.EMPLOYER_CONTRIBUTION = "employerContribution";
exports.EXTERNAL_CODE = "externalCode";
exports.GENDER = "gender";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_CREATED_BY = "mdfSystemCreatedBy";
exports.MDF_SYSTEM_CREATED_DATE = "mdfSystemCreatedDate";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_LAST_MODIFIED_BY = "mdfSystemLastModifiedBy";
exports.MDF_SYSTEM_LAST_MODIFIED_DATE = "mdfSystemLastModifiedDate";
exports.MDF_SYSTEM_LAST_MODIFIED_DATE_WITH_T_Z = "mdfSystemLastModifiedDateWithTZ";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.RATE_APPLICABLE_FOR = "rateApplicableFor";
exports.SMOKING = "smoking";
exports.BENEFIT_INSURANCE_ENROLLEE_TYPE_NAV = "benefitInsuranceEnrolleeTypeNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitInsuranceRateChartEnrolleeEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitInsuranceRateChartEnrolleeClient(configurations);
};

function BenefitInsuranceRateChartEnrolleeClient (configurations) {

	var API_PATH = "/odata/v2/BenefitInsuranceRateChartEnrollee";

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
