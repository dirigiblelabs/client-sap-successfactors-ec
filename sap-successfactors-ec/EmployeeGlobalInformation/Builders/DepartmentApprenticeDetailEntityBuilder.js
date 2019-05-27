var method = DepartmentApprenticeDetailEntityBuilder.prototype;

function DepartmentApprenticeDetailEntityBuilder() {

}

method.Department_effectiveStartDate = function(Department_effectiveStartDate) {
	this.Department_effectiveStartDate = Department_effectiveStartDate;
	return this;
};

method.Department_externalCode = function(Department_externalCode) {
	this.Department_externalCode = Department_externalCode;
	return this;
};

method.apprenticeDepartmentLocation = function(apprenticeDepartmentLocation) {
	this.apprenticeDepartmentLocation = apprenticeDepartmentLocation;
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

method.decentralTrainerUserId = function(decentralTrainerUserId) {
	this.decentralTrainerUserId = decentralTrainerUserId;
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

method.maxNumberOfApprentices = function(maxNumberOfApprentices) {
	this.maxNumberOfApprentices = maxNumberOfApprentices;
	return this;
};

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.note = function(note) {
	this.note = note;
	return this;
};

method.build = function() {
	return {
		Department_effectiveStartDate: this.Department_effectiveStartDate,
		Department_externalCode: this.Department_externalCode,
		apprenticeDepartmentLocation: this.apprenticeDepartmentLocation,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		decentralTrainerUserId: this.decentralTrainerUserId,
		externalCode: this.externalCode,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		maxNumberOfApprentices: this.maxNumberOfApprentices,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		note: this.note
	};
};

module.exports = DepartmentApprenticeDetailEntityBuilder;
