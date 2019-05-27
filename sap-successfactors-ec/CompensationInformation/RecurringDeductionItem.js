var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var RecurringDeductionItemEntityBuilder = require("sap-successfactors-ec/CompensationInformation/Builders/RecurringDeductionItemEntityBuilder");

exports.RECURRING_DEDUCTION_EFFECTIVE_START_DATE = "RecurringDeduction_effectiveStartDate";
exports.RECURRING_DEDUCTION_USER_SYS_ID = "RecurringDeduction_userSysId";
exports.ADDITIONAL_INFO = "additionalInfo";
exports.ADVANCE_ID = "advanceId";
exports.AMOUNT = "amount";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CURRENCY = "currency";
exports.EDIT_PERMISSION = "editPermission";
exports.END_DATE = "endDate";
exports.EQUIVALENT_AMOUNT = "equivalentAmount";
exports.FREQUENCY = "frequency";
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
exports.PAY_COMPONENT_TYPE = "payComponentType";
exports.REFERENCE_ID = "referenceId";
exports.UNIT_OF_MEASURE = "unitOfMeasure";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new RecurringDeductionItemEntityBuilder();
};

exports.getClient = function(configurations) {
	return new RecurringDeductionItemClient(configurations);
};

function RecurringDeductionItemClient (configurations) {

	var API_PATH = "/odata/v2/RecurringDeductionItem";

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
