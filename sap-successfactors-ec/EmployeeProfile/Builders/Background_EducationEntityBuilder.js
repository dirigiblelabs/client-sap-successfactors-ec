var method = Background_EducationEntityBuilder.prototype;

function Background_EducationEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.bgOrderPos = function(bgOrderPos) {
	this.bgOrderPos = bgOrderPos;
	return this;
};

method.degree = function(degree) {
	this.degree = degree;
	return this;
};

method.degreeDate = function(degreeDate) {
	this.degreeDate = degreeDate;
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

method.major = function(major) {
	this.major = major;
	return this;
};

method.school = function(school) {
	this.school = school;
	return this;
};

method.schoolAddress = function(schoolAddress) {
	this.schoolAddress = schoolAddress;
	return this;
};

method.schoolCity = function(schoolCity) {
	this.schoolCity = schoolCity;
	return this;
};

method.schoolCountry = function(schoolCountry) {
	this.schoolCountry = schoolCountry;
	return this;
};

method.schoolState = function(schoolState) {
	this.schoolState = schoolState;
	return this;
};

method.schoolType = function(schoolType) {
	this.schoolType = schoolType;
	return this;
};

method.schoolZip = function(schoolZip) {
	this.schoolZip = schoolZip;
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
		degree: this.degree,
		degreeDate: this.degreeDate,
		endDate: this.endDate,
		lastModifiedDate: this.lastModifiedDate,
		major: this.major,
		school: this.school,
		schoolAddress: this.schoolAddress,
		schoolCity: this.schoolCity,
		schoolCountry: this.schoolCountry,
		schoolState: this.schoolState,
		schoolType: this.schoolType,
		schoolZip: this.schoolZip,
		startDate: this.startDate,
		userId: this.userId
	};
};

module.exports = Background_EducationEntityBuilder;
