var method = Background_InsideWorkExperienceEntityBuilder.prototype;

function Background_InsideWorkExperienceEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.bgOrderPos = function(bgOrderPos) {
	this.bgOrderPos = bgOrderPos;
	return this;
};

method.department = function(department) {
	this.department = department;
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

method.startDate = function(startDate) {
	this.startDate = startDate;
	return this;
};

method.title = function(title) {
	this.title = title;
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
		department: this.department,
		endDate: this.endDate,
		lastModifiedDate: this.lastModifiedDate,
		startDate: this.startDate,
		title: this.title,
		userId: this.userId
	};
};

module.exports = Background_InsideWorkExperienceEntityBuilder;
