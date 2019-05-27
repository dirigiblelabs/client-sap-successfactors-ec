var method = FOEventReasonEntityBuilder.prototype;

function FOEventReasonEntityBuilder() {

}

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

method.description = function(description) {
	this.description = description;
	return this;
};

method.emplStatus = function(emplStatus) {
	this.emplStatus = emplStatus;
	return this;
};

method.endDate = function(endDate) {
	this.endDate = endDate;
	return this;
};

method.event = function(event) {
	this.event = event;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.implicitPositionAction = function(implicitPositionAction) {
	this.implicitPositionAction = implicitPositionAction;
	return this;
};

method.includeInWorkExperience = function(includeInWorkExperience) {
	this.includeInWorkExperience = includeInWorkExperience;
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

method.name = function(name) {
	this.name = name;
	return this;
};

method.payrollEvent = function(payrollEvent) {
	this.payrollEvent = payrollEvent;
	return this;
};

method.startDate = function(startDate) {
	this.startDate = startDate;
	return this;
};

method.status = function(status) {
	this.status = status;
	return this;
};

method.descriptionTranslationNav = function(descriptionTranslationNav) {
	this.descriptionTranslationNav = descriptionTranslationNav;
	return this;
};

method.nameTranslationNav = function(nameTranslationNav) {
	this.nameTranslationNav = nameTranslationNav;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		description: this.description,
		emplStatus: this.emplStatus,
		endDate: this.endDate,
		event: this.event,
		externalCode: this.externalCode,
		implicitPositionAction: this.implicitPositionAction,
		includeInWorkExperience: this.includeInWorkExperience,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		name: this.name,
		payrollEvent: this.payrollEvent,
		startDate: this.startDate,
		status: this.status,
		descriptionTranslationNav: this.descriptionTranslationNav,
		nameTranslationNav: this.nameTranslationNav
	};
};

module.exports = FOEventReasonEntityBuilder;
