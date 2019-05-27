var method = WfRequestParticipatorEntityBuilder.prototype;

function WfRequestParticipatorEntityBuilder() {

}

method.actorType = function(actorType) {
	this.actorType = actorType;
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

method.ownerId = function(ownerId) {
	this.ownerId = ownerId;
	return this;
};

method.participatorType = function(participatorType) {
	this.participatorType = participatorType;
	return this;
};

method.processingOrder = function(processingOrder) {
	this.processingOrder = processingOrder;
	return this;
};

method.relatedTo = function(relatedTo) {
	this.relatedTo = relatedTo;
	return this;
};

method.roleId = function(roleId) {
	this.roleId = roleId;
	return this;
};

method.wfRequestId = function(wfRequestId) {
	this.wfRequestId = wfRequestId;
	return this;
};

method.wfRequestParticipatorId = function(wfRequestParticipatorId) {
	this.wfRequestParticipatorId = wfRequestParticipatorId;
	return this;
};

method.build = function() {
	return {
		actorType: this.actorType,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		ownerId: this.ownerId,
		participatorType: this.participatorType,
		processingOrder: this.processingOrder,
		relatedTo: this.relatedTo,
		roleId: this.roleId,
		wfRequestId: this.wfRequestId,
		wfRequestParticipatorId: this.wfRequestParticipatorId
	};
};

module.exports = WfRequestParticipatorEntityBuilder;
