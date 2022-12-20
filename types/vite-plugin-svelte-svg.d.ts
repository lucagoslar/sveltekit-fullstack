declare module '*.svg?component' {
	const value: new (args: {
		target: any;
		props?: { width?: number; height?: number };
	}) => ATypedSvelteComponent;
	export default value;
}
