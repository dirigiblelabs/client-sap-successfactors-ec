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

var employees = employeeTimeClient.list(EmployeeTime.queryBuilder()
	.select(EmployeeTime.USER_ID, EmployeeTime.START_DATE, EmployeeTime.QUANTITY_IN_HOURS)
	.filter(
		EmployeeTime.TIME_TYPE.eq("WORK")
		.and(EmployeeTime.START_DATE.ge(new Date(1460505600000))))
	.top(3)
	.format("json")
	.build()
);

response.println(employees);
```

> **Note:** In the examples, SAP API Hub Sandbox system was used
