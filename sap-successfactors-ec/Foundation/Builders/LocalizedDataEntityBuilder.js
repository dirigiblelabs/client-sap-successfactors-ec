var method = LocalizedDataEntityBuilder.prototype;

function LocalizedDataEntityBuilder() {

}

method.localizedDataCode = function(localizedDataCode) {
	this.localizedDataCode = localizedDataCode;
	return this;
};

method.localizedDataLocale = function(localizedDataLocale) {
	this.localizedDataLocale = localizedDataLocale;
	return this;
};

method.localizedDataTranslation = function(localizedDataTranslation) {
	this.localizedDataTranslation = localizedDataTranslation;
	return this;
};

method.build = function() {
	return {
		localizedDataCode: this.localizedDataCode,
		localizedDataLocale: this.localizedDataLocale,
		localizedDataTranslation: this.localizedDataTranslation
	};
};

module.exports = LocalizedDataEntityBuilder;
