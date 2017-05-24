export default {
	entry: 'dist/SimpleSignal.js',
	dest: 'dist/SimpleSignal.commonjs.js',
	format: 'cjs',
	plugins: [],
	sourceMap: 'inline',
	footer: 'module.exports.default = module.exports; // Terrible injection just so it works regardless of how it\'s required\n',
};
