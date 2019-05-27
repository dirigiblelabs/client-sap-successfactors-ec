var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var PerPersonRelationshipEntityBuilder = require("sap-successfactors-ec/PersonalInformation/Builders/PerPersonRelationshipEntityBuilder");

exports.ADDRESS_ADDRESS1 = "addressAddress1";
exports.ADDRESS_ADDRESS2 = "addressAddress2";
exports.ADDRESS_ADDRESS3 = "addressAddress3";
exports.ADDRESS_CITY = "addressCity";
exports.ADDRESS_COUNTRY = "addressCountry";
exports.ADDRESS_COUNTY = "addressCounty";
exports.ADDRESS_PROVINCE = "addressProvince";
exports.ADDRESS_STATE = "addressState";
exports.ADDRESS_ZIP_CODE = "addressZipCode";
exports.ATTACHMENT_ID = "attachmentId";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.END_DATE = "endDate";
exports.FIRST_NAME = "firstName";
exports.IS_ACCOMPANYING_DEPENDENT = "isAccompanyingDependent";
exports.IS_ADDRESS_SAME_AS_PERSON = "isAddressSameAsPerson";
exports.IS_BENEFICIARY = "isBeneficiary";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.LAST_NAME = "lastName";
exports.OPERATION = "operation";
exports.PERSON_ID_EXTERNAL = "personIdExternal";
exports.RELATED_PERSON_ID_EXTERNAL = "relatedPersonIdExternal";
exports.RELATIONSHIP_TYPE = "relationshipType";
exports.START_DATE = "startDate";
exports.PERSON_NAV = "personNav";
exports.REL_NATIONAL_ID_NAV = "relNationalIdNav";
exports.REL_PERSON_NAV = "relPersonNav";
exports.REL_PERSONAL_NAV = "relPersonalNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PerPersonRelationshipEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PerPersonRelationshipClient(configurations);
};

function PerPersonRelationshipClient (configurations) {

	var API_PATH = "/odata/v2/PerPersonRelationship";

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
