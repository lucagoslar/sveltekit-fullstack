declare namespace svelte.JSX {
	interface IHTMLImageElement<T> extends HTMLProps<T>, HTMLAttributes<T> {
		fetchpriority: 'high' | 'low';
	}

	interface IntrinsicElements {
		img: IHTMLImageElement<HTMLImageElement>;
	}
}
