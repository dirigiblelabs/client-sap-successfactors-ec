var method = PerPersonEntityBuilder.prototype;

function PerPersonEntityBuilder() {

}

method.birthName = function(birthName) {
	this.birthName = birthName;
	return this;
};

method.countryOfBirth = function(countryOfBirth) {
	this.countryOfBirth = countryOfBirth;
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

method.dateOfBirth = function(dateOfBirth) {
	this.dateOfBirth = dateOfBirth;
	return this;
};

method.includeAllRecords = function(includeAllRecords) {
	this.includeAllRecords = includeAllRecords;
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

method.perPersonUuid = function(perPersonUuid) {
	this.perPersonUuid = perPersonUuid;
	return this;
};

method.personId = function(personId) {
	this.personId = personId;
	return this;
};

method.personIdExternal = function(personIdExternal) {
	this.personIdExternal = personIdExternal;
	return this;
};

method.regionOfBirth = function(regionOfBirth) {
	this.regionOfBirth = regionOfBirth;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.emailNav = function(emailNav) {
	this.emailNav = emailNav;
	return this;
};

method.emergencyContactNav = function(emergencyContactNav) {
	this.emergencyContactNav = emergencyContactNav;
	return this;
};

method.homeAddressNavDEFLT = function(homeAddressNavDEFLT) {
	this.homeAddressNavDEFLT = homeAddressNavDEFLT;
	return this;
};

method.nationalIdNav = function(nationalIdNav) {
	this.nationalIdNav = nationalIdNav;
	return this;
};

method.personRerlationshipNav = function(personRerlationshipNav) {
	this.personRerlationshipNav = personRerlationshipNav;
	return this;
};

method.personalInfoNav = function(personalInfoNav) {
	this.personalInfoNav = personalInfoNav;
	return this;
};

method.phoneNav = function(phoneNav) {
	this.phoneNav = phoneNav;
	return this;
};

method.socialAccountNav = function(socialAccountNav) {
	this.socialAccountNav = socialAccountNav;
	return this;
};

method.build = function() {
	return {
		birthName: this.birthName,
		countryOfBirth: this.countryOfBirth,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		dateOfBirth: this.dateOfBirth,
		includeAllRecords: this.includeAllRecords,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		perPersonUuid: this.perPersonUuid,
		personId: this.personId,
		personIdExternal: this.personIdExternal,
		regionOfBirth: this.regionOfBirth,
		userId: this.userId,
		emailNav: this.emailNav,
		emergencyContactNav: this.emergencyContactNav,
		homeAddressNavDEFLT: this.homeAddressNavDEFLT,
		nationalIdNav: this.nationalIdNav,
		personRerlationshipNav: this.personRerlationshipNav,
		personalInfoNav: this.personalInfoNav,
		phoneNav: this.phoneNav,
		socialAccountNav: this.socialAccountNav
	};
};

module.exports = PerPersonEntityBuilder;
