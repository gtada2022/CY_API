const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'x1rhcu',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
