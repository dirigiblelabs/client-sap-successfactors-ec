var Client = require("sap/Client");
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

function Background_CompensationClient (configurations) {

	var API_PATH = "/odata/v2/Background_Compensation";

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

function getId(id) {
	return "('" + id + "')";
}
