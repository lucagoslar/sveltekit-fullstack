import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

interface User {
	id: string;
	name: string;
}

const userList: User[] = [
	{
		id: '1',
		name: 'Luca'
	}
];

export const router = t.router({
	userById: t.procedure
		.input((val: unknown) => {
			if (typeof val === 'string') return val;
			throw new Error(`Invalid input: ${typeof val}`);
		})
		.query((req) => {
			const { input } = req;
			const user = userList.find((u) => u.id === input);

			return user;
		})
});

export type Router = typeof router;
