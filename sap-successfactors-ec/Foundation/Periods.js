var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var PeriodsEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/PeriodsEntityBuilder");

exports.FISCAL_YEAR_VARIANT_EXTERNAL_CODE = "FiscalYearVariant_externalCode";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DAY = "day";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MONTH = "month";
exports.PERIOD = "period";
exports.YEAR_SHIFT = "yearShift";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PeriodsEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PeriodsClient(configurations);
};

function PeriodsClient (configurations) {

	var API_PATH = "/odata/v2/Periods";

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
