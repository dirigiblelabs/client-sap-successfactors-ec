var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitEmployeeClaimDetailEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitEmployeeClaimDetailEntityBuilder");

exports.BENEFIT_EMPLOYEE_CLAIM_ID = "BenefitEmployeeClaim_id";
exports.AMOUNT = "amount";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CURRENCY = "currency";
exports.CUST_PATIENT_NAME = "cust_patientName";
exports.CUST_RECEIPT_DATE = "cust_receiptDate";
exports.CUST_RECEIPT_DATE2 = "cust_receiptDate2";
exports.CUST_RECEIPT_NO = "cust_receiptNo";
exports.CUST_RELATIONSHIP = "cust_relationship";
exports.DESCRIPTION = "description";
exports.ID = "id";
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

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitEmployeeClaimDetailEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitEmployeeClaimDetailClient(configurations);
};

function BenefitEmployeeClaimDetailClient (configurations) {

	var API_PATH = "/odata/v2/BenefitEmployeeClaimDetail";

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
