import { prisma } from '$lib/server/prisma';
import { protectedProcedure, publicProcedure, router } from './server';

export const appRouter = router({
	ping: publicProcedure.query(() => 'pong'),
	pong: protectedProcedure.query(() => 'ping'),
	users: router({
		count: publicProcedure.query(async () => await prisma.user.count())
	})
});

export type AppRouter = typeof appRouter;
