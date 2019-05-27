var method = EmpCompensationEntityBuilder.prototype;

function EmpCompensationEntityBuilder() {

}

method.benefitsRate = function(benefitsRate) {
	this.benefitsRate = benefitsRate;
	return this;
};

method.bonusTarget = function(bonusTarget) {
	this.bonusTarget = bonusTarget;
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

method.customDouble5 = function(customDouble5) {
	this.customDouble5 = customDouble5;
	return this;
};

method.customDouble6 = function(customDouble6) {
	this.customDouble6 = customDouble6;
	return this;
};

method.customDouble7 = function(customDouble7) {
	this.customDouble7 = customDouble7;
	return this;
};

method.customString20 = function(customString20) {
	this.customString20 = customString20;
	return this;
};

method.endDate = function(endDate) {
	this.endDate = endDate;
	return this;
};

method.event = function(event) {
	this.event = event;
	return this;
};

method.eventReason = function(eventReason) {
	this.eventReason = eventReason;
	return this;
};

method.isEligibleForBenefits = function(isEligibleForBenefits) {
	this.isEligibleForBenefits = isEligibleForBenefits;
	return this;
};

method.isEligibleForCar = function(isEligibleForCar) {
	this.isEligibleForCar = isEligibleForCar;
	return this;
};

method.isHighlyCompensatedEmployee = function(isHighlyCompensatedEmployee) {
	this.isHighlyCompensatedEmployee = isHighlyCompensatedEmployee;
	return this;
};

method.isInsider = function(isInsider) {
	this.isInsider = isInsider;
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

method.payGrade = function(payGrade) {
	this.payGrade = payGrade;
	return this;
};

method.payGroup = function(payGroup) {
	this.payGroup = payGroup;
	return this;
};

method.payrollSystemId = function(payrollSystemId) {
	this.payrollSystemId = payrollSystemId;
	return this;
};

method.startDate = function(startDate) {
	this.startDate = startDate;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.empCompensationCalculatedNav = function(empCompensationCalculatedNav) {
	this.empCompensationCalculatedNav = empCompensationCalculatedNav;
	return this;
};

method.empCompensationGroupSumCalculatedNav = function(empCompensationGroupSumCalculatedNav) {
	this.empCompensationGroupSumCalculatedNav = empCompensationGroupSumCalculatedNav;
	return this;
};

method.empPayCompRecurringNav = function(empPayCompRecurringNav) {
	this.empPayCompRecurringNav = empPayCompRecurringNav;
	return this;
};

method.build = function() {
	return {
		benefitsRate: this.benefitsRate,
		bonusTarget: this.bonusTarget,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		createdOn: this.createdOn,
		customDouble5: this.customDouble5,
		customDouble6: this.customDouble6,
		customDouble7: this.customDouble7,
		customString20: this.customString20,
		endDate: this.endDate,
		event: this.event,
		eventReason: this.eventReason,
		isEligibleForBenefits: this.isEligibleForBenefits,
		isEligibleForCar: this.isEligibleForCar,
		isHighlyCompensatedEmployee: this.isHighlyCompensatedEmployee,
		isInsider: this.isInsider,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedOn: this.lastModifiedOn,
		payGrade: this.payGrade,
		payGroup: this.payGroup,
		payrollSystemId: this.payrollSystemId,
		startDate: this.startDate,
		userId: this.userId,
		empCompensationCalculatedNav: this.empCompensationCalculatedNav,
		empCompensationGroupSumCalculatedNav: this.empCompensationGroupSumCalculatedNav,
		empPayCompRecurringNav: this.empPayCompRecurringNav
	};
};

module.exports = EmpCompensationEntityBuilder;
