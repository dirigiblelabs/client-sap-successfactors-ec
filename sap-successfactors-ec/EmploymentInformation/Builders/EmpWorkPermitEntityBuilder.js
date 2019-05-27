var method = EmpWorkPermitEntityBuilder.prototype;

function EmpWorkPermitEntityBuilder() {

}

method.attachment = function(attachment) {
	this.attachment = attachment;
	return this;
};

method.attachmentFileName = function(attachmentFileName) {
	this.attachmentFileName = attachmentFileName;
	return this;
};

method.attachmentFileSize = function(attachmentFileSize) {
	this.attachmentFileSize = attachmentFileSize;
	return this;
};

method.attachmentFileType = function(attachmentFileType) {
	this.attachmentFileType = attachmentFileType;
	return this;
};

method.attachmentId = function(attachmentId) {
	this.attachmentId = attachmentId;
	return this;
};

method.attachmentMimeType = function(attachmentMimeType) {
	this.attachmentMimeType = attachmentMimeType;
	return this;
};

method.attachmentStatus = function(attachmentStatus) {
	this.attachmentStatus = attachmentStatus;
	return this;
};

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

method.createdOn = function(createdOn) {
	this.createdOn = createdOn;
	return this;
};

method.documentNumber = function(documentNumber) {
	this.documentNumber = documentNumber;
	return this;
};

method.documentTitle = function(documentTitle) {
	this.documentTitle = documentTitle;
	return this;
};

method.documentType = function(documentType) {
	this.documentType = documentType;
	return this;
};

method.expirationDate = function(expirationDate) {
	this.expirationDate = expirationDate;
	return this;
};

method.isValidated = function(isValidated) {
	this.isValidated = isValidated;
	return this;
};

method.issueDate = function(issueDate) {
	this.issueDate = issueDate;
	return this;
};

method.issuePlace = function(issuePlace) {
	this.issuePlace = issuePlace;
	return this;
};

method.issuingAuthority = function(issuingAuthority) {
	this.issuingAuthority = issuingAuthority;
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

method.notes = function(notes) {
	this.notes = notes;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.employmentNav = function(employmentNav) {
	this.employmentNav = employmentNav;
	return this;
};

method.build = function() {
	return {
		attachment: this.attachment,
		attachmentFileName: this.attachmentFileName,
		attachmentFileSize: this.attachmentFileSize,
		attachmentFileType: this.attachmentFileType,
		attachmentId: this.attachmentId,
		attachmentMimeType: this.attachmentMimeType,
		attachmentStatus: this.attachmentStatus,
		country: this.country,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		documentNumber: this.documentNumber,
		documentTitle: this.documentTitle,
		documentType: this.documentType,
		expirationDate: this.expirationDate,
		isValidated: this.isValidated,
		issueDate: this.issueDate,
		issuePlace: this.issuePlace,
		issuingAuthority: this.issuingAuthority,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		notes: this.notes,
		userId: this.userId,
		employmentNav: this.employmentNav
	};
};

module.exports = EmpWorkPermitEntityBuilder;
