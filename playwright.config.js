const { devices } = require("@replayio/playwright");

const config = {
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	use: {
		trace: "on-first-retry",
		defaultBrowserType: "chromium",
	},
	projects: [
		{
			name: "replay-chromium",
			use: {
				...devices["Replay Chromium"],
			},
		},
	],
};

module.exports = config;