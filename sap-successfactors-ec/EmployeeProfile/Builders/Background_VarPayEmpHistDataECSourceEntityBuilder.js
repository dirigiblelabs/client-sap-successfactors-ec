var method = Background_VarPayEmpHistDataECSourceEntityBuilder.prototype;

function Background_VarPayEmpHistDataECSourceEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.basis = function(basis) {
	this.basis = basis;
	return this;
};

method.country = function(country) {
	this.country = country;
	return this;
};

method.currencyCode = function(currencyCode) {
	this.currencyCode = currencyCode;
	return this;
};

method.department = function(department) {
	this.department = department;
	return this;
};

method.division = function(division) {
	this.division = division;
	return this;
};

method.endDate = function(endDate) {
	this.endDate = endDate;
	return this;
};

method.jobCode = function(jobCode) {
	this.jobCode = jobCode;
	return this;
};

method.jobTitle = function(jobTitle) {
	this.jobTitle = jobTitle;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.location = function(location) {
	this.location = location;
	return this;
};

method.payGrade = function(payGrade) {
	this.payGrade = payGrade;
	return this;
};

method.recordType = function(recordType) {
	this.recordType = recordType;
	return this;
};

method.salary = function(salary) {
	this.salary = salary;
	return this;
};

method.startDate = function(startDate) {
	this.startDate = startDate;
	return this;
};

method.tgtPct = function(tgtPct) {
	this.tgtPct = tgtPct;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.varPayProgramName = function(varPayProgramName) {
	this.varPayProgramName = varPayProgramName;
	return this;
};

method.build = function() {
	return {
		backgroundElementId: this.backgroundElementId,
		basis: this.basis,
		country: this.country,
		currencyCode: this.currencyCode,
		department: this.department,
		division: this.division,
		endDate: this.endDate,
		jobCode: this.jobCode,
		jobTitle: this.jobTitle,
		lastModifiedDate: this.lastModifiedDate,
		location: this.location,
		payGrade: this.payGrade,
		recordType: this.recordType,
		salary: this.salary,
		startDate: this.startDate,
		tgtPct: this.tgtPct,
		userId: this.userId,
		varPayProgramName: this.varPayProgramName
	};
};

module.exports = Background_VarPayEmpHistDataECSourceEntityBuilder;
