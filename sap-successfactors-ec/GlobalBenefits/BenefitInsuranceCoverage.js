var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitInsuranceCoverageEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitInsuranceCoverageEntityBuilder");

exports.AMOUNT = "amount";
exports.BASE_PAY_COMPONENT_GROUP = "basePayComponentGroup";
exports.BENEFIT_SALARY_AMOUNT = "benefitSalaryAmount";
exports.BENEFIT_SALARY_CALCULATION_RULE = "benefitSalaryCalculationRule";
exports.COVERAGE_ID = "coverageId";
exports.COVERAGE_LEVEL = "coverageLevel";
exports.COVERAGE_NAME_DE__D_E = "coverageName_de_DE";
exports.COVERAGE_NAME_DEFAULT_VALUE = "coverageName_defaultValue";
exports.COVERAGE_NAME_EN__G_B = "coverageName_en_GB";
exports.COVERAGE_NAME_EN__U_S = "coverageName_en_US";
exports.COVERAGE_NAME_ES__E_S = "coverageName_es_ES";
exports.COVERAGE_NAME_FR__F_R = "coverageName_fr_FR";
exports.COVERAGE_NAME_JA__J_P = "coverageName_ja_JP";
exports.COVERAGE_NAME_KO__K_R = "coverageName_ko_KR";
exports.COVERAGE_NAME_LOCALIZED = "coverageName_localized";
exports.COVERAGE_NAME_NL__N_L = "coverageName_nl_NL";
exports.COVERAGE_NAME_PT__B_R = "coverageName_pt_BR";
exports.COVERAGE_NAME_PT__P_T = "coverageName_pt_PT";
exports.COVERAGE_NAME_RU__R_U = "coverageName_ru_RU";
exports.COVERAGE_NAME_ZH__C_N = "coverageName_zh_CN";
exports.COVERAGE_NAME_ZH__T_W = "coverageName_zh_TW";
exports.COVERAGE_ROUNDING_RULE = "coverageRoundingRule";
exports.COVERAGE_TYPE = "coverageType";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.FACTOR = "factor";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MAXIMUM_COVERAGE_AMOUNT = "maximumCoverageAmount";
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
exports.MINIMUM_COVERAGE_AMOUNT = "minimumCoverageAmount";
exports.PAYCOMPONENT = "paycomponent";
exports.PERCENTAGE = "percentage";
exports.ROUNDED_COVERAGE_AMOUNT = "roundedCoverageAmount";
exports.TO_COVERAGE_DETAILS = "toCoverageDetails";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitInsuranceCoverageEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitInsuranceCoverageClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new BenefitInsuranceCoverageClientAsync(configurations);
};

function BenefitInsuranceCoverageClient (configurations) {

	var API_PATH = "/odata/v2/BenefitInsuranceCoverage";

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

	this.count = function() {
		return this.client.get("/$count");
	};
}

function BenefitInsuranceCoverageClientAsync (configurations) {

	var API_PATH = "/odata/v2/BenefitInsuranceCoverage";

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
