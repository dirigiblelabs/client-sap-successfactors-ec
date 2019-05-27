var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EmpPayCompNonRecurringEntityBuilder = require("sap-successfactors-ec/CompensationInformation/Builders/EmpPayCompNonRecurringEntityBuilder");

exports.ALTERNATIVE_COST_CENTER = "alternativeCostCenter";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.CURRENCY_CODE = "currencyCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.NOTES = "notes";
exports.OPERATION = "operation";
exports.PAY_COMPONENT_CODE = "payComponentCode";
exports.PAY_DATE = "payDate";
exports.USER_ID = "userId";
exports.VALUE = "value";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmpPayCompNonRecurringEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmpPayCompNonRecurringClient(configurations);
};

function EmpPayCompNonRecurringClient (configurations) {

	var API_PATH = "/odata/v2/EmpPayCompNonRecurring";

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
