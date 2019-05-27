var method = FOWfConfigStepApproverEntityBuilder.prototype;

function FOWfConfigStepApproverEntityBuilder() {

}

method.actionType = function(actionType) {
	this.actionType = actionType;
	return this;
};

method.approverPositionRelationship = function(approverPositionRelationship) {
	this.approverPositionRelationship = approverPositionRelationship;
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

method.emailConfiguration = function(emailConfiguration) {
	this.emailConfiguration = emailConfiguration;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
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

method.relationshipToApprover = function(relationshipToApprover) {
	this.relationshipToApprover = relationshipToApprover;
	return this;
};

method.relationshipToPosition = function(relationshipToPosition) {
	this.relationshipToPosition = relationshipToPosition;
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

method.approverDynamicRoleNav = function(approverDynamicRoleNav) {
	this.approverDynamicRoleNav = approverDynamicRoleNav;
	return this;
};

method.build = function() {
	return {
		actionType: this.actionType,
		approverPositionRelationship: this.approverPositionRelationship,
		approverRole: this.approverRole,
		approverType: this.approverType,
		context: this.context,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		emailConfiguration: this.emailConfiguration,
		externalCode: this.externalCode,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		relationshipToApprover: this.relationshipToApprover,
		relationshipToPosition: this.relationshipToPosition,
		respectRBP: this.respectRBP,
		skipType: this.skipType,
		stepNum: this.stepNum,
		approverDynamicRoleNav: this.approverDynamicRoleNav
	};
};

module.exports = FOWfConfigStepApproverEntityBuilder;
