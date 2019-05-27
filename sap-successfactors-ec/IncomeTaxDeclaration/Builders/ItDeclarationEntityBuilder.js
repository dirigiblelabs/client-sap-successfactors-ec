var method = ItDeclarationEntityBuilder.prototype;

function ItDeclarationEntityBuilder() {

}

method.amount = function(amount) {
	this.amount = amount;
	return this;
};

method.approvalStatus = function(approvalStatus) {
	this.approvalStatus = approvalStatus;
	return this;
};

method.category = function(category) {
	this.category = category;
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

method.currencyCode = function(currencyCode) {
	this.currencyCode = currencyCode;
	return this;
};

method.declarationType = function(declarationType) {
	this.declarationType = declarationType;
	return this;
};

method.effectiveStartDate = function(effectiveStartDate) {
	this.effectiveStartDate = effectiveStartDate;
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

method.fiscalYear = function(fiscalYear) {
	this.fiscalYear = fiscalYear;
	return this;
};

method.itDeclInvestmentType = function(itDeclInvestmentType) {
	this.itDeclInvestmentType = itDeclInvestmentType;
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

method.postingDate = function(postingDate) {
	this.postingDate = postingDate;
	return this;
};

method.type = function(type) {
	this.type = type;
	return this;
};

method.userSysId = function(userSysId) {
	this.userSysId = userSysId;
	return this;
};

method.userSysIdCopy = function(userSysIdCopy) {
	this.userSysIdCopy = userSysIdCopy;
	return this;
};

method.itDeclInvestmentTypeNav = function(itDeclInvestmentTypeNav) {
	this.itDeclInvestmentTypeNav = itDeclInvestmentTypeNav;
	return this;
};

method.typeNav = function(typeNav) {
	this.typeNav = typeNav;
	return this;
};

method.build = function() {
	return {
		amount: this.amount,
		approvalStatus: this.approvalStatus,
		category: this.category,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		currencyCode: this.currencyCode,
		declarationType: this.declarationType,
		effectiveStartDate: this.effectiveStartDate,
		externalCode: this.externalCode,
		externalName: this.externalName,
		fiscalYear: this.fiscalYear,
		itDeclInvestmentType: this.itDeclInvestmentType,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedDateWithTZ: this.lastModifiedDateWithTZ,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemStatus: this.mdfSystemStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		postingDate: this.postingDate,
		type: this.type,
		userSysId: this.userSysId,
		userSysIdCopy: this.userSysIdCopy,
		itDeclInvestmentTypeNav: this.itDeclInvestmentTypeNav,
		typeNav: this.typeNav
	};
};

module.exports = ItDeclarationEntityBuilder;
