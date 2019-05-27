var method = BenefitOpenEnrollmentCycleConfigurationEntityBuilder.prototype;

function BenefitOpenEnrollmentCycleConfigurationEntityBuilder() {

}

method.cartWorkflowId = function(cartWorkflowId) {
	this.cartWorkflowId = cartWorkflowId;
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

method.effectiveStartDate = function(effectiveStartDate) {
	this.effectiveStartDate = effectiveStartDate;
	return this;
};

method.instructionTextURL = function(instructionTextURL) {
	this.instructionTextURL = instructionTextURL;
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

method.legalEntity = function(legalEntity) {
	this.legalEntity = legalEntity;
	return this;
};

method.mdfSystemEffectiveEndDate = function(mdfSystemEffectiveEndDate) {
	this.mdfSystemEffectiveEndDate = mdfSystemEffectiveEndDate;
	return this;
};

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.openEnrollmentId = function(openEnrollmentId) {
	this.openEnrollmentId = openEnrollmentId;
	return this;
};

method.openEnrollmentSchedule = function(openEnrollmentSchedule) {
	this.openEnrollmentSchedule = openEnrollmentSchedule;
	return this;
};

method.tncURL = function(tncURL) {
	this.tncURL = tncURL;
	return this;
};

method.benefits = function(benefits) {
	this.benefits = benefits;
	return this;
};

method.legalEntityNav = function(legalEntityNav) {
	this.legalEntityNav = legalEntityNav;
	return this;
};

method.openEnrollmentScheduleNav = function(openEnrollmentScheduleNav) {
	this.openEnrollmentScheduleNav = openEnrollmentScheduleNav;
	return this;
};

method.build = function() {
	return {
		cartWorkflowId: this.cartWorkflowId,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		effectiveStartDate: this.effectiveStartDate,
		instructionTextURL: this.instructionTextURL,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		legalEntity: this.legalEntity,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		openEnrollmentId: this.openEnrollmentId,
		openEnrollmentSchedule: this.openEnrollmentSchedule,
		tncURL: this.tncURL,
		benefits: this.benefits,
		legalEntityNav: this.legalEntityNav,
		openEnrollmentScheduleNav: this.openEnrollmentScheduleNav
	};
};

module.exports = BenefitOpenEnrollmentCycleConfigurationEntityBuilder;
