var method = Background_DocumentsEntityBuilder.prototype;

function Background_DocumentsEntityBuilder() {

}

method.DocName = function(DocName) {
	this.DocName = DocName;
	return this;
};

method.attachment = function(attachment) {
	this.attachment = attachment;
	return this;
};

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
		DocName: this.DocName,
		attachment: this.attachment,
		backgroundElementId: this.backgroundElementId,
		bgOrderPos: this.bgOrderPos,
		lastModifiedDate: this.lastModifiedDate,
		userId: this.userId
	};
};

module.exports = Background_DocumentsEntityBuilder;
