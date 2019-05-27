var method = Background_SysScoreCardDevelopmentObjectivesPortletEntityBuilder.prototype;

function Background_SysScoreCardDevelopmentObjectivesPortletEntityBuilder() {

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

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.build = function() {
	return {
		backgroundElementId: this.backgroundElementId,
		bgOrderPos: this.bgOrderPos,
		lastModifiedDate: this.lastModifiedDate,
		userId: this.userId
	};
};

module.exports = Background_SysScoreCardDevelopmentObjectivesPortletEntityBuilder;
