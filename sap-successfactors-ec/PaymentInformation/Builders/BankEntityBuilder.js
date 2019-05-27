var method = BankEntityBuilder.prototype;

function BankEntityBuilder() {

}

method.bankBranch = function(bankBranch) {
	this.bankBranch = bankBranch;
	return this;
};

method.bankCountry = function(bankCountry) {
	this.bankCountry = bankCountry;
	return this;
};

method.bankName = function(bankName) {
	this.bankName = bankName;
	return this;
};

method.businessIdentifierCode = function(businessIdentifierCode) {
	this.businessIdentifierCode = businessIdentifierCode;
	return this;
};

method.city = function(city) {
	this.city = city;
	return this;
};

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.effectiveStatus = function(effectiveStatus) {
	this.effectiveStatus = effectiveStatus;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.lastModifiedBy = function(lastModifiedBy) {
	this.lastModifiedBy = lastModifiedBy;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.postalCode = function(postalCode) {
	this.postalCode = postalCode;
	return this;
};

method.routingNumber = function(routingNumber) {
	this.routingNumber = routingNumber;
	return this;
};

method.street = function(street) {
	this.street = street;
	return this;
};

method.build = function() {
	return {
		bankBranch: this.bankBranch,
		bankCountry: this.bankCountry,
		bankName: this.bankName,
		businessIdentifierCode: this.businessIdentifierCode,
		city: this.city,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		effectiveStatus: this.effectiveStatus,
		externalCode: this.externalCode,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		postalCode: this.postalCode,
		routingNumber: this.routingNumber,
		street: this.street
	};
};

module.exports = BankEntityBuilder;
