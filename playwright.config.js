const { devices } = require("@replayio/playwright");

const config = {
	forbidOnly: !!process.env.CI,
	retries: 0,
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
		{
			name: "replay-firefox",
			use: {
				...devices["Replay Firefox"],
			},
		},
	],
};

module.exports = config;