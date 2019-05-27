var method = PeriodsEntityBuilder.prototype;

function PeriodsEntityBuilder() {

}

method.FiscalYearVariant_externalCode = function(FiscalYearVariant_externalCode) {
	this.FiscalYearVariant_externalCode = FiscalYearVariant_externalCode;
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

method.day = function(day) {
	this.day = day;
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

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.month = function(month) {
	this.month = month;
	return this;
};

method.period = function(period) {
	this.period = period;
	return this;
};

method.yearShift = function(yearShift) {
	this.yearShift = yearShift;
	return this;
};

method.build = function() {
	return {
		FiscalYearVariant_externalCode: this.FiscalYearVariant_externalCode,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		day: this.day,
		externalCode: this.externalCode,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		month: this.month,
		period: this.period,
		yearShift: this.yearShift
	};
};

module.exports = PeriodsEntityBuilder;
