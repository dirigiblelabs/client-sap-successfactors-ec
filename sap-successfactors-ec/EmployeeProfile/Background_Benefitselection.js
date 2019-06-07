var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var Background_BenefitselectionEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/Background_BenefitselectionEntityBuilder");

exports.BACKGROUND_ELEMENT_ID = "backgroundElementId";
exports.BG_ORDER_POS = "bgOrderPos";
exports.DENTAL = "dental";
exports.DEPDISABILITY = "depdisability";
exports.DEPGENDER = "depgender";
exports.DEPNAME = "depname";
exports.DEPNATIONALID = "depnationalid";
exports.DEPSMOKE = "depsmoke";
exports.DEPSTUDENT = "depstudent";
exports.END_DATE = "endDate";
exports.HEALTH = "health";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.RELATION = "relation";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new Background_BenefitselectionEntityBuilder();
};

exports.getClient = function(configurations) {
	return new Background_BenefitselectionClient(configurations);
};

function Background_BenefitselectionClient (configurations) {

	var API_PATH = "/odata/v2/Background_Benefitselection";

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
