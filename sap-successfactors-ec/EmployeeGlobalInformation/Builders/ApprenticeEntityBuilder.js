var method = ApprenticeEntityBuilder.prototype;

function ApprenticeEntityBuilder() {

}

method.activeStatus = function(activeStatus) {
	this.activeStatus = activeStatus;
	return this;
};

method.assignedAddSupervisor = function(assignedAddSupervisor) {
	this.assignedAddSupervisor = assignedAddSupervisor;
	return this;
};

method.assignedGroup = function(assignedGroup) {
	this.assignedGroup = assignedGroup;
	return this;
};

method.assignedSchool = function(assignedSchool) {
	this.assignedSchool = assignedSchool;
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

method.endDate = function(endDate) {
	this.endDate = endDate;
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

method.name = function(name) {
	this.name = name;
	return this;
};

method.note = function(note) {
	this.note = note;
	return this;
};

method.startDate = function(startDate) {
	this.startDate = startDate;
	return this;
};

method.user = function(user) {
	this.user = user;
	return this;
};

method.year = function(year) {
	this.year = year;
	return this;
};

method.assignedGroupNav = function(assignedGroupNav) {
	this.assignedGroupNav = assignedGroupNav;
	return this;
};

method.assignedSchoolNav = function(assignedSchoolNav) {
	this.assignedSchoolNav = assignedSchoolNav;
	return this;
};

method.build = function() {
	return {
		activeStatus: this.activeStatus,
		assignedAddSupervisor: this.assignedAddSupervisor,
		assignedGroup: this.assignedGroup,
		assignedSchool: this.assignedSchool,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		endDate: this.endDate,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		name: this.name,
		note: this.note,
		startDate: this.startDate,
		user: this.user,
		year: this.year,
		assignedGroupNav: this.assignedGroupNav,
		assignedSchoolNav: this.assignedSchoolNav
	};
};

module.exports = ApprenticeEntityBuilder;
