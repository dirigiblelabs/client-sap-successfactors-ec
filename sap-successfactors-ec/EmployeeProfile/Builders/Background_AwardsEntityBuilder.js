var method = Background_AwardsEntityBuilder.prototype;

function Background_AwardsEntityBuilder() {

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

method.institution = function(institution) {
	this.institution = institution;
	return this;
};

method.issueDate = function(issueDate) {
	this.issueDate = issueDate;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.name = function(name) {
	this.name = name;
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
		institution: this.institution,
		issueDate: this.issueDate,
		lastModifiedDate: this.lastModifiedDate,
		name: this.name,
		userId: this.userId
	};
};

module.exports = Background_AwardsEntityBuilder;
