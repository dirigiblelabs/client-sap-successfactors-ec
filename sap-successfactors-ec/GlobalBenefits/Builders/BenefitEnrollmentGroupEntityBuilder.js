var method = BenefitEnrollmentGroupEntityBuilder.prototype;

function BenefitEnrollmentGroupEntityBuilder() {

}

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.effectiveEndDate = function(effectiveEndDate) {
	this.effectiveEndDate = effectiveEndDate;
	return this;
};

method.effectiveStartDate = function(effectiveStartDate) {
	this.effectiveStartDate = effectiveStartDate;
	return this;
};

method.id = function(id) {
	this.id = id;
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

method.openEnrollmentConfig = function(openEnrollmentConfig) {
	this.openEnrollmentConfig = openEnrollmentConfig;
	return this;
};

method.recordStatus = function(recordStatus) {
	this.recordStatus = recordStatus;
	return this;
};

method.schedulePeriod = function(schedulePeriod) {
	this.schedulePeriod = schedulePeriod;
	return this;
};

method.workerId = function(workerId) {
	this.workerId = workerId;
	return this;
};

method.benefitEnrollments = function(benefitEnrollments) {
	this.benefitEnrollments = benefitEnrollments;
	return this;
};

method.openEnrollmentConfigNav = function(openEnrollmentConfigNav) {
	this.openEnrollmentConfigNav = openEnrollmentConfigNav;
	return this;
};

method.schedulePeriodNav = function(schedulePeriodNav) {
	this.schedulePeriodNav = schedulePeriodNav;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		effectiveEndDate: this.effectiveEndDate,
		effectiveStartDate: this.effectiveStartDate,
		id: this.id,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		openEnrollmentConfig: this.openEnrollmentConfig,
		recordStatus: this.recordStatus,
		schedulePeriod: this.schedulePeriod,
		workerId: this.workerId,
		benefitEnrollments: this.benefitEnrollments,
		openEnrollmentConfigNav: this.openEnrollmentConfigNav,
		schedulePeriodNav: this.schedulePeriodNav
	};
};

module.exports = BenefitEnrollmentGroupEntityBuilder;
