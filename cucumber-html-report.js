const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "jsonlogs",
  reportPath: "./reports/cucumber-htmlreport.html",
  //reportPath: "../../reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "XX",
    },
    device: "Local test machine",
    platform: {
      name: "MacOS",
      version: "12.4",
    },
  },
});