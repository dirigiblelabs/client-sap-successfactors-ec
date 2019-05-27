var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var PaymentInformationDetailV3COLEntityBuilder = require("sap-successfactors-ec/PaymentInformation/Builders/PaymentInformationDetailV3COLEntityBuilder");

exports.PAYMENT_INFORMATION_DETAIL_V3_EXTERNAL_CODE = "PaymentInformationDetailV3_externalCode";
exports.PAYMENT_INFORMATION_V3_EFFECTIVE_START_DATE = "PaymentInformationV3_effectiveStartDate";
exports.PAYMENT_INFORMATION_V3_WORKER = "PaymentInformationV3_worker";
exports.ACCOUNT_TYPE = "accountType";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
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
exports.NEW_ACCOUNT_ID_TYPE = "newAccountIdType";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PaymentInformationDetailV3COLEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PaymentInformationDetailV3COLClient(configurations);
};

function PaymentInformationDetailV3COLClient (configurations) {

	var API_PATH = "/odata/v2/PaymentInformationDetailV3COL";

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