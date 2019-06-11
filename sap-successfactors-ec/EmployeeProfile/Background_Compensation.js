var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var Background_CompensationEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/Background_CompensationEntityBuilder");

exports.BACKGROUND_ELEMENT_ID = "backgroundElementId";
exports.BG_ORDER_POS = "bgOrderPos";
exports.COMPA_RATIO = "compaRatio";
exports.CUR_SALARY = "curSalary";
exports.FIN_SALARY = "finSalary";
exports.JOB_TITLE = "jobTitle";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LUMP_SUM = "lumpSum";
exports.MERIT = "merit";
exports.OPTIONS = "options";
exports.PM_RATING = "pmRating";
exports.STOCK = "stock";
exports.SYS_COMP_TEMPLATE_NAME = "sysCompTemplateName";
exports.SYS_REVIEW_END_DATE = "sysReviewEndDate";
exports.SYS_REVIEW_START_DATE = "sysReviewStartDate";
exports.TOTAL_COMP = "totalComp";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new Background_CompensationEntityBuilder();
};

exports.getClient = function(configurations) {
	return new Background_CompensationClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new Background_CompensationClientAsync(configurations);
};

function Background_CompensationClient (configurations) {

	var API_PATH = "/odata/v2/Background_Compensation";

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

function Background_CompensationClientAsync (configurations) {

	var API_PATH = "/odata/v2/Background_Compensation";

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
