import { initTRPC, TRPCError } from '@trpc/server';
import type { Context } from './createContext';
import { isAuthenticated } from '$lib/server/trpc/middleware/isAuthenticated';

export const t = initTRPC.context<Context>().create({
	// errorFormatter: ({ shape, error, type, path, input, ctx }) => {
	// 	console.log('tRPC error:', JSON.stringify({ shape, error, type, path, input, ctx }));
	// 	return {
	// 		code: shape.code,
	// 		message: shape.message
	// 	};
	// }
});

export const router = t.router;
export const middleware = t.middleware;

export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthenticated());
