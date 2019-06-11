var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var AdvancesEligibilityEntityBuilder = require("sap-successfactors-ec/Advances/Builders/AdvancesEligibilityEntityBuilder");

exports.ADVANCE_TYPE = "advanceType";
exports.BASE_PAY_COMPONENT = "basePayComponent";
exports.BASE_PAY_COMPONENT_GROUP = "basePayComponentGroup";
exports.CALCULATION_PERCENTAGE_ON = "calculationPercentageOn";
exports.COMPANY = "company";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CURRENCY = "currency";
exports.CURRENCY_G_O = "currencyGO";
exports.DAY_OF_DEDUCTION = "dayOfDeduction";
exports.DEDUCTION_DATE_FORMAT = "deductionDateFormat";
exports.DEDUCTION_PAY_COMP_O_T_D = "deductionPayCompOTD";
exports.DEDUCTION_PAY_COMP_R_D = "deductionPayCompRD";
exports.DEFAULT_WORKFLOW = "defaultWorkflow";
exports.DEPARTMENT = "department";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EFFECTIVE_STATUS = "effectiveStatus";
exports.ELIGIBILITY_AMOUNT = "eligibilityAmount";
exports.ENABLE_AUTO_RECOVERY = "enableAutoRecovery";
exports.EXCEPTION_FOR_NUMBER_OF_INSTALLMENTS = "exceptionForNumberOfInstallments";
exports.EXCEPTION_FOR_REQUESTED_AMOUNT = "exceptionForRequestedAmount";
exports.EXCEPTION_WORKFLOW = "exceptionWorkflow";
exports.EXTERNAL_CODE = "externalCode";
exports.EXTERNAL_NAME = "externalName";
exports.FIRST_OCCURENCE_START_DATE = "firstOccurenceStartDate";
exports.INSTALLMENT_AMOUNT = "installmentAmount";
exports.INSTALLMENT_FREQUENCY = "installmentFrequency";
exports.INTEREST_RATE = "interestRate";
exports.INTEREST_TYPE = "interestType";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MAXIMUM_ELIGIBILITY_AMOUNT = "maximumEligibilityAmount";
exports.MDF_SYSTEM_CREATED_BY = "mdfSystemCreatedBy";
exports.MDF_SYSTEM_CREATED_DATE = "mdfSystemCreatedDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_LAST_MODIFIED_BY = "mdfSystemLastModifiedBy";
exports.MDF_SYSTEM_LAST_MODIFIED_DATE = "mdfSystemLastModifiedDate";
exports.MDF_SYSTEM_LAST_MODIFIED_DATE_WITH_T_Z = "mdfSystemLastModifiedDateWithTZ";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.MONTH_DATE = "monthDate";
exports.NUMBER_OF_INSTALLMENTS = "numberOfInstallments";
exports.NUMBER_OF_INSTALLMENTS_EDITABLE_BY_EMPLOYEE = "numberOfInstallmentsEditableByEmployee";
exports.NUMBER_OF_OCCURENCES = "numberOfOccurences";
exports.OCCURANCE_OF_DAY = "occuranceOfDay";
exports.PAY_COMPONENT_TYPE = "payComponentType";
exports.PAYGRADE = "paygrade";
exports.PERIOD_END_DATE = "periodEndDate";
exports.PERIOD_START_DATE = "periodStartDate";
exports.RECOVERY_MODE = "recoveryMode";
exports.RECOVERY_MODE_EDITABLE_BY_EMPLOYEE = "recoveryModeEditableByEmployee";
exports.UNIT_OF_PERIOD = "unitOfPeriod";
exports.VALIDITY_PERIOD = "validityPeriod";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new AdvancesEligibilityEntityBuilder();
};

exports.getClient = function(configurations) {
	return new AdvancesEligibilityClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new AdvancesEligibilityClientAsync(configurations);
};

function AdvancesEligibilityClient (configurations) {

	var API_PATH = "/odata/v2/AdvancesEligibility";

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

function AdvancesEligibilityClientAsync (configurations) {

	var API_PATH = "/odata/v2/AdvancesEligibility";

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
