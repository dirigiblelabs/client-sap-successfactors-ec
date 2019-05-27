var Client = require("sap/Client");
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

function NonRecurringPaymentClient (configurations) {

	var API_PATH = "/odata/v2/NonRecurringPayment";

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
