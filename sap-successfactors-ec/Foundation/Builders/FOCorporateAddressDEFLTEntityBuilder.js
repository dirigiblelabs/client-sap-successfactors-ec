var method = FOCorporateAddressDEFLTEntityBuilder.prototype;

function FOCorporateAddressDEFLTEntityBuilder() {

}

method.address1 = function(address1) {
	this.address1 = address1;
	return this;
};

method.address2 = function(address2) {
	this.address2 = address2;
	return this;
};

method.address3 = function(address3) {
	this.address3 = address3;
	return this;
};

method.address4 = function(address4) {
	this.address4 = address4;
	return this;
};

method.address5 = function(address5) {
	this.address5 = address5;
	return this;
};

method.addressId = function(addressId) {
	this.addressId = addressId;
	return this;
};

method.city = function(city) {
	this.city = city;
	return this;
};

method.country = function(country) {
	this.country = country;
	return this;
};

method.county = function(county) {
	this.county = county;
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

method.createdOn = function(createdOn) {
	this.createdOn = createdOn;
	return this;
};

method.endDate = function(endDate) {
	this.endDate = endDate;
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

method.lastModifiedOn = function(lastModifiedOn) {
	this.lastModifiedOn = lastModifiedOn;
	return this;
};

method.province = function(province) {
	this.province = province;
	return this;
};

method.startDate = function(startDate) {
	this.startDate = startDate;
	return this;
};

method.state = function(state) {
	this.state = state;
	return this;
};

method.zipCode = function(zipCode) {
	this.zipCode = zipCode;
	return this;
};

method.countryNav = function(countryNav) {
	this.countryNav = countryNav;
	return this;
};

method.build = function() {
	return {
		address1: this.address1,
		address2: this.address2,
		address3: this.address3,
		address4: this.address4,
		address5: this.address5,
		addressId: this.addressId,
		city: this.city,
		country: this.country,
		county: this.county,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		endDate: this.endDate,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		province: this.province,
		startDate: this.startDate,
		state: this.state,
		zipCode: this.zipCode,
		countryNav: this.countryNav
	};
};

module.exports = FOCorporateAddressDEFLTEntityBuilder;
