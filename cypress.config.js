const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'x1rhcu',
  e2e: {
    baseUrl: 'https://simple-books-api.glitch.me'
  }
})