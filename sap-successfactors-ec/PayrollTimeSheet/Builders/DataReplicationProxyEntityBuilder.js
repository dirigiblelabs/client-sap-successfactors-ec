var method = DataReplicationProxyEntityBuilder.prototype;

function DataReplicationProxyEntityBuilder() {

}

method.allowReplicationInCorrectionPhase = function(allowReplicationInCorrectionPhase) {
	this.allowReplicationInCorrectionPhase = allowReplicationInCorrectionPhase;
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

method.dataReplicationProxyStatus = function(dataReplicationProxyStatus) {
	this.dataReplicationProxyStatus = dataReplicationProxyStatus;
	return this;
};

method.earliestReplicationDateTime = function(earliestReplicationDateTime) {
	this.earliestReplicationDateTime = earliestReplicationDateTime;
	return this;
};

method.employeeTime = function(employeeTime) {
	this.employeeTime = employeeTime;
	return this;
};

method.employeeTimeValuationResult = function(employeeTimeValuationResult) {
	this.employeeTimeValuationResult = employeeTimeValuationResult;
	return this;
};

method.employeeTimeWithAccountDetail = function(employeeTimeWithAccountDetail) {
	this.employeeTimeWithAccountDetail = employeeTimeWithAccountDetail;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.isSubsequentChange = function(isSubsequentChange) {
	this.isSubsequentChange = isSubsequentChange;
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

method.legalEntity = function(legalEntity) {
	this.legalEntity = legalEntity;
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

method.replicationContentType = function(replicationContentType) {
	this.replicationContentType = replicationContentType;
	return this;
};

method.replicationScenarioObject = function(replicationScenarioObject) {
	this.replicationScenarioObject = replicationScenarioObject;
	return this;
};

method.replicationTargetSystem = function(replicationTargetSystem) {
	this.replicationTargetSystem = replicationTargetSystem;
	return this;
};

method.sourceGenericObjectExternalCode = function(sourceGenericObjectExternalCode) {
	this.sourceGenericObjectExternalCode = sourceGenericObjectExternalCode;
	return this;
};

method.sourceGenericObjectInternalId = function(sourceGenericObjectInternalId) {
	this.sourceGenericObjectInternalId = sourceGenericObjectInternalId;
	return this;
};

method.timeAccount = function(timeAccount) {
	this.timeAccount = timeAccount;
	return this;
};

method.timeAccountPayout = function(timeAccountPayout) {
	this.timeAccountPayout = timeAccountPayout;
	return this;
};

method.timeAccountSnapshot = function(timeAccountSnapshot) {
	this.timeAccountSnapshot = timeAccountSnapshot;
	return this;
};

method.useCostCenterExternalObjectId = function(useCostCenterExternalObjectId) {
	this.useCostCenterExternalObjectId = useCostCenterExternalObjectId;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.employeeTimeValuationResultNav = function(employeeTimeValuationResultNav) {
	this.employeeTimeValuationResultNav = employeeTimeValuationResultNav;
	return this;
};

method.build = function() {
	return {
		allowReplicationInCorrectionPhase: this.allowReplicationInCorrectionPhase,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		dataReplicationProxyStatus: this.dataReplicationProxyStatus,
		earliestReplicationDateTime: this.earliestReplicationDateTime,
		employeeTime: this.employeeTime,
		employeeTimeValuationResult: this.employeeTimeValuationResult,
		employeeTimeWithAccountDetail: this.employeeTimeWithAccountDetail,
		externalCode: this.externalCode,
		isSubsequentChange: this.isSubsequentChange,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedDateWithTZ: this.lastModifiedDateWithTZ,
		legalEntity: this.legalEntity,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemEffectiveStartDate: this.mdfSystemEffectiveStartDate,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemStatus: this.mdfSystemStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		replicationContentType: this.replicationContentType,
		replicationScenarioObject: this.replicationScenarioObject,
		replicationTargetSystem: this.replicationTargetSystem,
		sourceGenericObjectExternalCode: this.sourceGenericObjectExternalCode,
		sourceGenericObjectInternalId: this.sourceGenericObjectInternalId,
		timeAccount: this.timeAccount,
		timeAccountPayout: this.timeAccountPayout,
		timeAccountSnapshot: this.timeAccountSnapshot,
		useCostCenterExternalObjectId: this.useCostCenterExternalObjectId,
		userId: this.userId,
		employeeTimeValuationResultNav: this.employeeTimeValuationResultNav
	};
};

module.exports = DataReplicationProxyEntityBuilder;
