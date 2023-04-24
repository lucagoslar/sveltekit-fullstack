import type { PageServerLoad } from './$types';

import { client } from '$scripts/trpc';

export const load: PageServerLoad = async (event) => {
	return {
		userCount: await client(event).users.count.query()
	};
};
