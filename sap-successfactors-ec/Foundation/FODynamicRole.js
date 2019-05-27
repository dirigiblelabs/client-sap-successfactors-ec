var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var FODynamicRoleEntityBuilder = require("sap-successfactors-ec/Foundation/Builders/FODynamicRoleEntityBuilder");

exports.BUSINESS_UNIT = "businessUnit";
exports.COMPANY = "company";
exports.COST_CENTER = "costCenter";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.DEPARTMENT = "department";
exports.DESCRIPTION = "description";
exports.DIVISION = "division";
exports.DYNAMIC_GROUP = "dynamicGroup";
exports.DYNAMIC_ROLE_ASSIGNMENT_ID = "dynamicRoleAssignmentId";
exports.EVENT_REASON = "eventReason";
exports.EXTERNAL_CODE = "externalCode";
exports.JOB_CODE = "jobCode";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.LOCATION = "location";
exports.NAME = "name";
exports.PAY_GRADE = "payGrade";
exports.PAY_GROUP = "payGroup";
exports.PERSON = "person";
exports.POSITION = "position";
exports.RESOLVER_TYPE = "resolverType";
exports.BUSINESS_UNIT_NAV = "businessUnitNav";
exports.COMPANY_NAV = "companyNav";
exports.COST_CENTER_NAV = "costCenterNav";
exports.DEPARTMENT_NAV = "departmentNav";
exports.DESCRIPTION_TRANSLATION_NAV = "descriptionTranslationNav";
exports.DIVISION_NAV = "divisionNav";
exports.EVENT_REASON_NAV = "eventReasonNav";
exports.JOB_CODE_NAV = "jobCodeNav";
exports.LOCATION_NAV = "locationNav";
exports.NAME_TRANSLATION_NAV = "nameTranslationNav";
exports.PAY_GRADE_NAV = "payGradeNav";
exports.PAY_GROUP_NAV = "payGroupNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new FODynamicRoleEntityBuilder();
};

exports.getClient = function(configurations) {
	return new FODynamicRoleClient(configurations);
};

function FODynamicRoleClient (configurations) {

	var API_PATH = "/odata/v2/FODynamicRole";

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
