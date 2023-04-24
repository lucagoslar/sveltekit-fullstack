import type { RequestEvent } from '@sveltejs/kit';
import type { AnyRouter, Dict } from '@trpc/server';
import type { RequestHandler } from './$types';

import { createContext } from '$lib/server/trpc/createContext';
import { appRouter } from '$lib/server/trpc/_app';
import { resolveHTTPResponse } from '@trpc/server/http';

async function handler(
	event: RequestEvent,
	router: AnyRouter,
	createContext: any,
	responseMeta?: any,
	onError?: any
) {
	const request = event.request as Request & {
		headers: Dict<string | string[]>;
	};

	const req = {
		method: request.method,
		headers: request.headers,
		query: event.url.searchParams,
		body: await request.text()
	};

	const httpResponse = await resolveHTTPResponse({
		router,
		req,
		path: event.url.pathname.substring('/trpc'.length + 1),
		createContext: async () => createContext?.(event),
		responseMeta,
		onError
	});

	const { status, headers, body } = httpResponse as {
		status: number;
		headers: Record<string, string>;
		body: string;
	};

	return new Response(body, { status, headers });
}

export const GET: RequestHandler = async (event) => {
	return await handler(event, appRouter, createContext);
};

export const POST: RequestHandler = async (event) => {
	return await handler(event, appRouter, createContext);
};
