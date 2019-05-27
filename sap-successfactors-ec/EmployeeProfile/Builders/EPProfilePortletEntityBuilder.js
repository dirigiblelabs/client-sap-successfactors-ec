var method = EPProfilePortletEntityBuilder.prototype;

function EPProfilePortletEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.dashboardId = function(dashboardId) {
	this.dashboardId = dashboardId;
	return this;
};

method.entityName = function(entityName) {
	this.entityName = entityName;
	return this;
};

method.instructionalText = function(instructionalText) {
	this.instructionalText = instructionalText;
	return this;
};

method.isEditable = function(isEditable) {
	this.isEditable = isEditable;
	return this;
};

method.isFeedbackPortlet = function(isFeedbackPortlet) {
	this.isFeedbackPortlet = isFeedbackPortlet;
	return this;
};

method.portletId = function(portletId) {
	this.portletId = portletId;
	return this;
};

method.portletLabel = function(portletLabel) {
	this.portletLabel = portletLabel;
	return this;
};

method.portletType = function(portletType) {
	this.portletType = portletType;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.build = function() {
	return {
		backgroundElementId: this.backgroundElementId,
		dashboardId: this.dashboardId,
		entityName: this.entityName,
		instructionalText: this.instructionalText,
		isEditable: this.isEditable,
		isFeedbackPortlet: this.isFeedbackPortlet,
		portletId: this.portletId,
		portletLabel: this.portletLabel,
		portletType: this.portletType,
		userId: this.userId
	};
};

module.exports = EPProfilePortletEntityBuilder;
