import { env } from '$env/dynamic/public';

import type { AppRouter } from '$lib/server/trpc/_app';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

export const client = createTRPCProxyClient<AppRouter>({
	links: [
		httpBatchLink({
			url: env.PUBLIC_BASE_URL + env.PUBLIC_TRPC_SLUG
		})
	]
});
