import typescript from "rollup-plugin-typescript";
import pkg from "./package.json";

export default {
	input: "src/SimpleSignal.ts",
	output: [
		{ name: "simplesignal", sourcemap: true, file: pkg.module, format: "es" },
		{
			name: "SimpleSignal",
			sourcemap: true,
			file: pkg.main,
			format: "umd",
			footer: "module.exports.default = module.exports; // Terrible injection just so it works regardless of how it's required\n"
		}
	],
	plugins: [
		typescript({
			typescript: require("typescript")
		})
	]
};
