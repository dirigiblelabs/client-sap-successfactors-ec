/*eslint-disable no-extend-native */

var method = QueryBuilder.prototype;

function QueryBuilder() {
}

method.list = function() {
	return this;
};

method.orderby = function(orderby) {
	this.$orderby = orderby;
	return this;
};

method.top = function(top) {
	this.$top = top;
	return this;
};

method.skip = function(skip) {
	this.$skip = skip;
	return this;
};

method.filter = function() {
	this.$filter = "";
	for (var i = 0; i < arguments.length; i ++) {
		this.$filter += arguments[i];
	}
	return this;
};

method.expand = function(expand) {
	throw Error("Method Not Implemented Yet");
};

method.format = function(format) {
	this.$format = format;
	return this;
};

method.select = function() {
	this.$select = "";
	for (var i = 0; i < arguments.length; i ++) {
		this.$select += i + 1 < arguments.length ? arguments[i] + "," : arguments[i];
	}
	return this;
};

method.inlinecount = function(inlinecount) {
	this.$inlinecount = inlinecount;
	return this;
};

method.build = function() {
	return {
		$orderby: this.$orderby,
		$top: this.$top,
		$skip: this.$skip,
		$filter: this.$filter,
		$expand: this.$expand,
		$format: this.$format,
		$select: this.$select,
		$inlinecount: this.$inlinecount
	};
};

String.prototype.eq = function(value) {
    return this + "+eq+" + parseValue(value);
};

String.prototype.ne = function(value) {
    return this + "+ne+" + parseValue(value);
};

String.prototype.lt = function(value) {
    return this + "+lt+" + parseValue(value);
};

String.prototype.le = function(value) {
    return this + "+le+" + parseValue(value);
};

String.prototype.gt = function(value) {
    return this + "+gt+" + parseValue(value);
};

String.prototype.ge = function(value) {
    return this + "+ge+" + parseValue(value);
};

String.prototype.and = function(value) {
	return this + "+and+" + value;
};

String.prototype.or = function(value) {
	return this + "+or+" + value;
};

String.prototype.not = function(value) {
	return this + "+not+" + value;
};

String.prototype.add = function(value) {
	return this + "+add+" + value;
};

String.prototype.sub = function(value) {
	return this + "+sub+" + value;
};

String.prototype.mul = function(value) {
	return this + "+mul+" + value;
};

String.prototype.div = function(value) {
	return this + "+div+" + value;
};

String.prototype.mod = function(value) {
	return this + "+mod+" + value;
};

function parseValue(value) {
	if (value instanceof Date) {
		return "datetime'" + value.toISOString() + "'";
	}
	return "'" + value + "'";
}

module.exports = QueryBuilder;