var method = UserBadgesEntityBuilder.prototype;

function UserBadgesEntityBuilder() {

}

method.badgeCreatorName = function(badgeCreatorName) {
	this.badgeCreatorName = badgeCreatorName;
	return this;
};

method.badgeId = function(badgeId) {
	this.badgeId = badgeId;
	return this;
};

method.badgeInstanceId = function(badgeInstanceId) {
	this.badgeInstanceId = badgeInstanceId;
	return this;
};

method.badgeTitle = function(badgeTitle) {
	this.badgeTitle = badgeTitle;
	return this;
};

method.comment = function(comment) {
	this.comment = comment;
	return this;
};

method.creatorUserID = function(creatorUserID) {
	this.creatorUserID = creatorUserID;
	return this;
};

method.lastModified = function(lastModified) {
	this.lastModified = lastModified;
	return this;
};

method.photo = function(photo) {
	this.photo = photo;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.build = function() {
	return {
		badgeCreatorName: this.badgeCreatorName,
		badgeId: this.badgeId,
		badgeInstanceId: this.badgeInstanceId,
		badgeTitle: this.badgeTitle,
		comment: this.comment,
		creatorUserID: this.creatorUserID,
		lastModified: this.lastModified,
		photo: this.photo,
		userId: this.userId
	};
};

module.exports = UserBadgesEntityBuilder;
