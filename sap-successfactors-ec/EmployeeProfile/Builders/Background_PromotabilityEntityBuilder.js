var method = Background_PromotabilityEntityBuilder.prototype;

function Background_PromotabilityEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.bgOrderPos = function(bgOrderPos) {
	this.bgOrderPos = bgOrderPos;
	return this;
};

method.comment = function(comment) {
	this.comment = comment;
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

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.build = function() {
	return {
		backgroundElementId: this.backgroundElementId,
		bgOrderPos: this.bgOrderPos,
		comment: this.comment,
		function: this.function,
		lastModifiedDate: this.lastModifiedDate,
		level: this.level,
		timeframe: this.timeframe,
		userId: this.userId
	};
};

module.exports = Background_PromotabilityEntityBuilder;
