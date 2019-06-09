var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var BenefitPensionStatutoryMinimumLookupEntityBuilder = require("sap-successfactors-ec/GlobalBenefits/Builders/BenefitPensionStatutoryMinimumLookupEntityBuilder");

exports.COUNTRY = "country";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EMPLOYEE_STATUTORY_MAXIMUM_AMOUNT = "employeeStatutoryMaximumAmount";
exports.EMPLOYEE_STATUTORY_MAXIMUM_PERCENTAGE = "employeeStatutoryMaximumPercentage";
exports.EMPLOYEE_STATUTORY_MINIMUM_AMOUNT = "employeeStatutoryMinimumAmount";
exports.EMPLOYEE_STATUTORY_MINIMUM_PERCENTAGE = "employeeStatutoryMinimumPercentage";
exports.EMPLOYER_STATUTORY_MAXIMUM_AMOUNT = "employerStatutoryMaximumAmount";
exports.EMPLOYER_STATUTORY_MAXIMUM_PERCENTAGE = "employerStatutoryMaximumPercentage";
exports.EMPLOYER_STATUTORY_MINIMUM_AMOUNT = "employerStatutoryMinimumAmount";
exports.EMPLOYER_STATUTORY_MINIMUM_PERCENTAGE = "employerStatutoryMinimumPercentage";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.TYPE_OF_PENSION = "typeOfPension";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new BenefitPensionStatutoryMinimumLookupEntityBuilder();
};

exports.getClient = function(configurations) {
	return new BenefitPensionStatutoryMinimumLookupClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new BenefitPensionStatutoryMinimumLookupClientAsync(configurations);
};

function BenefitPensionStatutoryMinimumLookupClient (configurations) {

	var API_PATH = "/odata/v2/BenefitPensionStatutoryMinimumLookup";

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

	this.count = function() {
		return this.client.get("/$count");
	};
}

function BenefitPensionStatutoryMinimumLookupClientAsync (configurations) {

	var API_PATH = "/odata/v2/BenefitPensionStatutoryMinimumLookup";

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
