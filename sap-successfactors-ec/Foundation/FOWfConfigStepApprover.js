var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var FOWfConfigStepApproverEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FOWfConfigStepApproverEntityBuilder");

exports.ACTION_TYPE = "actionType";
exports.APPROVER_POSITION_RELATIONSHIP = "approverPositionRelationship";
exports.APPROVER_ROLE = "approverRole";
exports.APPROVER_TYPE = "approverType";
exports.CONTEXT = "context";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EMAIL_CONFIGURATION = "emailConfiguration";
exports.EXTERNAL_CODE = "externalCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.RELATIONSHIP_TO_APPROVER = "relationshipToApprover";
exports.RELATIONSHIP_TO_POSITION = "relationshipToPosition";
exports.RESPECT_R_B_P = "respectRBP";
exports.SKIP_TYPE = "skipType";
exports.STEP_NUM = "stepNum";
exports.APPROVER_DYNAMIC_ROLE_NAV = "approverDynamicRoleNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FOWfConfigStepApproverEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FOWfConfigStepApproverClient(configurations);
};

function FOWfConfigStepApproverClient (configurations) {

	var API_PATH = "/odata/v2/FOWfConfigStepApprover";

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
