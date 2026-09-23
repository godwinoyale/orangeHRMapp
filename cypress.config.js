const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoCompression: false,
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    watchForFileChanges: false
  },
});
