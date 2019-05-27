var method = BenefitProgramEnrollmentEntityBuilder.prototype;

function BenefitProgramEnrollmentEntityBuilder() {

}

method.benefitProgram = function(benefitProgram) {
	this.benefitProgram = benefitProgram;
	return this;
};

method.benefitProgramDataSource = function(benefitProgramDataSource) {
	this.benefitProgramDataSource = benefitProgramDataSource;
	return this;
};

method.benefitProgramDataSourceWithExternalCode = function(benefitProgramDataSourceWithExternalCode) {
	this.benefitProgramDataSourceWithExternalCode = benefitProgramDataSourceWithExternalCode;
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

method.effectiveEndDate = function(effectiveEndDate) {
	this.effectiveEndDate = effectiveEndDate;
	return this;
};

method.effectiveStartDate = function(effectiveStartDate) {
	this.effectiveStartDate = effectiveStartDate;
	return this;
};

method.effectiveStatus = function(effectiveStatus) {
	this.effectiveStatus = effectiveStatus;
	return this;
};

method.enrollmentDate = function(enrollmentDate) {
	this.enrollmentDate = enrollmentDate;
	return this;
};

method.exception = function(exception) {
	this.exception = exception;
	return this;
};

method.externalName = function(externalName) {
	this.externalName = externalName;
	return this;
};

method.id = function(id) {
	this.id = id;
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

method.mdfSystemCreatedBy = function(mdfSystemCreatedBy) {
	this.mdfSystemCreatedBy = mdfSystemCreatedBy;
	return this;
};

method.mdfSystemCreatedDate = function(mdfSystemCreatedDate) {
	this.mdfSystemCreatedDate = mdfSystemCreatedDate;
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

method.mdfSystemTransactionSequence = function(mdfSystemTransactionSequence) {
	this.mdfSystemTransactionSequence = mdfSystemTransactionSequence;
	return this;
};

method.mdfSystemVersionId = function(mdfSystemVersionId) {
	this.mdfSystemVersionId = mdfSystemVersionId;
	return this;
};

method.programAmount = function(programAmount) {
	this.programAmount = programAmount;
	return this;
};

method.programCurrency = function(programCurrency) {
	this.programCurrency = programCurrency;
	return this;
};

method.programEntitlementAmount = function(programEntitlementAmount) {
	this.programEntitlementAmount = programEntitlementAmount;
	return this;
};

method.recordStatus = function(recordStatus) {
	this.recordStatus = recordStatus;
	return this;
};

method.workerId = function(workerId) {
	this.workerId = workerId;
	return this;
};

method.benefitProgramEnrollmentDetail = function(benefitProgramEnrollmentDetail) {
	this.benefitProgramEnrollmentDetail = benefitProgramEnrollmentDetail;
	return this;
};

method.benefitProgramNav = function(benefitProgramNav) {
	this.benefitProgramNav = benefitProgramNav;
	return this;
};

method.exceptionNav = function(exceptionNav) {
	this.exceptionNav = exceptionNav;
	return this;
};

method.forms = function(forms) {
	this.forms = forms;
	return this;
};

method.policyDocuments = function(policyDocuments) {
	this.policyDocuments = policyDocuments;
	return this;
};

method.usefulLinks = function(usefulLinks) {
	this.usefulLinks = usefulLinks;
	return this;
};

method.build = function() {
	return {
		benefitProgram: this.benefitProgram,
		benefitProgramDataSource: this.benefitProgramDataSource,
		benefitProgramDataSourceWithExternalCode: this.benefitProgramDataSourceWithExternalCode,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		effectiveEndDate: this.effectiveEndDate,
		effectiveStartDate: this.effectiveStartDate,
		effectiveStatus: this.effectiveStatus,
		enrollmentDate: this.enrollmentDate,
		exception: this.exception,
		externalName: this.externalName,
		id: this.id,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemCreatedBy: this.mdfSystemCreatedBy,
		mdfSystemCreatedDate: this.mdfSystemCreatedDate,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemLastModifiedBy: this.mdfSystemLastModifiedBy,
		mdfSystemLastModifiedDate: this.mdfSystemLastModifiedDate,
		mdfSystemLastModifiedDateWithTZ: this.mdfSystemLastModifiedDateWithTZ,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		programAmount: this.programAmount,
		programCurrency: this.programCurrency,
		programEntitlementAmount: this.programEntitlementAmount,
		recordStatus: this.recordStatus,
		workerId: this.workerId,
		benefitProgramEnrollmentDetail: this.benefitProgramEnrollmentDetail,
		benefitProgramNav: this.benefitProgramNav,
		exceptionNav: this.exceptionNav,
		forms: this.forms,
		policyDocuments: this.policyDocuments,
		usefulLinks: this.usefulLinks
	};
};

module.exports = BenefitProgramEnrollmentEntityBuilder;
