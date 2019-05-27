var method = BenefitProgramEntityBuilder.prototype;

function BenefitProgramEntityBuilder() {

}

method.amount = function(amount) {
	this.amount = amount;
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

method.currency = function(currency) {
	this.currency = currency;
	return this;
};

method.effectiveStartDate = function(effectiveStartDate) {
	this.effectiveStartDate = effectiveStartDate;
	return this;
};

method.eligibilityRuleId = function(eligibilityRuleId) {
	this.eligibilityRuleId = eligibilityRuleId;
	return this;
};

method.exceptionWorkflowId = function(exceptionWorkflowId) {
	this.exceptionWorkflowId = exceptionWorkflowId;
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

method.mdfSystemCreatedBy = function(mdfSystemCreatedBy) {
	this.mdfSystemCreatedBy = mdfSystemCreatedBy;
	return this;
};

method.mdfSystemCreatedDate = function(mdfSystemCreatedDate) {
	this.mdfSystemCreatedDate = mdfSystemCreatedDate;
	return this;
};

method.mdfSystemEffectiveEndDate = function(mdfSystemEffectiveEndDate) {
	this.mdfSystemEffectiveEndDate = mdfSystemEffectiveEndDate;
	return this;
};

method.mdfSystemEntityId = function(mdfSystemEntityId) {
	this.mdfSystemEntityId = mdfSystemEntityId;
	return this;
};

method.mdfSystemLastModifiedBy = function(mdfSystemLastModifiedBy) {
	this.mdfSystemLastModifiedBy = mdfSystemLastModifiedBy;
	return this;
};

method.mdfSystemLastModifiedDate = function(mdfSystemLastModifiedDate) {
	this.mdfSystemLastModifiedDate = mdfSystemLastModifiedDate;
	return this;
};

method.mdfSystemLastModifiedDateWithTZ = function(mdfSystemLastModifiedDateWithTZ) {
	this.mdfSystemLastModifiedDateWithTZ = mdfSystemLastModifiedDateWithTZ;
	return this;
};

method.mdfSystemObjectType = function(mdfSystemObjectType) {
	this.mdfSystemObjectType = mdfSystemObjectType;
	return this;
};

method.mdfSystemRecordId = function(mdfSystemRecordId) {
	this.mdfSystemRecordId = mdfSystemRecordId;
	return this;
};

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.mdfSystemStatus = function(mdfSystemStatus) {
	this.mdfSystemStatus = mdfSystemStatus;
	return this;
};

method.mdfSystemTransactionSequence = function(mdfSystemTransactionSequence) {
	this.mdfSystemTransactionSequence = mdfSystemTransactionSequence;
	return this;
};

method.mdfSystemVersionId = function(mdfSystemVersionId) {
	this.mdfSystemVersionId = mdfSystemVersionId;
	return this;
};

method.multipleSelectionAllowed = function(multipleSelectionAllowed) {
	this.multipleSelectionAllowed = multipleSelectionAllowed;
	return this;
};

method.programEnrollmentWorkflowId = function(programEnrollmentWorkflowId) {
	this.programEnrollmentWorkflowId = programEnrollmentWorkflowId;
	return this;
};

method.programId = function(programId) {
	this.programId = programId;
	return this;
};

method.programName = function(programName) {
	this.programName = programName;
	return this;
};

method.programSchedule = function(programSchedule) {
	this.programSchedule = programSchedule;
	return this;
};

method.status = function(status) {
	this.status = status;
	return this;
};

method.supressClientDateValidation = function(supressClientDateValidation) {
	this.supressClientDateValidation = supressClientDateValidation;
	return this;
};

method.benefits = function(benefits) {
	this.benefits = benefits;
	return this;
};

method.forms = function(forms) {
	this.forms = forms;
	return this;
};

method.policyDocuments = function(policyDocuments) {
	this.policyDocuments = policyDocuments;
	return this;
};

method.programScheduleNav = function(programScheduleNav) {
	this.programScheduleNav = programScheduleNav;
	return this;
};

method.usefulLinks = function(usefulLinks) {
	this.usefulLinks = usefulLinks;
	return this;
};

method.build = function() {
	return {
		amount: this.amount,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		currency: this.currency,
		effectiveStartDate: this.effectiveStartDate,
		eligibilityRuleId: this.eligibilityRuleId,
		exceptionWorkflowId: this.exceptionWorkflowId,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemCreatedBy: this.mdfSystemCreatedBy,
		mdfSystemCreatedDate: this.mdfSystemCreatedDate,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemLastModifiedBy: this.mdfSystemLastModifiedBy,
		mdfSystemLastModifiedDate: this.mdfSystemLastModifiedDate,
		mdfSystemLastModifiedDateWithTZ: this.mdfSystemLastModifiedDateWithTZ,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemStatus: this.mdfSystemStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		multipleSelectionAllowed: this.multipleSelectionAllowed,
		programEnrollmentWorkflowId: this.programEnrollmentWorkflowId,
		programId: this.programId,
		programName: this.programName,
		programSchedule: this.programSchedule,
		status: this.status,
		supressClientDateValidation: this.supressClientDateValidation,
		benefits: this.benefits,
		forms: this.forms,
		policyDocuments: this.policyDocuments,
		programScheduleNav: this.programScheduleNav,
		usefulLinks: this.usefulLinks
	};
};

module.exports = BenefitProgramEntityBuilder;
