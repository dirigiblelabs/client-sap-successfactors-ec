var method = Background_TalentPoolEntityBuilder.prototype;

function Background_TalentPoolEntityBuilder() {

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

method.talentPoolitem = function(talentPoolitem) {
	this.talentPoolitem = talentPoolitem;
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
		talentPoolitem: this.talentPoolitem,
		userId: this.userId
	};
};

module.exports = Background_TalentPoolEntityBuilder;
