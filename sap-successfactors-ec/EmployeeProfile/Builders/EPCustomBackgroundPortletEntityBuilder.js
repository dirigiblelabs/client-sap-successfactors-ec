var method = EPCustomBackgroundPortletEntityBuilder.prototype;

function EPCustomBackgroundPortletEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.backgroundPropertyLists = function(backgroundPropertyLists) {
	this.backgroundPropertyLists = backgroundPropertyLists;
	return this;
};

method.editable = function(editable) {
	this.editable = editable;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.viewable = function(viewable) {
	this.viewable = viewable;
	return this;
};

method.build = function() {
	return {
		backgroundElementId: this.backgroundElementId,
		backgroundPropertyLists: this.backgroundPropertyLists,
		editable: this.editable,
		userId: this.userId,
		viewable: this.viewable
	};
};

module.exports = EPCustomBackgroundPortletEntityBuilder;
