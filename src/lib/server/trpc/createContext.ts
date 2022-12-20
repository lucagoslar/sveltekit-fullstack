import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';

export const createContext = async (event: RequestEvent) => {
	return {};
};

export type Context = inferAsyncReturnType<typeof createContext>;
