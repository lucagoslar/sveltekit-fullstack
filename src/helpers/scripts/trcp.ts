import { PUBLIC_BASE_URL, PUBLIC_TRPC_SLUG } from '$env/static/public';

import type { AppRouter } from '$lib/server/trpc/_app';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

export const client = createTRPCProxyClient<AppRouter>({
	links: [
		httpBatchLink({
			url: PUBLIC_BASE_URL + PUBLIC_TRPC_SLUG
		})
	]
});
