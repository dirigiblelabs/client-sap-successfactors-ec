var method = PersonKeyEntityBuilder.prototype;

function PersonKeyEntityBuilder() {

}

method.perPersonUuid = function(perPersonUuid) {
	this.perPersonUuid = perPersonUuid;
	return this;
};

method.personId = function(personId) {
	this.personId = personId;
	return this;
};

method.personIdExternal = function(personIdExternal) {
	this.personIdExternal = personIdExternal;
	return this;
};

method.build = function() {
	return {
		perPersonUuid: this.perPersonUuid,
		personId: this.personId,
		personIdExternal: this.personIdExternal
	};
};

module.exports = PersonKeyEntityBuilder;
