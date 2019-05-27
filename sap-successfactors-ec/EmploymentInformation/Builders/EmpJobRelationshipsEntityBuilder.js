var method = EmpJobRelationshipsEntityBuilder.prototype;

function EmpJobRelationshipsEntityBuilder() {

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

method.lastModifiedOn = function(lastModifiedOn) {
	this.lastModifiedOn = lastModifiedOn;
	return this;
};

method.operation = function(operation) {
	this.operation = operation;
	return this;
};

method.relUserId = function(relUserId) {
	this.relUserId = relUserId;
	return this;
};

method.relationshipType = function(relationshipType) {
	this.relationshipType = relationshipType;
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

method.employmentNav = function(employmentNav) {
	this.employmentNav = employmentNav;
	return this;
};

method.relEmploymentNav = function(relEmploymentNav) {
	this.relEmploymentNav = relEmploymentNav;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		endDate: this.endDate,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		operation: this.operation,
		relUserId: this.relUserId,
		relationshipType: this.relationshipType,
		startDate: this.startDate,
		userId: this.userId,
		employmentNav: this.employmentNav,
		relEmploymentNav: this.relEmploymentNav
	};
};

module.exports = EmpJobRelationshipsEntityBuilder;
