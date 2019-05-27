var method = BenefitsConfirmationStatementConfigurationEntityBuilder.prototype;

function BenefitsConfirmationStatementConfigurationEntityBuilder() {

}

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.effectiveStartDate = function(effectiveStartDate) {
	this.effectiveStartDate = effectiveStartDate;
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

method.legalEntity = function(legalEntity) {
	this.legalEntity = legalEntity;
	return this;
};

method.mdfSystemEffectiveEndDate = function(mdfSystemEffectiveEndDate) {
	this.mdfSystemEffectiveEndDate = mdfSystemEffectiveEndDate;
	return this;
};

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.templateId = function(templateId) {
	this.templateId = templateId;
	return this;
};

method.legalEntityNav = function(legalEntityNav) {
	this.legalEntityNav = legalEntityNav;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		effectiveStartDate: this.effectiveStartDate,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		legalEntity: this.legalEntity,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		templateId: this.templateId,
		legalEntityNav: this.legalEntityNav
	};
};

module.exports = BenefitsConfirmationStatementConfigurationEntityBuilder;
