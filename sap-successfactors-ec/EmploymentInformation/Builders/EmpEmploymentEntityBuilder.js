var method = EmpEmploymentEntityBuilder.prototype;

function EmpEmploymentEntityBuilder() {

}

method.StockEndDate = function(StockEndDate) {
	this.StockEndDate = StockEndDate;
	return this;
};

method.assignmentClass = function(assignmentClass) {
	this.assignmentClass = assignmentClass;
	return this;
};

method.benefitsEligibilityStartDate = function(benefitsEligibilityStartDate) {
	this.benefitsEligibilityStartDate = benefitsEligibilityStartDate;
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

method.eligibleForStock = function(eligibleForStock) {
	this.eligibleForStock = eligibleForStock;
	return this;
};

method.employeeFirstEmployment = function(employeeFirstEmployment) {
	this.employeeFirstEmployment = employeeFirstEmployment;
	return this;
};

method.endDate = function(endDate) {
	this.endDate = endDate;
	return this;
};

method.firstDateWorked = function(firstDateWorked) {
	this.firstDateWorked = firstDateWorked;
	return this;
};

method.includeAllRecords = function(includeAllRecords) {
	this.includeAllRecords = includeAllRecords;
	return this;
};

method.initialOptionGrant = function(initialOptionGrant) {
	this.initialOptionGrant = initialOptionGrant;
	return this;
};

method.initialStockGrant = function(initialStockGrant) {
	this.initialStockGrant = initialStockGrant;
	return this;
};

method.isContingentWorker = function(isContingentWorker) {
	this.isContingentWorker = isContingentWorker;
	return this;
};

method.isECRecord = function(isECRecord) {
	this.isECRecord = isECRecord;
	return this;
};

method.jobNumber = function(jobNumber) {
	this.jobNumber = jobNumber;
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

method.okToRehire = function(okToRehire) {
	this.okToRehire = okToRehire;
	return this;
};

method.originalStartDate = function(originalStartDate) {
	this.originalStartDate = originalStartDate;
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

method.prevEmployeeId = function(prevEmployeeId) {
	this.prevEmployeeId = prevEmployeeId;
	return this;
};

method.professionalServiceDate = function(professionalServiceDate) {
	this.professionalServiceDate = professionalServiceDate;
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

method.seniorityDate = function(seniorityDate) {
	this.seniorityDate = seniorityDate;
	return this;
};

method.serviceDate = function(serviceDate) {
	this.serviceDate = serviceDate;
	return this;
};

method.startDate = function(startDate) {
	this.startDate = startDate;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.empJobRelationshipNav = function(empJobRelationshipNav) {
	this.empJobRelationshipNav = empJobRelationshipNav;
	return this;
};

method.empWorkPermitNav = function(empWorkPermitNav) {
	this.empWorkPermitNav = empWorkPermitNav;
	return this;
};

method.jobInfoNav = function(jobInfoNav) {
	this.jobInfoNav = jobInfoNav;
	return this;
};

method.build = function() {
	return {
		StockEndDate: this.StockEndDate,
		assignmentClass: this.assignmentClass,
		benefitsEligibilityStartDate: this.benefitsEligibilityStartDate,
		benefitsEndDate: this.benefitsEndDate,
		bonusPayExpirationDate: this.bonusPayExpirationDate,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		eligibleForSalContinuation: this.eligibleForSalContinuation,
		eligibleForStock: this.eligibleForStock,
		employeeFirstEmployment: this.employeeFirstEmployment,
		endDate: this.endDate,
		firstDateWorked: this.firstDateWorked,
		includeAllRecords: this.includeAllRecords,
		initialOptionGrant: this.initialOptionGrant,
		initialStockGrant: this.initialStockGrant,
		isContingentWorker: this.isContingentWorker,
		isECRecord: this.isECRecord,
		jobNumber: this.jobNumber,
		lastDateWorked: this.lastDateWorked,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		okToRehire: this.okToRehire,
		originalStartDate: this.originalStartDate,
		payrollEndDate: this.payrollEndDate,
		personIdExternal: this.personIdExternal,
		prevEmployeeId: this.prevEmployeeId,
		professionalServiceDate: this.professionalServiceDate,
		regretTermination: this.regretTermination,
		salaryEndDate: this.salaryEndDate,
		seniorityDate: this.seniorityDate,
		serviceDate: this.serviceDate,
		startDate: this.startDate,
		userId: this.userId,
		empJobRelationshipNav: this.empJobRelationshipNav,
		empWorkPermitNav: this.empWorkPermitNav,
		jobInfoNav: this.jobInfoNav
	};
};

module.exports = EmpEmploymentEntityBuilder;
