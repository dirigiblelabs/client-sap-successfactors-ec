var method = Background_CompensationEntityBuilder.prototype;

function Background_CompensationEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.bgOrderPos = function(bgOrderPos) {
	this.bgOrderPos = bgOrderPos;
	return this;
};

method.compaRatio = function(compaRatio) {
	this.compaRatio = compaRatio;
	return this;
};

method.curSalary = function(curSalary) {
	this.curSalary = curSalary;
	return this;
};

method.finSalary = function(finSalary) {
	this.finSalary = finSalary;
	return this;
};

method.jobTitle = function(jobTitle) {
	this.jobTitle = jobTitle;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.lumpSum = function(lumpSum) {
	this.lumpSum = lumpSum;
	return this;
};

method.merit = function(merit) {
	this.merit = merit;
	return this;
};

method.options = function(options) {
	this.options = options;
	return this;
};

method.pmRating = function(pmRating) {
	this.pmRating = pmRating;
	return this;
};

method.stock = function(stock) {
	this.stock = stock;
	return this;
};

method.sysCompTemplateName = function(sysCompTemplateName) {
	this.sysCompTemplateName = sysCompTemplateName;
	return this;
};

method.sysReviewEndDate = function(sysReviewEndDate) {
	this.sysReviewEndDate = sysReviewEndDate;
	return this;
};

method.sysReviewStartDate = function(sysReviewStartDate) {
	this.sysReviewStartDate = sysReviewStartDate;
	return this;
};

method.totalComp = function(totalComp) {
	this.totalComp = totalComp;
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
		compaRatio: this.compaRatio,
		curSalary: this.curSalary,
		finSalary: this.finSalary,
		jobTitle: this.jobTitle,
		lastModifiedDate: this.lastModifiedDate,
		lumpSum: this.lumpSum,
		merit: this.merit,
		options: this.options,
		pmRating: this.pmRating,
		stock: this.stock,
		sysCompTemplateName: this.sysCompTemplateName,
		sysReviewEndDate: this.sysReviewEndDate,
		sysReviewStartDate: this.sysReviewStartDate,
		totalComp: this.totalComp,
		userId: this.userId
	};
};

module.exports = Background_CompensationEntityBuilder;
