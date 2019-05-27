var method = BenefitEmployeeClaimEntityBuilder.prototype;

function BenefitEmployeeClaimEntityBuilder() {

}

method.benefit = function(benefit) {
	this.benefit = benefit;
	return this;
};

method.benefitDataSource = function(benefitDataSource) {
	this.benefitDataSource = benefitDataSource;
	return this;
};

method.benefitDataSourceWithExternalCode = function(benefitDataSourceWithExternalCode) {
	this.benefitDataSourceWithExternalCode = benefitDataSourceWithExternalCode;
	return this;
};

method.benefitProgram = function(benefitProgram) {
	this.benefitProgram = benefitProgram;
	return this;
};

method.byPassWorkflow = function(byPassWorkflow) {
	this.byPassWorkflow = byPassWorkflow;
	return this;
};

method.claimDate = function(claimDate) {
	this.claimDate = claimDate;
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

method.entitlementAmount = function(entitlementAmount) {
	this.entitlementAmount = entitlementAmount;
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

method.isTotalAmountReadOnly = function(isTotalAmountReadOnly) {
	this.isTotalAmountReadOnly = isTotalAmountReadOnly;
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

method.mdfSystemCreatedBy = function(mdfSystemCreatedBy) {
	this.mdfSystemCreatedBy = mdfSystemCreatedBy;
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

method.nrpId = function(nrpId) {
	this.nrpId = nrpId;
	return this;
};

method.recordStatus = function(recordStatus) {
	this.recordStatus = recordStatus;
	return this;
};

method.remarks = function(remarks) {
	this.remarks = remarks;
	return this;
};

method.status = function(status) {
	this.status = status;
	return this;
};

method.totalAmount = function(totalAmount) {
	this.totalAmount = totalAmount;
	return this;
};

method.workerId = function(workerId) {
	this.workerId = workerId;
	return this;
};

method.benFuelReimbursement = function(benFuelReimbursement) {
	this.benFuelReimbursement = benFuelReimbursement;
	return this;
};

method.benTravelReimbursementClaim = function(benTravelReimbursementClaim) {
	this.benTravelReimbursementClaim = benTravelReimbursementClaim;
	return this;
};

method.benefitContacts = function(benefitContacts) {
	this.benefitContacts = benefitContacts;
	return this;
};

method.benefitDependentDetail = function(benefitDependentDetail) {
	this.benefitDependentDetail = benefitDependentDetail;
	return this;
};

method.benefitEmployeeCarClaim = function(benefitEmployeeCarClaim) {
	this.benefitEmployeeCarClaim = benefitEmployeeCarClaim;
	return this;
};

method.benefitEmployeeClaimDetail = function(benefitEmployeeClaimDetail) {
	this.benefitEmployeeClaimDetail = benefitEmployeeClaimDetail;
	return this;
};

method.benefitFuelReimbursementClaimDetail = function(benefitFuelReimbursementClaimDetail) {
	this.benefitFuelReimbursementClaimDetail = benefitFuelReimbursementClaimDetail;
	return this;
};

method.benefitNav = function(benefitNav) {
	this.benefitNav = benefitNav;
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
		benefit: this.benefit,
		benefitDataSource: this.benefitDataSource,
		benefitDataSourceWithExternalCode: this.benefitDataSourceWithExternalCode,
		benefitProgram: this.benefitProgram,
		byPassWorkflow: this.byPassWorkflow,
		claimDate: this.claimDate,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		currency: this.currency,
		entitlementAmount: this.entitlementAmount,
		exception: this.exception,
		externalName: this.externalName,
		id: this.id,
		isTotalAmountReadOnly: this.isTotalAmountReadOnly,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedDateWithTZ: this.lastModifiedDateWithTZ,
		mdfSystemCreatedBy: this.mdfSystemCreatedBy,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemEffectiveStartDate: this.mdfSystemEffectiveStartDate,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemStatus: this.mdfSystemStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		nrpId: this.nrpId,
		recordStatus: this.recordStatus,
		remarks: this.remarks,
		status: this.status,
		totalAmount: this.totalAmount,
		workerId: this.workerId,
		benFuelReimbursement: this.benFuelReimbursement,
		benTravelReimbursementClaim: this.benTravelReimbursementClaim,
		benefitContacts: this.benefitContacts,
		benefitDependentDetail: this.benefitDependentDetail,
		benefitEmployeeCarClaim: this.benefitEmployeeCarClaim,
		benefitEmployeeClaimDetail: this.benefitEmployeeClaimDetail,
		benefitFuelReimbursementClaimDetail: this.benefitFuelReimbursementClaimDetail,
		benefitNav: this.benefitNav,
		benefitProgramNav: this.benefitProgramNav,
		exceptionNav: this.exceptionNav,
		forms: this.forms,
		policyDocuments: this.policyDocuments,
		usefulLinks: this.usefulLinks
	};
};

module.exports = BenefitEmployeeClaimEntityBuilder;
