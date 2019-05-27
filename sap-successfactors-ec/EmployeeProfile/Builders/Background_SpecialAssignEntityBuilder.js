var method = Background_SpecialAssignEntityBuilder.prototype;

function Background_SpecialAssignEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.bgOrderPos = function(bgOrderPos) {
	this.bgOrderPos = bgOrderPos;
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

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.project = function(project) {
	this.project = project;
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
		description: this.description,
		endDate: this.endDate,
		lastModifiedDate: this.lastModifiedDate,
		project: this.project,
		startDate: this.startDate,
		userId: this.userId
	};
};

module.exports = Background_SpecialAssignEntityBuilder;
