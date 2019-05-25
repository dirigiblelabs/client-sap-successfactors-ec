/*eslint-disable no-extend-native */

var httpClient = require("http/v4/client");

exports.execute = function(method, url, options) {
	switch (method.toUpperCase()) {
		case "GET":
			return httpClient.get(url, options);
		case "POST":
			return httpClient.post(url, options);
		case "PUT":
			return httpClient.put(url, options);
		case "PATCH":
			return httpClient.patch(url, options);
		case "DELETE":
			return httpClient.delete(url, options);
	}
};

exports.getQueryParameters = function(parameters) {
	var queryParameters = "";
	if (parameters !== undefined && parameters !== null) {
		for (var i in parameters) {
			if (parameters[i] === "" || parameters[i] === null || parameters[i] === undefined) {
				continue;
			} else if (queryParameters === "") {
				queryParameters += "?";
			} else {
				queryParameters += "&";
			}
			queryParameters += i + "=" + parameters[i];
		}
	}
	return queryParameters;
};