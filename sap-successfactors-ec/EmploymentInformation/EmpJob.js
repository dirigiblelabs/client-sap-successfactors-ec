var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EmpJobEntityBuilder = require("sap-successfactors-ec/EmploymentInformation/Builders/EmpJobEntityBuilder");

exports.ASSEDIC_CERT_INITIAL_STATE_NUM = "assedicCertInitialStateNum";
exports.ASSEDIC_CERT_OBJECT_NUM = "assedicCertObjectNum";
exports.BUSINESS_UNIT = "businessUnit";
exports.CALC_METHOD_INDICATOR = "calcMethodIndicator";
exports.COMMITMENT_INDICATOR = "commitmentIndicator";
exports.COMPANY = "company";
exports.CONTRACT_REFERENCE_FOR_AED = "contractReferenceForAed";
exports.CONTRACT_TYPE = "contractType";
exports.COST_CENTER = "costCenter";
exports.COUNTRY_OF_COMPANY = "countryOfCompany";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CREATED_ON = "createdOn";
exports.DEFAULT_OVERTIME_COMPENSATION_VARIANT = "defaultOvertimeCompensationVariant";
exports.DEPARTMENT = "department";
exports.DIVISION = "division";
exports.EEO1_JOB_CATEGORY = "eeo1JobCategory";
exports.EEO4_JOB_CATEGORY = "eeo4JobCategory";
exports.EEO5_JOB_CATEGORY = "eeo5JobCategory";
exports.EEO6_JOB_CATEGORY = "eeo6JobCategory";
exports.EEO_CLASS = "eeoClass";
exports.ELECTORAL_COLLEGE_FOR_WORKERS_REPRESENTATIVES = "electoralCollegeForWorkersRepresentatives";
exports.ELECTORAL_COLLEGE_FOR_WORKS_COUNCIL = "electoralCollegeForWorksCouncil";
exports.EMP_RELATIONSHIP = "empRelationship";
exports.EMPL_STATUS = "emplStatus";
exports.EMPLOYEE_CLASS = "employeeClass";
exports.EMPLOYEE_WORKGROUP_MEMBERSHIP = "employeeWorkgroupMembership";
exports.EMPLOYMENT_TYPE = "employmentType";
exports.END_DATE = "endDate";
exports.EVENT = "event";
exports.EVENT_REASON = "eventReason";
exports.EXCL_EXECUTIVE_SECTOR = "exclExecutiveSector";
exports.EXPECTED_RETURN_DATE = "expectedReturnDate";
exports.FAMILY_RELATIONSHIP_WITH_EMPLOYER = "familyRelationshipWithEmployer";
exports.FGTS_DATE = "fgtsDate";
exports.FGTS_OPTANT = "fgtsOptant";
exports.FGTS_PERCENT = "fgtsPercent";
exports.FLSA_STATUS = "flsaStatus";
exports.FTE = "fte";
exports.HARMFUL_AGENT_EXPOSURE = "harmfulAgentExposure";
exports.HAZARD = "hazard";
exports.HEALTH_RISK = "healthRisk";
exports.HOLIDAY_CALENDAR_CODE = "holidayCalendarCode";
exports.IS_COMPETITION_CLAUSE_ACTIVE = "isCompetitionClauseActive";
exports.IS_FULLTIME_EMPLOYEE = "isFulltimeEmployee";
exports.IS_SIDE_LINE_JOB_ALLOWED = "isSideLineJobAllowed";
exports.JOB_CODE = "jobCode";
exports.JOB_TITLE = "jobTitle";
exports.LABOR_PROTECTION = "laborProtection";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_ON = "lastModifiedOn";
exports.LOCATION = "location";
exports.MANAGER_ID = "managerId";
exports.MANDATORY_WORK_BREAK_RECORD = "mandatoryWorkBreakRecord";
exports.MUNICIPAL_INSEE_CODE = "municipalInseeCode";
exports.NOTES = "notes";
exports.OPERATION = "operation";
exports.PAY_GRADE = "payGrade";
exports.PAY_SCALE_AREA = "payScaleArea";
exports.PAY_SCALE_GROUP = "payScaleGroup";
exports.PAY_SCALE_LEVEL = "payScaleLevel";
exports.PAY_SCALE_TYPE = "payScaleType";
exports.PCFM = "pcfm";
exports.PENSION_PROTECTION = "pensionProtection";
exports.PERMIT_INDICATOR = "permitIndicator";
exports.POSITION = "position";
exports.POSITION_ENTRY_DATE = "positionEntryDate";
exports.PROBATION_PERIOD_END_DATE = "probationPeriodEndDate";
exports.REGULAR_TEMP = "regularTemp";
exports.RESIDENT_VOTE = "residentVote";
exports.RETIRED = "retired";
exports.SEQ_NUMBER = "seqNumber";
exports.SICK_PAY_SUPPLEMENT = "sickPaySupplement";
exports.STANDARD_HOURS = "standardHours";
exports.START_DATE = "startDate";
exports.TEACHERS_PENSION = "teachersPension";
exports.TIME_RECORDING_ADMISSIBILITY_CODE = "timeRecordingAdmissibilityCode";
exports.TIME_RECORDING_PROFILE_CODE = "timeRecordingProfileCode";
exports.TIME_RECORDING_VARIANT = "timeRecordingVariant";
exports.TIME_TYPE_PROFILE_CODE = "timeTypeProfileCode";
exports.TIMEZONE = "timezone";
exports.TRAVEL_DISTANCE = "travelDistance";
exports.TUPE_ORG_NUMBER = "tupeOrgNumber";
exports.USER_ID = "userId";
exports.WORK_LOCATION = "workLocation";
exports.WORKER_CATEGORY = "workerCategory";
exports.WORKING_DAYS_PER_WEEK = "workingDaysPerWeek";
exports.WORKING_TIME_DIRECTIVE = "workingTimeDirective";
exports.WORKSCHEDULE_CODE = "workscheduleCode";
exports.WTD_HOURS_LIMIT = "wtdHoursLimit";
exports.EMPLOYMENT_NAV = "employmentNav";
exports.MANAGER_EMPLOYMENT_NAV = "managerEmploymentNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EmpJobEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EmpJobClient(configurations);
};

function EmpJobClient (configurations) {

	var API_PATH = "/odata/v2/EmpJob";

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
