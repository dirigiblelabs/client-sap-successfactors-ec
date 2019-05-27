var method = Background_FsaelectionEntityBuilder.prototype;

function Background_FsaelectionEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.bgOrderPos = function(bgOrderPos) {
	this.bgOrderPos = bgOrderPos;
	return this;
};

method.fsabalance = function(fsabalance) {
	this.fsabalance = fsabalance;
	return this;
};

method.fsacontributions = function(fsacontributions) {
	this.fsacontributions = fsacontributions;
	return this;
};

method.fsaelectionamount = function(fsaelectionamount) {
	this.fsaelectionamount = fsaelectionamount;
	return this;
};

method.fsafundsout = function(fsafundsout) {
	this.fsafundsout = fsafundsout;
	return this;
};

method.fsaplan = function(fsaplan) {
	this.fsaplan = fsaplan;
	return this;
};

method.fsarepayment = function(fsarepayment) {
	this.fsarepayment = fsarepayment;
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
		backgroundElementId: this.backgroundElementId,
		bgOrderPos: this.bgOrderPos,
		fsabalance: this.fsabalance,
		fsacontributions: this.fsacontributions,
		fsaelectionamount: this.fsaelectionamount,
		fsafundsout: this.fsafundsout,
		fsaplan: this.fsaplan,
		fsarepayment: this.fsarepayment,
		lastModifiedDate: this.lastModifiedDate,
		userId: this.userId
	};
};

module.exports = Background_FsaelectionEntityBuilder;
