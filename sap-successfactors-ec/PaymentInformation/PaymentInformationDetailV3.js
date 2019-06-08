var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var PaymentInformationDetailV3EntityBuilder = require("sap-successfactors-ec/PaymentInformation/Builders/PaymentInformationDetailV3EntityBuilder");

exports.PAYMENT_INFORMATION_V3_EFFECTIVE_START_DATE = "PaymentInformationV3_effectiveStartDate";
exports.PAYMENT_INFORMATION_V3_WORKER = "PaymentInformationV3_worker";
exports.ACCOUNT_NUMBER = "accountNumber";
exports.ACCOUNT_OWNER = "accountOwner";
exports.AMOUNT = "amount";
exports.BANK = "bank";
exports.BANK_COUNTRY = "bankCountry";
exports.BUSINESS_IDENTIFIER_CODE = "businessIdentifierCode";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CURRENCY = "currency";
exports.CUSTOM_PAY_TYPE = "customPayType";
exports.EXTERNAL_CODE = "externalCode";
exports.IBAN = "iban";
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
exports.PAY_SEQUENCE = "paySequence";
exports.PAY_TYPE = "payType";
exports.PAYMENT_METHOD = "paymentMethod";
exports.PERCENT = "percent";
exports.PURPOSE = "purpose";
exports.ROUTING_NUMBER = "routingNumber";
exports.BANK_NAV = "bankNav";
exports.PAYMENT_METHOD_NAV = "paymentMethodNav";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_A_R_G = "toPaymentInformationDetailV3ARG";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_B_R_A = "toPaymentInformationDetailV3BRA";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_C_H_L = "toPaymentInformationDetailV3CHL";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_C_O_L = "toPaymentInformationDetailV3COL";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_E_C_U = "toPaymentInformationDetailV3ECU";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_E_S_P = "toPaymentInformationDetailV3ESP";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_F_R_A = "toPaymentInformationDetailV3FRA";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_G_B_R = "toPaymentInformationDetailV3GBR";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_I_S_R = "toPaymentInformationDetailV3ISR";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_I_T_A = "toPaymentInformationDetailV3ITA";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_J_P_N = "toPaymentInformationDetailV3JPN";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_K_E_N = "toPaymentInformationDetailV3KEN";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_M_E_X = "toPaymentInformationDetailV3MEX";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_N_G_A = "toPaymentInformationDetailV3NGA";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_N_Z_L = "toPaymentInformationDetailV3NZL";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_U_S_A = "toPaymentInformationDetailV3USA";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_V_E_N = "toPaymentInformationDetailV3VEN";
exports.TO_PAYMENT_INFORMATION_DETAIL_V3_Z_A_F = "toPaymentInformationDetailV3ZAF";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PaymentInformationDetailV3EntityBuilder();
};

exports.getClient = function(configurations) {
	return new PaymentInformationDetailV3Client(configurations);
};

exports.getClientAsync = function(configurations) {
	return new PaymentInformationDetailV3ClientAsync(configurations);
};

function PaymentInformationDetailV3Client (configurations) {

	var API_PATH = "/odata/v2/PaymentInformationDetailV3";

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

function PaymentInformationDetailV3ClientAsync (configurations) {

	var API_PATH = "/odata/v2/PaymentInformationDetailV3";

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
