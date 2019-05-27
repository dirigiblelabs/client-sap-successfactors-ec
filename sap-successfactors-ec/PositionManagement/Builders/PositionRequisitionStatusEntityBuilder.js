var method = PositionRequisitionStatusEntityBuilder.prototype;

function PositionRequisitionStatusEntityBuilder() {

}

method.code = function(code) {
	this.code = code;
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

method.positionId = function(positionId) {
	this.positionId = positionId;
	return this;
};

method.processingStatus = function(processingStatus) {
	this.processingStatus = processingStatus;
	return this;
};

method.requisitionId = function(requisitionId) {
	this.requisitionId = requisitionId;
	return this;
};

method.build = function() {
	return {
		code: this.code,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		positionId: this.positionId,
		processingStatus: this.processingStatus,
		requisitionId: this.requisitionId
	};
};

module.exports = PositionRequisitionStatusEntityBuilder;
