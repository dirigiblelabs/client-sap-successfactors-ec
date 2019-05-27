var method = Background_OutsideWorkExperienceEntityBuilder.prototype;

function Background_OutsideWorkExperienceEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.bgOrderPos = function(bgOrderPos) {
	this.bgOrderPos = bgOrderPos;
	return this;
};

method.businessType = function(businessType) {
	this.businessType = businessType;
	return this;
};

method.employer = function(employer) {
	this.employer = employer;
	return this;
};

method.employerAddress = function(employerAddress) {
	this.employerAddress = employerAddress;
	return this;
};

method.employerCity = function(employerCity) {
	this.employerCity = employerCity;
	return this;
};

method.employerContact = function(employerContact) {
	this.employerContact = employerContact;
	return this;
};

method.employerCountry = function(employerCountry) {
	this.employerCountry = employerCountry;
	return this;
};

method.employerEmail = function(employerEmail) {
	this.employerEmail = employerEmail;
	return this;
};

method.employerPhone = function(employerPhone) {
	this.employerPhone = employerPhone;
	return this;
};

method.employerState = function(employerState) {
	this.employerState = employerState;
	return this;
};

method.employerZip = function(employerZip) {
	this.employerZip = employerZip;
	return this;
};

method.endDate = function(endDate) {
	this.endDate = endDate;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.presentEmployer = function(presentEmployer) {
	this.presentEmployer = presentEmployer;
	return this;
};

method.startDate = function(startDate) {
	this.startDate = startDate;
	return this;
};

method.startTitle = function(startTitle) {
	this.startTitle = startTitle;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.build = function() {
	return {
		backgroundElementId: this.backgroundElementId,
		bgOrderPos: this.bgOrderPos,
		businessType: this.businessType,
		employer: this.employer,
		employerAddress: this.employerAddress,
		employerCity: this.employerCity,
		employerContact: this.employerContact,
		employerCountry: this.employerCountry,
		employerEmail: this.employerEmail,
		employerPhone: this.employerPhone,
		employerState: this.employerState,
		employerZip: this.employerZip,
		endDate: this.endDate,
		lastModifiedDate: this.lastModifiedDate,
		presentEmployer: this.presentEmployer,
		startDate: this.startDate,
		startTitle: this.startTitle,
		userId: this.userId
	};
};

module.exports = Background_OutsideWorkExperienceEntityBuilder;
