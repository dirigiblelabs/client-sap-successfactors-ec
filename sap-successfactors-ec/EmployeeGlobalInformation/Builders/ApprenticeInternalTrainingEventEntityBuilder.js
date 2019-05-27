var method = ApprenticeInternalTrainingEventEntityBuilder.prototype;

function ApprenticeInternalTrainingEventEntityBuilder() {

}

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

method.endDateAndTime = function(endDateAndTime) {
	this.endDateAndTime = endDateAndTime;
	return this;
};

method.eventName = function(eventName) {
	this.eventName = eventName;
	return this;
};

method.eventType = function(eventType) {
	this.eventType = eventType;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.isAllDayEvent = function(isAllDayEvent) {
	this.isAllDayEvent = isAllDayEvent;
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

method.learningItem = function(learningItem) {
	this.learningItem = learningItem;
	return this;
};

method.location = function(location) {
	this.location = location;
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

method.note = function(note) {
	this.note = note;
	return this;
};

method.shareStatus = function(shareStatus) {
	this.shareStatus = shareStatus;
	return this;
};

method.startDateAndTime = function(startDateAndTime) {
	this.startDateAndTime = startDateAndTime;
	return this;
};

method.assignedApprentices = function(assignedApprentices) {
	this.assignedApprentices = assignedApprentices;
	return this;
};

method.eventTypeNav = function(eventTypeNav) {
	this.eventTypeNav = eventTypeNav;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		endDateAndTime: this.endDateAndTime,
		eventName: this.eventName,
		eventType: this.eventType,
		externalCode: this.externalCode,
		isAllDayEvent: this.isAllDayEvent,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedDateWithTZ: this.lastModifiedDateWithTZ,
		learningItem: this.learningItem,
		location: this.location,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemEffectiveStartDate: this.mdfSystemEffectiveStartDate,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemStatus: this.mdfSystemStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		note: this.note,
		shareStatus: this.shareStatus,
		startDateAndTime: this.startDateAndTime,
		assignedApprentices: this.assignedApprentices,
		eventTypeNav: this.eventTypeNav
	};
};

module.exports = ApprenticeInternalTrainingEventEntityBuilder;
