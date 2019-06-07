# SAP SuccessFactors Employee Central Client for Eclipse Dirigible

[![Eclipse License](http://img.shields.io/badge/license-Eclipse-brightgreen.svg)](LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/dirigiblelabs/client-sap-successfactors-ec.svg)](https://github.com/dirigiblelabs/client-sap-successfactors-ec/graphs/contributors)

## Usage:

```javascript
var response = require("http/v4/response");
var EmployeeTime = require("sap-successfactors-ec/TimeOff/EmployeeTime");

var employeeTimeClient = EmployeeTime.getClient({
	host: "https://sandbox.api.sap.com/successfactors",
	headers: [{
		name: "apikey",
		value: "<YOUR-API-KEY>"
	}]
});

var employeeTimes = employeeTimeClient.list(EmployeeTime.queryBuilder()
	.select(EmployeeTime.USER_ID, EmployeeTime.START_DATE, EmployeeTime.QUANTITY_IN_HOURS)
	.filter(
		EmployeeTime.TIME_TYPE.eq("WORK")
		.and(EmployeeTime.START_DATE.ge(new Date(1460505600000))))
	.top(3)
	.format("json")
	.build()
);

response.println(JSON.stringify(employeeTimes));
```

> **Note:** In the examples SAP API Hub Sandbox system was used

## Generator:
```javascript
var response = require("http/v4/response");
var httpClient = require("http/v4/client");
var bytes = require("io/v4/bytes");

var specifications = [{
	module: "sap-successfactors-ec",
	group: "EmployeeProfile",
	url: "..."
}];

var startTime = new Date();

for (var index = 0; index < specifications.length; index ++) {
	var specification = specifications[index];
	var data = httpClient.get(specification.url);
	var swagger = JSON.parse(data.text);

	var tags = getTags(swagger);

	for (var i in tags) {
		tags[i].properties = getProperties(swagger, i);
		for (var path in swagger.paths) {
			var operations = swagger.paths[path];
			if (operations[Object.keys(operations)[0]].tags[0] === i) {
				var operation = {};
				operation[path] = swagger.paths[path];
				for (var method in operation[path]) {
					operation[path][method].parameters = operation[path][method].parameters.filter(e => e.required === true);
					operation[path][method].responses = undefined;
					operation[path][method].summary = undefined;
				}
				tags[i].paths.push(operation);
			}
		}
	}
	
	for(var tagName in tags) {
		generateClient(specification.module, specification.group + "/", tagName, tags[tagName]);
		generateBuilder(specification.module, specification.group + "/", tagName, tags[tagName]);
	}
}

var endTime = new Date();
var duration = endTime.getTime() - startTime.getTime();

response.println("Done in " + duration + "!");

function generateBuilder(project, path, tagName, tag) {
	var builder = "";
	builder += "var method = " + tagName + "EntityBuilder.prototype;\n";
	builder += "\n";
	builder += "function " + tagName + "EntityBuilder() {\n";
	builder += "\n";
	builder += "}\n";
	builder += "\n";

	for (var i = 0; i < tag.properties.length; i ++) {
		var property = tag.properties[i].value;
		builder += "method." + property + " = function(" + property + ") {\n";
		builder += "	this." + property + " = " + property + ";\n";
		builder += "	return this;\n";
		builder += "};\n";
		builder += "\n";
	} 

	builder += "method.build = function() {\n";
	builder += "	return {\n";

	for (var i = 0; i < tag.properties.length; i ++) {
		var property = tag.properties[i].value;
		builder += "		" + property + ": this." + property;
		if (i + 1< tag.properties.length) {
			builder += ",\n";
		} else {
			builder += "\n";
		}
	}

	builder += "	};\n";
	builder += "};\n";
	builder += "\n";
	builder += "module.exports = " + tagName + "EntityBuilder;\n";
	createFile(project, path + "Builders/" + tagName + "EntityBuilder.js", builder);
}

function generateClient(project, path, tagName, tag) {
	var client = "";
	client = "var Client = require(\"sap/Client\");\n";
	client += "var QueryBuilder = require(\"sap/QueryBuilder\")\n";
	client += "var " + tagName + "EntityBuilder = require(\"sap-successfactors-ec/" + path + "Builders/" + tagName + "EntityBuilder\");\n";
	client += "\n";
	for (var i = 0; i < tag.properties.length; i ++) {
		client += "exports." + tag.properties[i].id + " = \"" + tag.properties[i].value + "\";\n";
	}
	client += "\n";
	client += "exports.queryBuilder = function() {\n";
	client += "	return new QueryBuilder();\n";
	client += "};\n";
	client += "\n";
	client += "exports.entityBuilder = function() {\n";
	client += "	return new " + tagName + "EntityBuilder();\n";
	client += "};\n";
	client += "\n";
	client += "exports.getClient = function(configurations) {\n";
	client += "	return new " + tagName + "Client(configurations);\n";
	client +=  "};\n";
	client += "\n";
	client += "function " + tagName + "Client (configurations) {\n";
	client += "\n";
	client += "	var API_PATH = \"/odata/v2/" + tagName + "\";\n";
	client += "\n";
	client += "	this.client = new Client(configurations, API_PATH);\n";
	client += "\n";
	client += "	this.list = function(queryParameters) {\n";
	client += "		return this.client.list(queryParameters);\n";
	client += "	};\n";
	client += "\n";
	client += "	this.get = function(id, queryParameters) {\n";
	client += "		return this.client.get(getId(id), queryParameters);\n";
	client += "	};\n";
	client += "\n";
	client += "	this.create = function(entity, queryParameters) {\n";
	client += "		return this.client.create(entity, queryParameters);\n";
	client += "	};\n";
	client += "\n";
	client += "	this.update = function(id, entity, queryParameters) {\n";
	client += "		return this.client.update(getId(id), entity, queryParameters);\n";
	client += "	};\n";
	client += "\n";
	client += "	this.delete = function(id, queryParameters) {\n";
	client += "		return this.client.delete(getId(id), queryParameters);\n";
	client += "	};\n";
	client += "}\n";
	client += "\n";
	client += "function getId(id) {\n";
	client += "	return \"('\" + id + \"')\";\n";
	client += "}\n";

	createFile(project, path + tagName + ".js", client);
}

function getTags(swagger) {
	var tags = swagger.tags.map(e => e.name);
	var keys = {};
	for (var i = 0; i < tags.length; i ++) {
		keys[tags[i]] = {
			properties: [],
			paths: []
		};
	}
	return keys;
}

function getProperties(swagger, tag) {
	var definitionId = getDefinitionPrefix() + tag + getDefinitionSuffix();
	var definition = swagger.definitions[definitionId];
	var properties = [];
	if (definition) {
		properties = Object.keys(definition.properties).map(function (e) {
			return {
				id: toUpperSnakeCase(e),
				value: e
			};
		});
	}
	return properties;
}

function getDefinitionPrefix() {
	return "SFOData.";
}

function getDefinitionSuffix() {
	return "";
}

function toUpperSnakeCase(value) {
	return value.split(/(?=[A-Z])/).join("_").toUpperCase();
}

function createFile(project, name, fileContent) {
	var workspace = org.eclipse.dirigible.api.v3.workspace.WorkspaceFacade.getWorkspace("workspace");
	var content = bytes.toJavaBytes(bytes.textToByteArray(fileContent));
	workspace.getProject(project).createFile(name, content);
}
```
