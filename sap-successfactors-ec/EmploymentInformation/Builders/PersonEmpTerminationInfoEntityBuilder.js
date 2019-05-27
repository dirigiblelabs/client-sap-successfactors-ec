var method = PersonEmpTerminationInfoEntityBuilder.prototype;

function PersonEmpTerminationInfoEntityBuilder() {

}

method.activeEmploymentsCount = function(activeEmploymentsCount) {
	this.activeEmploymentsCount = activeEmploymentsCount;
	return this;
};

method.latestTerminationDate = function(latestTerminationDate) {
	this.latestTerminationDate = latestTerminationDate;
	return this;
};

method.personIdExternal = function(personIdExternal) {
	this.personIdExternal = personIdExternal;
	return this;
};

method.build = function() {
	return {
		activeEmploymentsCount: this.activeEmploymentsCount,
		latestTerminationDate: this.latestTerminationDate,
		personIdExternal: this.personIdExternal
	};
};

module.exports = PersonEmpTerminationInfoEntityBuilder;
