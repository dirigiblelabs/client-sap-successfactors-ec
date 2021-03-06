var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var NonRecurringPaymentEntityBuilder = require("sap-successfactors-ec/EmployeeGlobalInformation/Builders/NonRecurringPaymentEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CURRENCY_CODE = "currencyCode";
exports.CURRENCY_G_O = "currencyGO";
exports.EXTERNAL_CODE = "externalCode";
exports.FORM_ID = "formId";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.NON_RECURRING_PAY_PERIOD_END_DATE = "nonRecurringPayPeriodEndDate";
exports.NON_RECURRING_PAY_PERIOD_START_DATE = "nonRecurringPayPeriodStartDate";
exports.NOTES = "notes";
exports.PAY_COMP_VALUE = "payCompValue";
exports.PAY_COMPONENT_CODE = "payComponentCode";
exports.PAY_COMPONENT_GROUP_ID = "payComponentGroupId";
exports.PAY_COMPONENT_TYPE = "payComponentType";
exports.PAY_DATE = "payDate";
exports.RECORD_STATUS = "recordStatus";
exports.SENT_TO_PAYROLL = "sentToPayroll";
exports.TAX_TREATMENT = "taxTreatment";
exports.TEMPLATE_ID = "templateId";
exports.USER_SYS_ID = "userSysId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new NonRecurringPaymentEntityBuilder();
};

exports.getClient = function(configurations) {
	return new NonRecurringPaymentClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new NonRecurringPaymentClientAsync(configurations);
};

function NonRecurringPaymentClient (configurations) {

	var API_PATH = "/odata/v2/NonRecurringPayment";

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

	this.count = function(queryParameters, options) {
		return this.client.get("/$count", queryParameters, options);
	};
}

function NonRecurringPaymentClientAsync (configurations) {

	var API_PATH = "/odata/v2/NonRecurringPayment";

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

	this.countAsync = function(callback, queryParameters, options) {
		return this.client.getAsync(callback, "/$count", queryParameters, options);
	};

	this.execute = function() {
		return this.client.execute();
	};
}

function getId(id) {
	return "('" + id + "')";
}
