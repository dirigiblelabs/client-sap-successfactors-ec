var method = BenefitsExceptionEntityBuilder.prototype;

function BenefitsExceptionEntityBuilder() {

}

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.eventDate = function(eventDate) {
	this.eventDate = eventDate;
	return this;
};

method.exceptionCreationDate = function(exceptionCreationDate) {
	this.exceptionCreationDate = exceptionCreationDate;
	return this;
};

method.exceptionEndDate = function(exceptionEndDate) {
	this.exceptionEndDate = exceptionEndDate;
	return this;
};

method.exceptionFor = function(exceptionFor) {
	this.exceptionFor = exceptionFor;
	return this;
};

method.exceptionId = function(exceptionId) {
	this.exceptionId = exceptionId;
	return this;
};

method.exceptionName = function(exceptionName) {
	this.exceptionName = exceptionName;
	return this;
};

method.exceptionStartDate = function(exceptionStartDate) {
	this.exceptionStartDate = exceptionStartDate;
	return this;
};

method.isAutomation = function(isAutomation) {
	this.isAutomation = isAutomation;
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

method.lifeEventConfiguration = function(lifeEventConfiguration) {
	this.lifeEventConfiguration = lifeEventConfiguration;
	return this;
};

method.mdfSystemCreatedBy = function(mdfSystemCreatedBy) {
	this.mdfSystemCreatedBy = mdfSystemCreatedBy;
	return this;
};

method.mdfSystemCreatedDate = function(mdfSystemCreatedDate) {
	this.mdfSystemCreatedDate = mdfSystemCreatedDate;
	return this;
};

method.mdfSystemEffectiveEndDate = function(mdfSystemEffectiveEndDate) {
	this.mdfSystemEffectiveEndDate = mdfSystemEffectiveEndDate;
	return this;
};

method.mdfSystemEffectiveStartDate = function(mdfSystemEffectiveStartDate) {
	this.mdfSystemEffectiveStartDate = mdfSystemEffectiveStartDate;
	return this;
};

method.mdfSystemEntityId = function(mdfSystemEntityId) {
	this.mdfSystemEntityId = mdfSystemEntityId;
	return this;
};

method.mdfSystemLastModifiedBy = function(mdfSystemLastModifiedBy) {
	this.mdfSystemLastModifiedBy = mdfSystemLastModifiedBy;
	return this;
};

method.mdfSystemLastModifiedDate = function(mdfSystemLastModifiedDate) {
	this.mdfSystemLastModifiedDate = mdfSystemLastModifiedDate;
	return this;
};

method.mdfSystemLastModifiedDateWithTZ = function(mdfSystemLastModifiedDateWithTZ) {
	this.mdfSystemLastModifiedDateWithTZ = mdfSystemLastModifiedDateWithTZ;
	return this;
};

method.mdfSystemObjectType = function(mdfSystemObjectType) {
	this.mdfSystemObjectType = mdfSystemObjectType;
	return this;
};

method.mdfSystemRecordId = function(mdfSystemRecordId) {
	this.mdfSystemRecordId = mdfSystemRecordId;
	return this;
};

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.mdfSystemStatus = function(mdfSystemStatus) {
	this.mdfSystemStatus = mdfSystemStatus;
	return this;
};

method.mdfSystemTransactionSequence = function(mdfSystemTransactionSequence) {
	this.mdfSystemTransactionSequence = mdfSystemTransactionSequence;
	return this;
};

method.mdfSystemVersionId = function(mdfSystemVersionId) {
	this.mdfSystemVersionId = mdfSystemVersionId;
	return this;
};

method.newExceptionWindow = function(newExceptionWindow) {
	this.newExceptionWindow = newExceptionWindow;
	return this;
};

method.workerId = function(workerId) {
	this.workerId = workerId;
	return this;
};

method.benefitExceptionDetails = function(benefitExceptionDetails) {
	this.benefitExceptionDetails = benefitExceptionDetails;
	return this;
};

method.benefitProgramExceptionDetails = function(benefitProgramExceptionDetails) {
	this.benefitProgramExceptionDetails = benefitProgramExceptionDetails;
	return this;
};

method.lifeEventConfigurationNav = function(lifeEventConfigurationNav) {
	this.lifeEventConfigurationNav = lifeEventConfigurationNav;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		eventDate: this.eventDate,
		exceptionCreationDate: this.exceptionCreationDate,
		exceptionEndDate: this.exceptionEndDate,
		exceptionFor: this.exceptionFor,
		exceptionId: this.exceptionId,
		exceptionName: this.exceptionName,
		exceptionStartDate: this.exceptionStartDate,
		isAutomation: this.isAutomation,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		legalEntity: this.legalEntity,
		lifeEventConfiguration: this.lifeEventConfiguration,
		mdfSystemCreatedBy: this.mdfSystemCreatedBy,
		mdfSystemCreatedDate: this.mdfSystemCreatedDate,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemEffectiveStartDate: this.mdfSystemEffectiveStartDate,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemLastModifiedBy: this.mdfSystemLastModifiedBy,
		mdfSystemLastModifiedDate: this.mdfSystemLastModifiedDate,
		mdfSystemLastModifiedDateWithTZ: this.mdfSystemLastModifiedDateWithTZ,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemStatus: this.mdfSystemStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		newExceptionWindow: this.newExceptionWindow,
		workerId: this.workerId,
		benefitExceptionDetails: this.benefitExceptionDetails,
		benefitProgramExceptionDetails: this.benefitProgramExceptionDetails,
		lifeEventConfigurationNav: this.lifeEventConfigurationNav
	};
};

module.exports = BenefitsExceptionEntityBuilder;
