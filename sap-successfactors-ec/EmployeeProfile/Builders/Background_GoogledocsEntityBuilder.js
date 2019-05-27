var method = Background_GoogledocsEntityBuilder.prototype;

function Background_GoogledocsEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.bgOrderPos = function(bgOrderPos) {
	this.bgOrderPos = bgOrderPos;
	return this;
};

method.documentName = function(documentName) {
	this.documentName = documentName;
	return this;
};

method.documenturl = function(documenturl) {
	this.documenturl = documenturl;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.lastmodifieddate = function(lastmodifieddate) {
	this.lastmodifieddate = lastmodifieddate;
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
		documentName: this.documentName,
		documenturl: this.documenturl,
		lastModifiedDate: this.lastModifiedDate,
		lastmodifieddate: this.lastmodifieddate,
		userId: this.userId
	};
};

module.exports = Background_GoogledocsEntityBuilder;
