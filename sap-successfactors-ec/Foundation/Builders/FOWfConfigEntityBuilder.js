var method = FOWfConfigEntityBuilder.prototype;

function FOWfConfigEntityBuilder() {

}

method.actionType = function(actionType) {
	this.actionType = actionType;
	return this;
};

method.approverRole = function(approverRole) {
	this.approverRole = approverRole;
	return this;
};

method.approverType = function(approverType) {
	this.approverType = approverType;
	return this;
};

method.context = function(context) {
	this.context = context;
	return this;
};

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.createdOn = function(createdOn) {
	this.createdOn = createdOn;
	return this;
};

method.description = function(description) {
	this.description = description;
	return this;
};

method.emailConfiguration = function(emailConfiguration) {
	this.emailConfiguration = emailConfiguration;
	return this;
};

method.escalation = function(escalation) {
	this.escalation = escalation;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.futureDatedAlternateWorkflow = function(futureDatedAlternateWorkflow) {
	this.futureDatedAlternateWorkflow = futureDatedAlternateWorkflow;
	return this;
};

method.isCcLinkToApprovalPage = function(isCcLinkToApprovalPage) {
	this.isCcLinkToApprovalPage = isCcLinkToApprovalPage;
	return this;
};

method.isDelegateSupported = function(isDelegateSupported) {
	this.isDelegateSupported = isDelegateSupported;
	return this;
};

method.lastModifiedBy = function(lastModifiedBy) {
	this.lastModifiedBy = lastModifiedBy;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.lastModifiedOn = function(lastModifiedOn) {
	this.lastModifiedOn = lastModifiedOn;
	return this;
};

method.name = function(name) {
	this.name = name;
	return this;
};

method.relationshipToApprover = function(relationshipToApprover) {
	this.relationshipToApprover = relationshipToApprover;
	return this;
};

method.remindIndays = function(remindIndays) {
	this.remindIndays = remindIndays;
	return this;
};

method.respectRBP = function(respectRBP) {
	this.respectRBP = respectRBP;
	return this;
};

method.skipType = function(skipType) {
	this.skipType = skipType;
	return this;
};

method.stepNum = function(stepNum) {
	this.stepNum = stepNum;
	return this;
};

method.descriptionTranslationNav = function(descriptionTranslationNav) {
	this.descriptionTranslationNav = descriptionTranslationNav;
	return this;
};

method.futureDatedAlternateWorkflowNav = function(futureDatedAlternateWorkflowNav) {
	this.futureDatedAlternateWorkflowNav = futureDatedAlternateWorkflowNav;
	return this;
};

method.nameTranslationNav = function(nameTranslationNav) {
	this.nameTranslationNav = nameTranslationNav;
	return this;
};

method.wfStepApproverNav = function(wfStepApproverNav) {
	this.wfStepApproverNav = wfStepApproverNav;
	return this;
};

method.build = function() {
	return {
		actionType: this.actionType,
		approverRole: this.approverRole,
		approverType: this.approverType,
		context: this.context,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		description: this.description,
		emailConfiguration: this.emailConfiguration,
		escalation: this.escalation,
		externalCode: this.externalCode,
		futureDatedAlternateWorkflow: this.futureDatedAlternateWorkflow,
		isCcLinkToApprovalPage: this.isCcLinkToApprovalPage,
		isDelegateSupported: this.isDelegateSupported,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		name: this.name,
		relationshipToApprover: this.relationshipToApprover,
		remindIndays: this.remindIndays,
		respectRBP: this.respectRBP,
		skipType: this.skipType,
		stepNum: this.stepNum,
		descriptionTranslationNav: this.descriptionTranslationNav,
		futureDatedAlternateWorkflowNav: this.futureDatedAlternateWorkflowNav,
		nameTranslationNav: this.nameTranslationNav,
		wfStepApproverNav: this.wfStepApproverNav
	};
};

module.exports = FOWfConfigEntityBuilder;
