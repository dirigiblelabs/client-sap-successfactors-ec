var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var PaymentInformationDetailV3ISREntityBuilder = require("sap-successfactors-ec/PaymentInformation/Builders/PaymentInformationDetailV3ISREntityBuilder");

exports.PAYMENT_INFORMATION_DETAIL_V3_EXTERNAL_CODE = "PaymentInformationDetailV3_externalCode";
exports.PAYMENT_INFORMATION_V3_EFFECTIVE_START_DATE = "PaymentInformationV3_effectiveStartDate";
exports.PAYMENT_INFORMATION_V3_WORKER = "PaymentInformationV3_worker";
exports.BRANCH_NAME = "branchName";
exports.BRANCH_NUMBER_CODE = "branchNumberCode";
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

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PaymentInformationDetailV3ISREntityBuilder();
};

exports.getClient = function(configurations) {
	return new PaymentInformationDetailV3ISRClient(configurations);
};

function PaymentInformationDetailV3ISRClient (configurations) {

	var API_PATH = "/odata/v2/PaymentInformationDetailV3ISR";

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
