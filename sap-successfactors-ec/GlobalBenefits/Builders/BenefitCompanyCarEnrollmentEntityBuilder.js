var method = BenefitCompanyCarEnrollmentEntityBuilder.prototype;

function BenefitCompanyCarEnrollmentEntityBuilder() {

}

method.BenefitEnrollment_effectiveStartDate = function(BenefitEnrollment_effectiveStartDate) {
	this.BenefitEnrollment_effectiveStartDate = BenefitEnrollment_effectiveStartDate;
	return this;
};

method.BenefitEnrollment_id = function(BenefitEnrollment_id) {
	this.BenefitEnrollment_id = BenefitEnrollment_id;
	return this;
};

method.benefitID = function(benefitID) {
	this.benefitID = benefitID;
	return this;
};

method.carLeaseEndDate = function(carLeaseEndDate) {
	this.carLeaseEndDate = carLeaseEndDate;
	return this;
};

method.carLeaseServiceProvider = function(carLeaseServiceProvider) {
	this.carLeaseServiceProvider = carLeaseServiceProvider;
	return this;
};

method.carLeaseStartDate = function(carLeaseStartDate) {
	this.carLeaseStartDate = carLeaseStartDate;
	return this;
};

method.carModel = function(carModel) {
	this.carModel = carModel;
	return this;
};

method.carRegistrationNumber = function(carRegistrationNumber) {
	this.carRegistrationNumber = carRegistrationNumber;
	return this;
};

method.carVendor = function(carVendor) {
	this.carVendor = carVendor;
	return this;
};

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDate = function(createdDate) {
	this.createdDate = createdDate;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.currency = function(currency) {
	this.currency = currency;
	return this;
};

method.effectiveStatus = function(effectiveStatus) {
	this.effectiveStatus = effectiveStatus;
	return this;
};

method.emiAmount = function(emiAmount) {
	this.emiAmount = emiAmount;
	return this;
};

method.employeeContribution = function(employeeContribution) {
	this.employeeContribution = employeeContribution;
	return this;
};

method.employerContribution = function(employerContribution) {
	this.employerContribution = employerContribution;
	return this;
};

method.exShowroomValue = function(exShowroomValue) {
	this.exShowroomValue = exShowroomValue;
	return this;
};

method.id = function(id) {
	this.id = id;
	return this;
};

method.installmentFrequency = function(installmentFrequency) {
	this.installmentFrequency = installmentFrequency;
	return this;
};

method.interestRate = function(interestRate) {
	this.interestRate = interestRate;
	return this;
};

method.lastModifiedBy = function(lastModifiedBy) {
	this.lastModifiedBy = lastModifiedBy;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.lastModifiedDateWithTZ = function(lastModifiedDateWithTZ) {
	this.lastModifiedDateWithTZ = lastModifiedDateWithTZ;
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

method.mdfSystemTransactionSequence = function(mdfSystemTransactionSequence) {
	this.mdfSystemTransactionSequence = mdfSystemTransactionSequence;
	return this;
};

method.mdfSystemVersionId = function(mdfSystemVersionId) {
	this.mdfSystemVersionId = mdfSystemVersionId;
	return this;
};

method.periodDuration = function(periodDuration) {
	this.periodDuration = periodDuration;
	return this;
};

method.unitOfPeriod = function(unitOfPeriod) {
	this.unitOfPeriod = unitOfPeriod;
	return this;
};

method.carLeaseServiceProviderNav = function(carLeaseServiceProviderNav) {
	this.carLeaseServiceProviderNav = carLeaseServiceProviderNav;
	return this;
};

method.carModelNav = function(carModelNav) {
	this.carModelNav = carModelNav;
	return this;
};

method.carVendorNav = function(carVendorNav) {
	this.carVendorNav = carVendorNav;
	return this;
};

method.build = function() {
	return {
		BenefitEnrollment_effectiveStartDate: this.BenefitEnrollment_effectiveStartDate,
		BenefitEnrollment_id: this.BenefitEnrollment_id,
		benefitID: this.benefitID,
		carLeaseEndDate: this.carLeaseEndDate,
		carLeaseServiceProvider: this.carLeaseServiceProvider,
		carLeaseStartDate: this.carLeaseStartDate,
		carModel: this.carModel,
		carRegistrationNumber: this.carRegistrationNumber,
		carVendor: this.carVendor,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		currency: this.currency,
		effectiveStatus: this.effectiveStatus,
		emiAmount: this.emiAmount,
		employeeContribution: this.employeeContribution,
		employerContribution: this.employerContribution,
		exShowroomValue: this.exShowroomValue,
		id: this.id,
		installmentFrequency: this.installmentFrequency,
		interestRate: this.interestRate,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedDateWithTZ: this.lastModifiedDateWithTZ,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemEffectiveStartDate: this.mdfSystemEffectiveStartDate,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		periodDuration: this.periodDuration,
		unitOfPeriod: this.unitOfPeriod,
		carLeaseServiceProviderNav: this.carLeaseServiceProviderNav,
		carModelNav: this.carModelNav,
		carVendorNav: this.carVendorNav
	};
};

module.exports = BenefitCompanyCarEnrollmentEntityBuilder;
