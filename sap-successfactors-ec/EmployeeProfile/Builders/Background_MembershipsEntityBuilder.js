var method = Background_MembershipsEntityBuilder.prototype;

function Background_MembershipsEntityBuilder() {

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

method.organization = function(organization) {
	this.organization = organization;
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
		organization: this.organization,
		role: this.role,
		startDate: this.startDate,
		userId: this.userId
	};
};

module.exports = Background_MembershipsEntityBuilder;
