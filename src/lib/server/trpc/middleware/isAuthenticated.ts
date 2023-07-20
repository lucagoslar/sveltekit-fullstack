import { TRPCError } from '@trpc/server';
import type { t } from '$lib/server/trpc/server';

export const isAuthenticated = ($t: typeof t) =>
	$t.middleware(({ next, ctx }) => {
		if (true) {
			throw new TRPCError({ code: 'UNAUTHORIZED' });
		}

		return next({
			ctx: {
				session: null
			}
		});
	});
