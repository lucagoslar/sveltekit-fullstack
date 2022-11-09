//! compatibility: awaiting merge of PR #29 at trpc-sveltekit

import type { AnyRouter } from '@trpc/server';
import { resolveHTTPResponse } from '@trpc/server/http';
import type { Handle, RequestEvent } from '@sveltejs/kit';
import type { CreateContextFn, ResponseMetaFn } from 'trpc-sveltekit/dist/types';
import type { HTTPHeaders } from '@trpc/client';

export const createTRPCHandle: <Router extends AnyRouter>({
	url,
	router,
	createContext,
	responseMeta,
	event,
	resolve
}: {
	/**
	 * The URL prefix of tRPC routes.
	 * Must start with `/` and NOT end with `/`.
	 * Requests starting with this prefix will be intercepted and handled by tRPC,
	 * and will NOT be forwarded to SvelteKit.
	 * @default '/trpc' */
	url?: string;
	/**
	 * The tRPC router
	 * @see https://trpc.io/docs/router */
	router: Router;
	/**
	 * A function called for each request, whose result is propagated to all resolvers.
	 * You can use this to pass contextual data down to the resolvers.
	 * @see https://trpc.io/docs/context */
	createContext?: CreateContextFn<Router>;
	/**
	 * A function allowing you to override/customize the response status and headers
	 * (i.e. to control caching).
	 * @see https://trpc.io/docs/caching */
	responseMeta?: ResponseMetaFn<Router>;
	/**
	 * The event object passed to the `handle` function.
	 * @see https://kit.svelte.dev/docs/hooks#handle */
	event: RequestEvent;
	/**
	 * The resolve object passed to the `handle` function.
	 * @see https://kit.svelte.dev/docs/hooks#handle */
	resolve: Parameters<Handle>[0]['resolve'];
}) => Promise<Response> = async (r) => {
	var t = r.url,
		s = void 0 === t ? '/trpc' : t,
		n = r.router,
		o = r.createContext,
		a = r.responseMeta,
		u = r.event,
		h = r.resolve;
	try {
		if (!s.startsWith('/') || s.endsWith('/'))
			throw new Error("The tRPC url must start with '/' and NOT end with '/'");
		if (u.url.pathname.startsWith(s + '/')) {
			var i = u.request,
				l = u.url.searchParams,
				d = i.headers,
				c = i.method;
			return Promise.resolve(i.text()).then(function (r) {
				return Promise.resolve(
					resolveHTTPResponse({
						router: n,
						req: { method: c, headers: d as unknown as HTTPHeaders, query: l, body: r },
						path: u.url.pathname.substring(s.length + 1),
						createContext: function () {
							return Promise.resolve(null == o ? void 0 : o(u));
						},
						responseMeta: a
					})
				).then(function (e) {
					return new Response(e.body, {
						status: e.status,
						headers: e.headers as unknown as HeadersInit | undefined
					});
				});
			});
		}
		return Promise.resolve(h(u));
	} catch (e) {
		return Promise.reject(e);
	}
};
