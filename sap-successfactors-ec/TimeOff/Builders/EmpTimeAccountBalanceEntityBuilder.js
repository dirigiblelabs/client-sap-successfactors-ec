var method = EmpTimeAccountBalanceEntityBuilder.prototype;

function EmpTimeAccountBalanceEntityBuilder() {

}

method.accountClosed = function(accountClosed) {
	this.accountClosed = accountClosed;
	return this;
};

method.balance = function(balance) {
	this.balance = balance;
	return this;
};

method.timeAccount = function(timeAccount) {
	this.timeAccount = timeAccount;
	return this;
};

method.timeAccountType = function(timeAccountType) {
	this.timeAccountType = timeAccountType;
	return this;
};

method.timeUnit = function(timeUnit) {
	this.timeUnit = timeUnit;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.build = function() {
	return {
		accountClosed: this.accountClosed,
		balance: this.balance,
		timeAccount: this.timeAccount,
		timeAccountType: this.timeAccountType,
		timeUnit: this.timeUnit,
		userId: this.userId
	};
};

module.exports = EmpTimeAccountBalanceEntityBuilder;
