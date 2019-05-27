var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var LegalEntityUSAEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/LegalEntityUSAEntityBuilder");

exports.LEGAL_ENTITY_EFFECTIVE_START_DATE = "LegalEntity_effectiveStartDate";
exports.LEGAL_ENTITY_EXTERNAL_CODE = "LegalEntity_externalCode";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EEO_COMPANY_CODE = "eeoCompanyCode";
exports.EMPLOYER_I_D = "employerID";
exports.EXTERNAL_CODE = "externalCode";
exports.FED_RESERVE_BANK_DISTRICT = "fedReserveBankDistrict";
exports.FEDERAL_RESERVE_BANK_I_D = "federalReserveBankID";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.LEGAL_ENTITY_TYPE = "legalEntityType";
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
	return new LegalEntityUSAEntityBuilder();
};

exports.getClient = function(configurations) {
	return new LegalEntityUSAClient(configurations);
};

function LegalEntityUSAClient (configurations) {

	var API_PATH = "/odata/v2/LegalEntityUSA";

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