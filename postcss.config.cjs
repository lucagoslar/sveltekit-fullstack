const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

const config = {
	plugins: [
		pxtorem({
			rootValue: 16,
			unitPrecision: 5,
			propList: ['*'],
			replace: true,
			mediaQuery: true,
			minPixelValue: 0,
			exclude: /node_modules/i
		}),
		autoprefixer
	]
};

module.exports = config;
