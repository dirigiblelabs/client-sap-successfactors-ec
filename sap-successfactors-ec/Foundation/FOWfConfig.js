var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var FOWfConfigEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FOWfConfigEntityBuilder");

exports.ACTION_TYPE = "actionType";
exports.APPROVER_ROLE = "approverRole";
exports.APPROVER_TYPE = "approverType";
exports.CONTEXT = "context";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.DESCRIPTION = "description";
exports.EMAIL_CONFIGURATION = "emailConfiguration";
exports.ESCALATION = "escalation";
exports.EXTERNAL_CODE = "externalCode";
exports.FUTURE_DATED_ALTERNATE_WORKFLOW = "futureDatedAlternateWorkflow";
exports.IS_CC_LINK_TO_APPROVAL_PAGE = "isCcLinkToApprovalPage";
exports.IS_DELEGATE_SUPPORTED = "isDelegateSupported";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.NAME = "name";
exports.RELATIONSHIP_TO_APPROVER = "relationshipToApprover";
exports.REMIND_INDAYS = "remindIndays";
exports.RESPECT_R_B_P = "respectRBP";
exports.SKIP_TYPE = "skipType";
exports.STEP_NUM = "stepNum";
exports.DESCRIPTION_TRANSLATION_NAV = "descriptionTranslationNav";
exports.FUTURE_DATED_ALTERNATE_WORKFLOW_NAV = "futureDatedAlternateWorkflowNav";
exports.NAME_TRANSLATION_NAV = "nameTranslationNav";
exports.WF_STEP_APPROVER_NAV = "wfStepApproverNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FOWfConfigEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FOWfConfigClient(configurations);
};

function FOWfConfigClient (configurations) {

	var API_PATH = "/odata/v2/FOWfConfig";

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
