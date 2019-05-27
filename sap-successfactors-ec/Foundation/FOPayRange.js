var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var FOPayRangeEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FOPayRangeEntityBuilder");

exports.COMPANY_FLX = "companyFlx";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.CURRENCY = "currency";
exports.DESCRIPTION = "description";
exports.END_DATE = "endDate";
exports.EXTERNAL_CODE = "externalCode";
exports.FREQUENCY_CODE = "frequencyCode";
exports.GEOZONE_FLX = "geozoneFlx";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.MAXIMUM_PAY = "maximumPay";
exports.MID_POINT = "midPoint";
exports.MINIMUM_PAY = "minimumPay";
exports.NAME = "name";
exports.PAY_GRADE_FLX = "payGradeFlx";
exports.START_DATE = "startDate";
exports.STATUS = "status";
exports.COMPANY_FLX_NAV = "companyFlxNav";
exports.DESCRIPTION_TRANSLATION_NAV = "descriptionTranslationNav";
exports.FREQUENCY_CODE_NAV = "frequencyCodeNav";
exports.GEOZONE_FLX_NAV = "geozoneFlxNav";
exports.NAME_TRANSLATION_NAV = "nameTranslationNav";
exports.PAY_GRADE_FLX_NAV = "payGradeFlxNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FOPayRangeEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FOPayRangeClient(configurations);
};

function FOPayRangeClient (configurations) {

	var API_PATH = "/odata/v2/FOPayRange";

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
