var method = Background_BenefitselectionEntityBuilder.prototype;

function Background_BenefitselectionEntityBuilder() {

}

method.backgroundElementId = function(backgroundElementId) {
	this.backgroundElementId = backgroundElementId;
	return this;
};

method.bgOrderPos = function(bgOrderPos) {
	this.bgOrderPos = bgOrderPos;
	return this;
};

method.dental = function(dental) {
	this.dental = dental;
	return this;
};

method.depdisability = function(depdisability) {
	this.depdisability = depdisability;
	return this;
};

method.depgender = function(depgender) {
	this.depgender = depgender;
	return this;
};

method.depname = function(depname) {
	this.depname = depname;
	return this;
};

method.depnationalid = function(depnationalid) {
	this.depnationalid = depnationalid;
	return this;
};

method.depsmoke = function(depsmoke) {
	this.depsmoke = depsmoke;
	return this;
};

method.depstudent = function(depstudent) {
	this.depstudent = depstudent;
	return this;
};

method.endDate = function(endDate) {
	this.endDate = endDate;
	return this;
};

method.health = function(health) {
	this.health = health;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.relation = function(relation) {
	this.relation = relation;
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
		dental: this.dental,
		depdisability: this.depdisability,
		depgender: this.depgender,
		depname: this.depname,
		depnationalid: this.depnationalid,
		depsmoke: this.depsmoke,
		depstudent: this.depstudent,
		endDate: this.endDate,
		health: this.health,
		lastModifiedDate: this.lastModifiedDate,
		relation: this.relation,
		userId: this.userId
	};
};

module.exports = Background_BenefitselectionEntityBuilder;
