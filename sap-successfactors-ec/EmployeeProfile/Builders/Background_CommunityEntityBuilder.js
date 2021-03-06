var method = Background_CommunityEntityBuilder.prototype;

function Background_CommunityEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.bgOrderPos = function(bgOrderPos) {
	this.bgOrderPos = bgOrderPos;
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

method.name = function(name) {
	this.name = name;
	return this;
};

method.role = function(role) {
	this.role = role;
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
		endDate: this.endDate,
		lastModifiedDate: this.lastModifiedDate,
		name: this.name,
		role: this.role,
		startDate: this.startDate,
		userId: this.userId
	};
};

module.exports = Background_CommunityEntityBuilder;
