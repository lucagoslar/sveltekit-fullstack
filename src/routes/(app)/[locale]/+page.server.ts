import type { PageServerLoad } from './$types';

import { client } from '$scripts/trcp';

export const load: PageServerLoad = async () => {
	return {
		userCount: await client.users.count.query()
	};
};
