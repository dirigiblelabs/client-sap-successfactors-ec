var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var FiscalYearToCountryMapEntityBuilder = require("sap-successfactors-ec/IncomeTaxDeclaration/Builders/FiscalYearToCountryMapEntityBuilder");

exports.COUNTRY = "country";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EXTERNAL_CODE = "externalCode";
exports.FISCAL_YEAR_VARIANT = "fiscalYearVariant";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.FISCAL_YEAR_VARIANT_NAV = "fiscalYearVariantNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FiscalYearToCountryMapEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FiscalYearToCountryMapClient(configurations);
};

function FiscalYearToCountryMapClient (configurations) {

	var API_PATH = "/odata/v2/FiscalYearToCountryMap";

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
