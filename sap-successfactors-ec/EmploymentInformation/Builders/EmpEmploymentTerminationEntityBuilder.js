var method = EmpEmploymentTerminationEntityBuilder.prototype;

function EmpEmploymentTerminationEntityBuilder() {

}

method.StockEndDate = function(StockEndDate) {
	this.StockEndDate = StockEndDate;
	return this;
};

method.attachmentId = function(attachmentId) {
	this.attachmentId = attachmentId;
	return this;
};

method.benefitsEndDate = function(benefitsEndDate) {
	this.benefitsEndDate = benefitsEndDate;
	return this;
};

method.bonusPayExpirationDate = function(bonusPayExpirationDate) {
	this.bonusPayExpirationDate = bonusPayExpirationDate;
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

method.eligibleForSalContinuation = function(eligibleForSalContinuation) {
	this.eligibleForSalContinuation = eligibleForSalContinuation;
	return this;
};

method.endDate = function(endDate) {
	this.endDate = endDate;
	return this;
};

method.eventReason = function(eventReason) {
	this.eventReason = eventReason;
	return this;
};

method.lastDateWorked = function(lastDateWorked) {
	this.lastDateWorked = lastDateWorked;
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

method.newMainEmploymentId = function(newMainEmploymentId) {
	this.newMainEmploymentId = newMainEmploymentId;
	return this;
};

method.notes = function(notes) {
	this.notes = notes;
	return this;
};

method.okToRehire = function(okToRehire) {
	this.okToRehire = okToRehire;
	return this;
};

method.payrollEndDate = function(payrollEndDate) {
	this.payrollEndDate = payrollEndDate;
	return this;
};

method.personIdExternal = function(personIdExternal) {
	this.personIdExternal = personIdExternal;
	return this;
};

method.regretTermination = function(regretTermination) {
	this.regretTermination = regretTermination;
	return this;
};

method.salaryEndDate = function(salaryEndDate) {
	this.salaryEndDate = salaryEndDate;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.employmentNav = function(employmentNav) {
	this.employmentNav = employmentNav;
	return this;
};

method.jobInfoNav = function(jobInfoNav) {
	this.jobInfoNav = jobInfoNav;
	return this;
};

method.build = function() {
	return {
		StockEndDate: this.StockEndDate,
		attachmentId: this.attachmentId,
		benefitsEndDate: this.benefitsEndDate,
		bonusPayExpirationDate: this.bonusPayExpirationDate,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		eligibleForSalContinuation: this.eligibleForSalContinuation,
		endDate: this.endDate,
		eventReason: this.eventReason,
		lastDateWorked: this.lastDateWorked,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		newMainEmploymentId: this.newMainEmploymentId,
		notes: this.notes,
		okToRehire: this.okToRehire,
		payrollEndDate: this.payrollEndDate,
		personIdExternal: this.personIdExternal,
		regretTermination: this.regretTermination,
		salaryEndDate: this.salaryEndDate,
		userId: this.userId,
		employmentNav: this.employmentNav,
		jobInfoNav: this.jobInfoNav
	};
};

module.exports = EmpEmploymentTerminationEntityBuilder;
