var method = PayrollSystemConfigurationEntityBuilder.prototype;

function PayrollSystemConfigurationEntityBuilder() {

}

method.country = function(country) {
	this.country = country;
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

method.enableBsi = function(enableBsi) {
	this.enableBsi = enableBsi;
	return this;
};

method.enableEnhancedValidationsForProduction = function(enableEnhancedValidationsForProduction) {
	this.enableEnhancedValidationsForProduction = enableEnhancedValidationsForProduction;
	return this;
};

method.enablePayStatement = function(enablePayStatement) {
	this.enablePayStatement = enablePayStatement;
	return this;
};

method.enablePayrollUiIntegration = function(enablePayrollUiIntegration) {
	this.enablePayrollUiIntegration = enablePayrollUiIntegration;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.externalName = function(externalName) {
	this.externalName = externalName;
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

method.payrollSystemClientId = function(payrollSystemClientId) {
	this.payrollSystemClientId = payrollSystemClientId;
	return this;
};

method.payrollSystemUrl = function(payrollSystemUrl) {
	this.payrollSystemUrl = payrollSystemUrl;
	return this;
};

method.status = function(status) {
	this.status = status;
	return this;
};

method.thirdPartyIdpUrl = function(thirdPartyIdpUrl) {
	this.thirdPartyIdpUrl = thirdPartyIdpUrl;
	return this;
};

method.categories = function(categories) {
	this.categories = categories;
	return this;
};

method.build = function() {
	return {
		country: this.country,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		enableBsi: this.enableBsi,
		enableEnhancedValidationsForProduction: this.enableEnhancedValidationsForProduction,
		enablePayStatement: this.enablePayStatement,
		enablePayrollUiIntegration: this.enablePayrollUiIntegration,
		externalCode: this.externalCode,
		externalName: this.externalName,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		payrollSystemClientId: this.payrollSystemClientId,
		payrollSystemUrl: this.payrollSystemUrl,
		status: this.status,
		thirdPartyIdpUrl: this.thirdPartyIdpUrl,
		categories: this.categories
	};
};

module.exports = PayrollSystemConfigurationEntityBuilder;
