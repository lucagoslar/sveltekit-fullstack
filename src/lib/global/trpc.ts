import type { LoadEvent } from '@sveltejs/kit';
import type { Router } from '$lib/server/trpc/server';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

export default (loadFetch?: LoadEvent['fetch']) =>
	createTRPCProxyClient<Router>({
		links: [
			httpBatchLink({
				url: import.meta.env.DEV ? import.meta.env.VITE_TRPC : import.meta.env.VITE_PROD_TRPC
			})
		],
		...(loadFetch && { fetch: loadFetch as typeof fetch })
	});
