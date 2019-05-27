var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var TimeTypeProfileEntityBuilder = require("sap-successfactors-ec/TimeOff/Builders/TimeTypeProfileEntityBuilder");

exports.BOOK_TIME_OFF_IN_LIEU_ON_TIME_SHEET_APPROVAL = "bookTimeOffInLieuOnTimeSheetApproval";
exports.BOOK_WORKING_TIME_ON_TIME_SHEET_APPROVAL = "bookWorkingTimeOnTimeSheetApproval";
exports.COUNTRY = "country";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE = "defaultImportAttendanceTimeType";
exports.EXTERNAL_CODE = "externalCode";
exports.EXTERNAL_NAME_DE__D_E = "externalName_de_DE";
exports.EXTERNAL_NAME_DEFAULT_VALUE = "externalName_defaultValue";
exports.EXTERNAL_NAME_EN__G_B = "externalName_en_GB";
exports.EXTERNAL_NAME_EN__U_S = "externalName_en_US";
exports.EXTERNAL_NAME_ES__E_S = "externalName_es_ES";
exports.EXTERNAL_NAME_FR__F_R = "externalName_fr_FR";
exports.EXTERNAL_NAME_JA__J_P = "externalName_ja_JP";
exports.EXTERNAL_NAME_KO__K_R = "externalName_ko_KR";
exports.EXTERNAL_NAME_LOCALIZED = "externalName_localized";
exports.EXTERNAL_NAME_NL__N_L = "externalName_nl_NL";
exports.EXTERNAL_NAME_PT__B_R = "externalName_pt_BR";
exports.EXTERNAL_NAME_PT__P_T = "externalName_pt_PT";
exports.EXTERNAL_NAME_RU__R_U = "externalName_ru_RU";
exports.EXTERNAL_NAME_ZH__C_N = "externalName_zh_CN";
exports.EXTERNAL_NAME_ZH__T_W = "externalName_zh_TW";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MAIN_ATTENDANCE_TIME_TYPE = "mainAttendanceTimeType";
exports.MAIN_BREAK_TIME_TYPE = "mainBreakTimeType";
exports.MAIN_E_S_S_TIME_TYPE = "mainESSTimeType";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU = "timeAccountTypeForTimeOffInLieu";
exports.TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT = "timeAccountTypeForWorkingTimeAccount";
exports.TIME_RECORDING_VARIANT = "timeRecordingVariant";
exports.AVAILABLE_TIME_TYPES = "availableTimeTypes";
exports.DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE_NAV = "defaultImportAttendanceTimeTypeNav";
exports.MAIN_ATTENDANCE_TIME_TYPE_NAV = "mainAttendanceTimeTypeNav";
exports.MAIN_BREAK_TIME_TYPE_NAV = "mainBreakTimeTypeNav";
exports.MAIN_E_S_S_TIME_TYPE_NAV = "mainESSTimeTypeNav";
exports.TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU_NAV = "timeAccountTypeForTimeOffInLieuNav";
exports.TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT_NAV = "timeAccountTypeForWorkingTimeAccountNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new TimeTypeProfileEntityBuilder();
};

exports.getClient = function(configurations) {
	return new TimeTypeProfileClient(configurations);
};

function TimeTypeProfileClient (configurations) {

	var API_PATH = "/odata/v2/TimeTypeProfile";

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
