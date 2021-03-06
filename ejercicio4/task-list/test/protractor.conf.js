'use strict';

// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  chromeOnly: true,
  
  baseUrl: 'http://127.0.0.1:8000',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['./e2e/**/*.js'],

  framework: 'jasmine2',

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
