var method = BenefitInsurancePlanUSAEntityBuilder.prototype;

function BenefitInsurancePlanUSAEntityBuilder() {

}

method.BenefitInsurancePlan_effectiveStartDate = function(BenefitInsurancePlan_effectiveStartDate) {
	this.BenefitInsurancePlan_effectiveStartDate = BenefitInsurancePlan_effectiveStartDate;
	return this;
};

method.BenefitInsurancePlan_id = function(BenefitInsurancePlan_id) {
	this.BenefitInsurancePlan_id = BenefitInsurancePlan_id;
	return this;
};

method.cobraRelevant = function(cobraRelevant) {
	this.cobraRelevant = cobraRelevant;
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

method.id = function(id) {
	this.id = id;
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

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.build = function() {
	return {
		BenefitInsurancePlan_effectiveStartDate: this.BenefitInsurancePlan_effectiveStartDate,
		BenefitInsurancePlan_id: this.BenefitInsurancePlan_id,
		cobraRelevant: this.cobraRelevant,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		id: this.id,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus
	};
};

module.exports = BenefitInsurancePlanUSAEntityBuilder;
