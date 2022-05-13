const { devices } = require("@replayio/playwright");

const config = {
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	use: {
		trace: "on-first-retry",
		defaultBrowserType: "firefox",
	},
	projects: [
		{
			name: "firefox",
			use: {
				...devices["Replay Firefox"],
			},
		},
	],
};

module.exports = config;