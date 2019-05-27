var method = TimeAccountDetailEntityBuilder.prototype;

function TimeAccountDetailEntityBuilder() {

}

method.TimeAccount_externalCode = function(TimeAccount_externalCode) {
	this.TimeAccount_externalCode = TimeAccount_externalCode;
	return this;
};

method.accrualPeriodId = function(accrualPeriodId) {
	this.accrualPeriodId = accrualPeriodId;
	return this;
};

method.advanced = function(advanced) {
	this.advanced = advanced;
	return this;
};

method.bookingAmount = function(bookingAmount) {
	this.bookingAmount = bookingAmount;
	return this;
};

method.bookingDate = function(bookingDate) {
	this.bookingDate = bookingDate;
	return this;
};

method.bookingType = function(bookingType) {
	this.bookingType = bookingType;
	return this;
};

method.bookingUnit = function(bookingUnit) {
	this.bookingUnit = bookingUnit;
	return this;
};

method.calendarEntry = function(calendarEntry) {
	this.calendarEntry = calendarEntry;
	return this;
};

method.changeCalendar = function(changeCalendar) {
	this.changeCalendar = changeCalendar;
	return this;
};

method.comment = function(comment) {
	this.comment = comment;
	return this;
};

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDate = function(createdDate) {
	this.createdDate = createdDate;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.employeeTime = function(employeeTime) {
	this.employeeTime = employeeTime;
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

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.lastModifiedDateWithTZ = function(lastModifiedDateWithTZ) {
	this.lastModifiedDateWithTZ = lastModifiedDateWithTZ;
	return this;
};

method.mdfSystemEffectiveEndDate = function(mdfSystemEffectiveEndDate) {
	this.mdfSystemEffectiveEndDate = mdfSystemEffectiveEndDate;
	return this;
};

method.mdfSystemEffectiveStartDate = function(mdfSystemEffectiveStartDate) {
	this.mdfSystemEffectiveStartDate = mdfSystemEffectiveStartDate;
	return this;
};

method.mdfSystemEntityId = function(mdfSystemEntityId) {
	this.mdfSystemEntityId = mdfSystemEntityId;
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

method.payoutAccrualSeparated = function(payoutAccrualSeparated) {
	this.payoutAccrualSeparated = payoutAccrualSeparated;
	return this;
};

method.referenceObject = function(referenceObject) {
	this.referenceObject = referenceObject;
	return this;
};

method.calendarEntryNav = function(calendarEntryNav) {
	this.calendarEntryNav = calendarEntryNav;
	return this;
};

method.employeeTimeNav = function(employeeTimeNav) {
	this.employeeTimeNav = employeeTimeNav;
	return this;
};

method.build = function() {
	return {
		TimeAccount_externalCode: this.TimeAccount_externalCode,
		accrualPeriodId: this.accrualPeriodId,
		advanced: this.advanced,
		bookingAmount: this.bookingAmount,
		bookingDate: this.bookingDate,
		bookingType: this.bookingType,
		bookingUnit: this.bookingUnit,
		calendarEntry: this.calendarEntry,
		changeCalendar: this.changeCalendar,
		comment: this.comment,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		employeeTime: this.employeeTime,
		externalCode: this.externalCode,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedDateWithTZ: this.lastModifiedDateWithTZ,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemEffectiveStartDate: this.mdfSystemEffectiveStartDate,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemStatus: this.mdfSystemStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		payoutAccrualSeparated: this.payoutAccrualSeparated,
		referenceObject: this.referenceObject,
		calendarEntryNav: this.calendarEntryNav,
		employeeTimeNav: this.employeeTimeNav
	};
};

module.exports = TimeAccountDetailEntityBuilder;
