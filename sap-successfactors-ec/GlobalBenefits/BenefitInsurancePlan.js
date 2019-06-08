var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitInsurancePlanEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitInsurancePlanEntityBuilder");

exports.COUNTRY = "country";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.ELIGIBILITY_RULE_FOR_COVERAGE = "eligibilityRuleForCoverage";
exports.EMPLOYEE_CONTRIBUTION = "employeeContribution";
exports.EMPLOYER_CONTRIBUTION = "employerContribution";
exports.FREQUENCY = "frequency";
exports.ID = "id";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_CREATED_BY = "mdfSystemCreatedBy";
exports.MDF_SYSTEM_CREATED_DATE = "mdfSystemCreatedDate";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
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
exports.PLAN_NAME_DE__D_E = "planName_de_DE";
exports.PLAN_NAME_DEFAULT_VALUE = "planName_defaultValue";
exports.PLAN_NAME_EN__G_B = "planName_en_GB";
exports.PLAN_NAME_EN__U_S = "planName_en_US";
exports.PLAN_NAME_ES__E_S = "planName_es_ES";
exports.PLAN_NAME_FR__F_R = "planName_fr_FR";
exports.PLAN_NAME_JA__J_P = "planName_ja_JP";
exports.PLAN_NAME_KO__K_R = "planName_ko_KR";
exports.PLAN_NAME_LOCALIZED = "planName_localized";
exports.PLAN_NAME_NL__N_L = "planName_nl_NL";
exports.PLAN_NAME_PT__B_R = "planName_pt_BR";
exports.PLAN_NAME_PT__P_T = "planName_pt_PT";
exports.PLAN_NAME_RU__R_U = "planName_ru_RU";
exports.PLAN_NAME_ZH__C_N = "planName_zh_CN";
exports.PLAN_NAME_ZH__T_W = "planName_zh_TW";
exports.PREMIUM_TYPE = "premiumType";
exports.PROVIDER = "provider";
exports.COVERAGE_OPTIONS = "coverageOptions";
exports.INSURANCE_PLAN_U_S_A = "insurancePlanUSA";
exports.PROVIDER_NAV = "providerNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitInsurancePlanEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitInsurancePlanClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new BenefitInsurancePlanClientAsync(configurations);
};

function BenefitInsurancePlanClient (configurations) {

	var API_PATH = "/odata/v2/BenefitInsurancePlan";

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

function BenefitInsurancePlanClientAsync (configurations) {

	var API_PATH = "/odata/v2/BenefitInsurancePlan";

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
