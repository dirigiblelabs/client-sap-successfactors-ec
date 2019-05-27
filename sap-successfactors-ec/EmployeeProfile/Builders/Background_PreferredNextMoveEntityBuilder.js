var method = Background_PreferredNextMoveEntityBuilder.prototype;

function Background_PreferredNextMoveEntityBuilder() {

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

method.function = function(function) {
	this.function = function;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.level = function(level) {
	this.level = level;
	return this;
};

method.timeframe = function(timeframe) {
	this.timeframe = timeframe;
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
		comments: this.comments,
		function: this.function,
		lastModifiedDate: this.lastModifiedDate,
		level: this.level,
		timeframe: this.timeframe,
		title: this.title,
		userId: this.userId
	};
};

module.exports = Background_PreferredNextMoveEntityBuilder;
