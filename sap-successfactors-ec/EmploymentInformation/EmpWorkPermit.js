var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EmpWorkPermitEntityBuilder = require("sap-successfactors-ec/EmploymentInformation/Builders/EmpWorkPermitEntityBuilder");

exports.ATTACHMENT = "attachment";
exports.ATTACHMENT_FILE_NAME = "attachmentFileName";
exports.ATTACHMENT_FILE_SIZE = "attachmentFileSize";
exports.ATTACHMENT_FILE_TYPE = "attachmentFileType";
exports.ATTACHMENT_ID = "attachmentId";
exports.ATTACHMENT_MIME_TYPE = "attachmentMimeType";
exports.ATTACHMENT_STATUS = "attachmentStatus";
exports.COUNTRY = "country";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.DOCUMENT_NUMBER = "documentNumber";
exports.DOCUMENT_TITLE = "documentTitle";
exports.DOCUMENT_TYPE = "documentType";
exports.EXPIRATION_DATE = "expirationDate";
exports.IS_VALIDATED = "isValidated";
exports.ISSUE_DATE = "issueDate";
exports.ISSUE_PLACE = "issuePlace";
exports.ISSUING_AUTHORITY = "issuingAuthority";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.NOTES = "notes";
exports.USER_ID = "userId";
exports.EMPLOYMENT_NAV = "employmentNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmpWorkPermitEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmpWorkPermitClient(configurations);
};

function EmpWorkPermitClient (configurations) {

	var API_PATH = "/odata/v2/EmpWorkPermit";

	this.client = new Client(configurations, API_PATH);

	this.list = function(queryParameters) {
		return this.client.list(queryParameters);
	};

	this.get = function(id, queryParameters) {
		return this.client.get(getId(id), queryParameters);
	};

	this.create = function(entity, queryParameters) {
		return this.client.create(entity, queryParameters);
	};

	this.update = function(id, entity, queryParameters) {
		return this.client.update(getId(id), entity, queryParameters);
	};

	this.delete = function(id, queryParameters) {
		return this.client.delete(getId(id), queryParameters);
	};
}

function getId(id) {
	return "('" + id + "')";
}
