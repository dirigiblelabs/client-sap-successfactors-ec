var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var PerPersonEntityBuilder = require("sap-successfactors-ec/PersonalInformation/Builders/PerPersonEntityBuilder");

exports.BIRTH_NAME = "birthName";
exports.COUNTRY_OF_BIRTH = "countryOfBirth";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.DATE_OF_BIRTH = "dateOfBirth";
exports.INCLUDE_ALL_RECORDS = "includeAllRecords";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.PER_PERSON_UUID = "perPersonUuid";
exports.PERSON_ID = "personId";
exports.PERSON_ID_EXTERNAL = "personIdExternal";
exports.REGION_OF_BIRTH = "regionOfBirth";
exports.USER_ID = "userId";
exports.EMAIL_NAV = "emailNav";
exports.EMERGENCY_CONTACT_NAV = "emergencyContactNav";
exports.HOME_ADDRESS_NAV_D_E_F_L_T = "homeAddressNavDEFLT";
exports.NATIONAL_ID_NAV = "nationalIdNav";
exports.PERSON_RERLATIONSHIP_NAV = "personRerlationshipNav";
exports.PERSONAL_INFO_NAV = "personalInfoNav";
exports.PHONE_NAV = "phoneNav";
exports.SOCIAL_ACCOUNT_NAV = "socialAccountNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PerPersonEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PerPersonClient(configurations);
};

function PerPersonClient (configurations) {

	var API_PATH = "/odata/v2/PerPerson";

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

	this.count = function() {
		return this.client.get("/$count");
	};
}

function getId(id) {
	return "('" + id + "')";
}
