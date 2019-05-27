var method = BadgeTemplatesEntityBuilder.prototype;

function BadgeTemplatesEntityBuilder() {

}

method.badgeId = function(badgeId) {
	this.badgeId = badgeId;
	return this;
};

method.badgeTitle = function(badgeTitle) {
	this.badgeTitle = badgeTitle;
	return this;
};

method.customBadge = function(customBadge) {
	this.customBadge = customBadge;
	return this;
};

method.photo = function(photo) {
	this.photo = photo;
	return this;
};

method.build = function() {
	return {
		badgeId: this.badgeId,
		badgeTitle: this.badgeTitle,
		customBadge: this.customBadge,
		photo: this.photo
	};
};

module.exports = BadgeTemplatesEntityBuilder;
