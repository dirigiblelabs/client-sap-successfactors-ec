var method = Background_CertificatesEntityBuilder.prototype;

function Background_CertificatesEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.bgOrderPos = function(bgOrderPos) {
	this.bgOrderPos = bgOrderPos;
	return this;
};

method.custom1 = function(custom1) {
	this.custom1 = custom1;
	return this;
};

method.description = function(description) {
	this.description = description;
	return this;
};

method.endDate = function(endDate) {
	this.endDate = endDate;
	return this;
};

method.institution = function(institution) {
	this.institution = institution;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.licenseCountry = function(licenseCountry) {
	this.licenseCountry = licenseCountry;
	return this;
};

method.licenseName = function(licenseName) {
	this.licenseName = licenseName;
	return this;
};

method.licenseNumber = function(licenseNumber) {
	this.licenseNumber = licenseNumber;
	return this;
};

method.licenseState = function(licenseState) {
	this.licenseState = licenseState;
	return this;
};

method.name = function(name) {
	this.name = name;
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

method.build = function() {
	return {
		backgroundElementId: this.backgroundElementId,
		bgOrderPos: this.bgOrderPos,
		custom1: this.custom1,
		description: this.description,
		endDate: this.endDate,
		institution: this.institution,
		lastModifiedDate: this.lastModifiedDate,
		licenseCountry: this.licenseCountry,
		licenseName: this.licenseName,
		licenseNumber: this.licenseNumber,
		licenseState: this.licenseState,
		name: this.name,
		startDate: this.startDate,
		userId: this.userId
	};
};

module.exports = Background_CertificatesEntityBuilder;
