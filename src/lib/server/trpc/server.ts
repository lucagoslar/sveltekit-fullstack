import { initTRPC } from '@trpc/server';
import type { Context } from '$lib/server/trpc/createContext';
import { isAuthenticated } from '$lib/server/trpc/middleware/isAuthenticated';

export const t = initTRPC.context<Context>().create({
	errorFormatter({ shape, error }) {
		console.log(error);
		return shape;
	}
});

export const router = t.router;
export const middleware = t.middleware;

export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthenticated(t));
