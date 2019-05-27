var method = ApprenticeSchoolEntityBuilder.prototype;

function ApprenticeSchoolEntityBuilder() {

}

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
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

method.schoolContactPerson = function(schoolContactPerson) {
	this.schoolContactPerson = schoolContactPerson;
	return this;
};

method.schoolDescription = function(schoolDescription) {
	this.schoolDescription = schoolDescription;
	return this;
};

method.schoolLocation = function(schoolLocation) {
	this.schoolLocation = schoolLocation;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		externalCode: this.externalCode,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		schoolContactPerson: this.schoolContactPerson,
		schoolDescription: this.schoolDescription,
		schoolLocation: this.schoolLocation
	};
};

module.exports = ApprenticeSchoolEntityBuilder;
