var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EPProfilePortletEntityBuilder = require("sap-successfactors-ec/EmployeeProfile/Builders/EPProfilePortletEntityBuilder");

exports.BACKGROUND_ELEMENT_ID = "backgroundElementId";
exports.DASHBOARD_ID = "dashboardId";
exports.ENTITY_NAME = "entityName";
exports.INSTRUCTIONAL_TEXT = "instructionalText";
exports.IS_EDITABLE = "isEditable";
exports.IS_FEEDBACK_PORTLET = "isFeedbackPortlet";
exports.PORTLET_ID = "portletId";
exports.PORTLET_LABEL = "portletLabel";
exports.PORTLET_TYPE = "portletType";
exports.USER_ID = "userId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EPProfilePortletEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EPProfilePortletClient(configurations);
};

function EPProfilePortletClient (configurations) {

	var API_PATH = "/odata/v2/EPProfilePortlet";

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
