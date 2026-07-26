import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";

export default defineConfig({
	projectId: "f52rrs",
	allowCypressEnv: false,

	e2e: {
		baseUrl: "https://w-abdullahamir.github.io/profile",
		video: true,
		screenshotOnRunFailure: true,
		specPattern: "cypress/e2e/**/*.cy.ts",
		supportFile: "cypress/support/e2e.ts",
		setupNodeEvents(on, config) {
			on("file:preprocessor", createBundler());
			return config;
		},
	},
});
