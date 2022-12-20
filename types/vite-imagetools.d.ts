// https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata

interface ViteImagetoolsMetadata {
	/** @param {string} src - URL of the generated image */
	src: string;

	/** @param {number} width - Width of the image */
	width: number;

	/** @param {number} height - Height of the image */
	height: number;

	/** @param {string} format - Format of the generated image */
	format: string;

	/** @param {string} space - Name of colour space interpretation */
	space: string;

	/** @param {number} channels - Number of bands e.g. 3 for sRGB, 4 for CMYK */
	channels: number;

	/** @param {number} density - Number of pixels per inch */
	density: number;

	/** @param {string} depth - Name of pixel depth format */
	depth: string;

	/** @param {boolean} hasAlpha - presence of an alpha transparency channel */
	hasAlpha: boolean;

	/** @param {boolean} hasAlpha - presence of an embedded ICC profile */
	hasProfile: boolean;

	/** @param {boolean} isProgressive - indicating whether the image is interlaced using a progressive scan */
	isProgressive: boolean;
}

// declare module '*.png?width=100&format=jpg&metadata' {
// 	const value: ViteImagetoolsMetadata;
// 	export default value;
// }

// declare module '*.png?width=800;500;200&format=avif;webp;png&metadata' {
// 	const value: [ViteImagetoolsMetadata];
// 	export default value;
// }

declare module '*.avif?width=200&format=jpg&metadata' {
	const value: ViteImagetoolsMetadata;
	export default value;
}
