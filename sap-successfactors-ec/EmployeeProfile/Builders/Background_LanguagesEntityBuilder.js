var method = Background_LanguagesEntityBuilder.prototype;

function Background_LanguagesEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.bgOrderPos = function(bgOrderPos) {
	this.bgOrderPos = bgOrderPos;
	return this;
};

method.language = function(language) {
	this.language = language;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.readingProf = function(readingProf) {
	this.readingProf = readingProf;
	return this;
};

method.speakingProf = function(speakingProf) {
	this.speakingProf = speakingProf;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.variant = function(variant) {
	this.variant = variant;
	return this;
};

method.writingProf = function(writingProf) {
	this.writingProf = writingProf;
	return this;
};

method.build = function() {
	return {
		backgroundElementId: this.backgroundElementId,
		bgOrderPos: this.bgOrderPos,
		language: this.language,
		lastModifiedDate: this.lastModifiedDate,
		readingProf: this.readingProf,
		speakingProf: this.speakingProf,
		userId: this.userId,
		variant: this.variant,
		writingProf: this.writingProf
	};
};

module.exports = Background_LanguagesEntityBuilder;
