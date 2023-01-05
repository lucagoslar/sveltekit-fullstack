import { prisma } from '$lib/server/prisma';
import { z } from 'zod';
import { protectedProcedure, publicProcedure, router } from './server';

export const appRouter = router({
	substraction: publicProcedure
		.input(z.object({ minuend: z.number(), subtrahend: z.number() }))
		.query(({ input }) => input.minuend - input.subtrahend),
	pong: protectedProcedure.query(() => 'ping'),
	users: router({
		count: publicProcedure.query(async () => await prisma.user.count())
	})
});

export type AppRouter = typeof appRouter;
