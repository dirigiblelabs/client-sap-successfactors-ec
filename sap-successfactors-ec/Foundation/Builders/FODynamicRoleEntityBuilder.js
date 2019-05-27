var method = FODynamicRoleEntityBuilder.prototype;

function FODynamicRoleEntityBuilder() {

}

method.businessUnit = function(businessUnit) {
	this.businessUnit = businessUnit;
	return this;
};

method.company = function(company) {
	this.company = company;
	return this;
};

method.costCenter = function(costCenter) {
	this.costCenter = costCenter;
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

method.department = function(department) {
	this.department = department;
	return this;
};

method.description = function(description) {
	this.description = description;
	return this;
};

method.division = function(division) {
	this.division = division;
	return this;
};

method.dynamicGroup = function(dynamicGroup) {
	this.dynamicGroup = dynamicGroup;
	return this;
};

method.dynamicRoleAssignmentId = function(dynamicRoleAssignmentId) {
	this.dynamicRoleAssignmentId = dynamicRoleAssignmentId;
	return this;
};

method.eventReason = function(eventReason) {
	this.eventReason = eventReason;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.jobCode = function(jobCode) {
	this.jobCode = jobCode;
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

method.location = function(location) {
	this.location = location;
	return this;
};

method.name = function(name) {
	this.name = name;
	return this;
};

method.payGrade = function(payGrade) {
	this.payGrade = payGrade;
	return this;
};

method.payGroup = function(payGroup) {
	this.payGroup = payGroup;
	return this;
};

method.person = function(person) {
	this.person = person;
	return this;
};

method.position = function(position) {
	this.position = position;
	return this;
};

method.resolverType = function(resolverType) {
	this.resolverType = resolverType;
	return this;
};

method.businessUnitNav = function(businessUnitNav) {
	this.businessUnitNav = businessUnitNav;
	return this;
};

method.companyNav = function(companyNav) {
	this.companyNav = companyNav;
	return this;
};

method.costCenterNav = function(costCenterNav) {
	this.costCenterNav = costCenterNav;
	return this;
};

method.departmentNav = function(departmentNav) {
	this.departmentNav = departmentNav;
	return this;
};

method.descriptionTranslationNav = function(descriptionTranslationNav) {
	this.descriptionTranslationNav = descriptionTranslationNav;
	return this;
};

method.divisionNav = function(divisionNav) {
	this.divisionNav = divisionNav;
	return this;
};

method.eventReasonNav = function(eventReasonNav) {
	this.eventReasonNav = eventReasonNav;
	return this;
};

method.jobCodeNav = function(jobCodeNav) {
	this.jobCodeNav = jobCodeNav;
	return this;
};

method.locationNav = function(locationNav) {
	this.locationNav = locationNav;
	return this;
};

method.nameTranslationNav = function(nameTranslationNav) {
	this.nameTranslationNav = nameTranslationNav;
	return this;
};

method.payGradeNav = function(payGradeNav) {
	this.payGradeNav = payGradeNav;
	return this;
};

method.payGroupNav = function(payGroupNav) {
	this.payGroupNav = payGroupNav;
	return this;
};

method.build = function() {
	return {
		businessUnit: this.businessUnit,
		company: this.company,
		costCenter: this.costCenter,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		department: this.department,
		description: this.description,
		division: this.division,
		dynamicGroup: this.dynamicGroup,
		dynamicRoleAssignmentId: this.dynamicRoleAssignmentId,
		eventReason: this.eventReason,
		externalCode: this.externalCode,
		jobCode: this.jobCode,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		location: this.location,
		name: this.name,
		payGrade: this.payGrade,
		payGroup: this.payGroup,
		person: this.person,
		position: this.position,
		resolverType: this.resolverType,
		businessUnitNav: this.businessUnitNav,
		companyNav: this.companyNav,
		costCenterNav: this.costCenterNav,
		departmentNav: this.departmentNav,
		descriptionTranslationNav: this.descriptionTranslationNav,
		divisionNav: this.divisionNav,
		eventReasonNav: this.eventReasonNav,
		jobCodeNav: this.jobCodeNav,
		locationNav: this.locationNav,
		nameTranslationNav: this.nameTranslationNav,
		payGradeNav: this.payGradeNav,
		payGroupNav: this.payGroupNav
	};
};

module.exports = FODynamicRoleEntityBuilder;
