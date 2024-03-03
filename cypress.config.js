const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
  e2e: {

    async setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.stats.failures === 0 && results.video) {
          return del(results.video)
        }
      })
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

  on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },

    baseUrl: "https://amazon.co.uk",
    watchForFileChanges:false,
    specPattern: ["cypress/e2e/**/*.feature"],
    chromeWebSecurity: false,
    waitForAnimations: false,
    animationDistanceThreshold: 50,
    retries:{openMode:2,runMode:2}
  },


});