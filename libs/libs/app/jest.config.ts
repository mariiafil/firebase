/* eslint-disable */
export default {
	displayName: "libs-app",
	preset: "../../../jest.preset.js",
	transform: {
		"^.+\\.[tj]sx?$": "babel-jest"
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
	coverageDirectory: "../../../coverage/libs/libs/app"
};
