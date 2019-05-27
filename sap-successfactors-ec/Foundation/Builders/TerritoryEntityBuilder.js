var method = TerritoryEntityBuilder.prototype;

function TerritoryEntityBuilder() {

}

method.territoryCode = function(territoryCode) {
	this.territoryCode = territoryCode;
	return this;
};

method.territoryName = function(territoryName) {
	this.territoryName = territoryName;
	return this;
};

method.build = function() {
	return {
		territoryCode: this.territoryCode,
		territoryName: this.territoryName
	};
};

module.exports = TerritoryEntityBuilder;
