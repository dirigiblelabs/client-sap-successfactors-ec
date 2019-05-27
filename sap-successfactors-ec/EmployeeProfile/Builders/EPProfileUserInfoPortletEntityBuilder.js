var method = EPProfileUserInfoPortletEntityBuilder.prototype;

function EPProfileUserInfoPortletEntityBuilder() {

}

method.dashboardId = function(dashboardId) {
	this.dashboardId = dashboardId;
	return this;
};

method.isPII = function(isPII) {
	this.isPII = isPII;
	return this;
};

method.isWritable = function(isWritable) {
	this.isWritable = isWritable;
	return this;
};

method.portletId = function(portletId) {
	this.portletId = portletId;
	return this;
};

method.standardOrUserInfoElementId = function(standardOrUserInfoElementId) {
	this.standardOrUserInfoElementId = standardOrUserInfoElementId;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.build = function() {
	return {
		dashboardId: this.dashboardId,
		isPII: this.isPII,
		isWritable: this.isWritable,
		portletId: this.portletId,
		standardOrUserInfoElementId: this.standardOrUserInfoElementId,
		userId: this.userId
	};
};

module.exports = EPProfileUserInfoPortletEntityBuilder;
