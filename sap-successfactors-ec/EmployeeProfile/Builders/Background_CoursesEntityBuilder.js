var method = Background_CoursesEntityBuilder.prototype;

function Background_CoursesEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.bgOrderPos = function(bgOrderPos) {
	this.bgOrderPos = bgOrderPos;
	return this;
};

method.course = function(course) {
	this.course = course;
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

method.instructionType = function(instructionType) {
	this.instructionType = instructionType;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.length = function(length) {
	this.length = length;
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
		course: this.course,
		endDate: this.endDate,
		institution: this.institution,
		instructionType: this.instructionType,
		lastModifiedDate: this.lastModifiedDate,
		length: this.length,
		userId: this.userId
	};
};

module.exports = Background_CoursesEntityBuilder;
