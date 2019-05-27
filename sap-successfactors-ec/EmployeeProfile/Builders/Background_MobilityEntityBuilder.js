var method = Background_MobilityEntityBuilder.prototype;

function Background_MobilityEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.bgOrderPos = function(bgOrderPos) {
	this.bgOrderPos = bgOrderPos;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.location = function(location) {
	this.location = location;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.willingness = function(willingness) {
	this.willingness = willingness;
	return this;
};

method.build = function() {
	return {
		backgroundElementId: this.backgroundElementId,
		bgOrderPos: this.bgOrderPos,
		lastModifiedDate: this.lastModifiedDate,
		location: this.location,
		userId: this.userId,
		willingness: this.willingness
	};
};

module.exports = Background_MobilityEntityBuilder;
