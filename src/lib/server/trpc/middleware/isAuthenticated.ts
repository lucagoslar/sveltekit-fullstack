import { middleware } from '$lib/server/trpc/server';
import { TRPCError } from '@trpc/server';

export const isAuthenticated = () =>
	middleware(({ next, ctx }) => {
		if (true) {
			throw new TRPCError({ code: 'UNAUTHORIZED' });
		}

		return next({
			ctx: {
				session: null
			}
		});
	});
