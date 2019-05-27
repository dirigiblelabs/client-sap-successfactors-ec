var method = Background_LeadExperienceEntityBuilder.prototype;

function Background_LeadExperienceEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.bgOrderPos = function(bgOrderPos) {
	this.bgOrderPos = bgOrderPos;
	return this;
};

method.comments = function(comments) {
	this.comments = comments;
	return this;
};

method.dollars = function(dollars) {
	this.dollars = dollars;
	return this;
};

method.experience = function(experience) {
	this.experience = experience;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.people = function(people) {
	this.people = people;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.years = function(years) {
	this.years = years;
	return this;
};

method.build = function() {
	return {
		backgroundElementId: this.backgroundElementId,
		bgOrderPos: this.bgOrderPos,
		comments: this.comments,
		dollars: this.dollars,
		experience: this.experience,
		lastModifiedDate: this.lastModifiedDate,
		people: this.people,
		userId: this.userId,
		years: this.years
	};
};

module.exports = Background_LeadExperienceEntityBuilder;
