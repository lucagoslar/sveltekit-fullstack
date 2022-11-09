import type { LoadEvent } from '@sveltejs/kit';
import type { Router } from '$lib/trpc/server';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

export default (loadFetch?: LoadEvent['fetch']) =>
	createTRPCProxyClient<Router>({
		links: [
			httpBatchLink({
				url: import.meta.env.VITE_TRPC
			})
		],
		...(loadFetch && { fetch: loadFetch as typeof fetch })
	});
