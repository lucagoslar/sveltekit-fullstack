import { createTRPCClient, type TRPCClientInit } from 'trpc-sveltekit';
import type { AppRouter } from '$lib/server/trpc/_app';

let browserClient: ReturnType<typeof createTRPCClient<AppRouter>>;

const slug = '/trpc';

export const client = (init?: TRPCClientInit) => {
	if (typeof window === 'undefined') {
		return createTRPCClient<AppRouter>({
			url: slug,
			init
		});
	}

	if (!browserClient)
		browserClient = createTRPCClient<AppRouter>({
			url: slug
		});

	return browserClient;
};
