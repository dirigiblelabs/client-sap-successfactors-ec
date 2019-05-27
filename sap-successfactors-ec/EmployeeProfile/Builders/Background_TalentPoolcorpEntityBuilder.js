var method = Background_TalentPoolcorpEntityBuilder.prototype;

function Background_TalentPoolcorpEntityBuilder() {

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

method.startDate = function(startDate) {
	this.startDate = startDate;
	return this;
};

method.talentPoolComments = function(talentPoolComments) {
	this.talentPoolComments = talentPoolComments;
	return this;
};

method.talentPoolStatus = function(talentPoolStatus) {
	this.talentPoolStatus = talentPoolStatus;
	return this;
};

method.talentPoolitemCorp = function(talentPoolitemCorp) {
	this.talentPoolitemCorp = talentPoolitemCorp;
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
		startDate: this.startDate,
		talentPoolComments: this.talentPoolComments,
		talentPoolStatus: this.talentPoolStatus,
		talentPoolitemCorp: this.talentPoolitemCorp,
		userId: this.userId
	};
};

module.exports = Background_TalentPoolcorpEntityBuilder;
