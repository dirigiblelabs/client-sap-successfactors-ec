var method = EPProfileViewEntityBuilder.prototype;

function EPProfileViewEntityBuilder() {

}

method.dashboardId = function(dashboardId) {
	this.dashboardId = dashboardId;
	return this;
};

method.dashboardTitle = function(dashboardTitle) {
	this.dashboardTitle = dashboardTitle;
	return this;
};

method.dashboardType = function(dashboardType) {
	this.dashboardType = dashboardType;
	return this;
};

method.liveProfilePhotoPermission = function(liveProfilePhotoPermission) {
	this.liveProfilePhotoPermission = liveProfilePhotoPermission;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.build = function() {
	return {
		dashboardId: this.dashboardId,
		dashboardTitle: this.dashboardTitle,
		dashboardType: this.dashboardType,
		liveProfilePhotoPermission: this.liveProfilePhotoPermission,
		userId: this.userId
	};
};

module.exports = EPProfileViewEntityBuilder;
