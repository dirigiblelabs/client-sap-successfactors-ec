var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var AdvancesAccumulationEntityBuilder = require("sap-successfactors-ec/Advances/Builders/AdvancesAccumulationEntityBuilder");

exports.ACCUMULATED_AMOUNT = "accumulatedAmount";
exports.ADVANCE_TYPE = "advanceType";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CURRENCY = "currency";
exports.CURRENCY_G_O = "currencyGO";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.NUMBER_OF_OCCURANCES = "numberOfOccurances";
exports.PERIOD_END_DATE = "periodEndDate";
exports.PERIOD_START_DATE = "periodStartDate";
exports.REMAINING_ELIGIBLE_AMOUNT = "remainingEligibleAmount";
exports.REMAINING_NUMBER_OF_OCCURANCES = "remainingNumberOfOccurances";
exports.USER_SYS_ID = "userSysId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new AdvancesAccumulationEntityBuilder();
};

exports.getClient = function(configurations) {
	return new AdvancesAccumulationClient(configurations);
};

function AdvancesAccumulationClient (configurations) {

	var API_PATH = "/odata/v2/AdvancesAccumulation";

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
