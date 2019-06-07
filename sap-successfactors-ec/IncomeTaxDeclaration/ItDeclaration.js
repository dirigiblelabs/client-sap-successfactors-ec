var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var ItDeclarationEntityBuilder = require("sap-successfactors-ec/IncomeTaxDeclaration/Builders/ItDeclarationEntityBuilder");

exports.AMOUNT = "amount";
exports.APPROVAL_STATUS = "approvalStatus";
exports.CATEGORY = "category";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CURRENCY_CODE = "currencyCode";
exports.DECLARATION_TYPE = "declarationType";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EXTERNAL_CODE = "externalCode";
exports.EXTERNAL_NAME = "externalName";
exports.FISCAL_YEAR = "fiscalYear";
exports.IT_DECL_INVESTMENT_TYPE = "itDeclInvestmentType";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.POSTING_DATE = "postingDate";
exports.TYPE = "type";
exports.USER_SYS_ID = "userSysId";
exports.USER_SYS_ID_COPY = "userSysIdCopy";
exports.IT_DECL_INVESTMENT_TYPE_NAV = "itDeclInvestmentTypeNav";
exports.TYPE_NAV = "typeNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new ItDeclarationEntityBuilder();
};

exports.getClient = function(configurations) {
	return new ItDeclarationClient(configurations);
};

function ItDeclarationClient (configurations) {

	var API_PATH = "/odata/v2/ItDeclaration";

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
