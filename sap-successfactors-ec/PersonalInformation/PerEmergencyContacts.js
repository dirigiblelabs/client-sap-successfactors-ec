var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var PerEmergencyContactsEntityBuilder = require("sap-successfactors-ec/PersonalInformation/Builders/PerEmergencyContactsEntityBuilder");

exports.ADDRESS_ADDRESS1 = "addressAddress1";
exports.ADDRESS_ADDRESS2 = "addressAddress2";
exports.ADDRESS_ADDRESS3 = "addressAddress3";
exports.ADDRESS_CITY = "addressCity";
exports.ADDRESS_COUNTRY = "addressCountry";
exports.ADDRESS_COUNTY = "addressCounty";
exports.ADDRESS_PROVINCE = "addressProvince";
exports.ADDRESS_STATE = "addressState";
exports.ADDRESS_ZIP_CODE = "addressZipCode";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.EMAIL = "email";
exports.IS_ADD_SAME_AS_EMPLOYEE = "isAddSameAsEmployee";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.NAME = "name";
exports.OPERATION = "operation";
exports.PERSON_ID_EXTERNAL = "personIdExternal";
exports.PHONE = "phone";
exports.PRIMARY_FLAG = "primaryFlag";
exports.RELATIONSHIP = "relationship";
exports.SECOND_PHONE = "secondPhone";
exports.ADDRESS_NAV_D_E_F_L_T = "addressNavDEFLT";
exports.PERSON_NAV = "personNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PerEmergencyContactsEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PerEmergencyContactsClient(configurations);
};

function PerEmergencyContactsClient (configurations) {

	var API_PATH = "/odata/v2/PerEmergencyContacts";

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
