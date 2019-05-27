var method = Background_FuncExperienceEntityBuilder.prototype;

function Background_FuncExperienceEntityBuilder() {

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

method.experience = function(experience) {
	this.experience = experience;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
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
		experience: this.experience,
		lastModifiedDate: this.lastModifiedDate,
		userId: this.userId,
		years: this.years
	};
};

module.exports = Background_FuncExperienceEntityBuilder;
