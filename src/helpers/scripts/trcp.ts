import { createTRPCClient, type TRPCClientInit } from 'trpc-sveltekit';
import { env } from '$env/dynamic/public';
import type { AppRouter } from '$lib/server/trpc/_app';

let browserClient: ReturnType<typeof createTRPCClient<AppRouter>>;

export const client = (init?: TRPCClientInit) => {
	if (typeof window === 'undefined') {
		return createTRPCClient<AppRouter>({
			url: env.PUBLIC_TRPC_SLUG as `/${string}`,
			init
		});
	}

	if (!browserClient)
		browserClient = createTRPCClient<AppRouter>({
			url: env.PUBLIC_TRPC_SLUG as `/${string}`
		});

	return browserClient;
};
