const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://www.spinbet.com/en-nz/",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
  },
});
