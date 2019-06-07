var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitBalanceCarryForwardEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitBalanceCarryForwardEntityBuilder");

exports.BENEFIT_BENEFIT_ID = "Benefit_benefitId";
exports.BENEFIT_EFFECTIVE_START_DATE = "Benefit_effectiveStartDate";
exports.BALANCE_CARRY_FORWARD_UPTO_NO_OF_SCHEDULE_PERIODS = "balanceCarryForwardUptoNoOfSchedulePeriods";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MAXIMUM_BALANCE_CARRY_FORWARD_AMOUNT = "maximumBalanceCarryForwardAmount";
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
exports.UPPER_LIMIT_ON_TOTAL_BALANCE_CARRY_FORWARD_AMOUNT = "upperLimitOnTotalBalanceCarryForwardAmount";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitBalanceCarryForwardEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitBalanceCarryForwardClient(configurations);
};

function BenefitBalanceCarryForwardClient (configurations) {

	var API_PATH = "/odata/v2/BenefitBalanceCarryForward";

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
