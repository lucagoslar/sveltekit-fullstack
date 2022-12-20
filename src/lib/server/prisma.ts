import { env } from '$env/dynamic/private';
import type Prisma from '@prisma/client';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { PrismaClient } = require('@prisma/client');

const options: Prisma.Prisma.PrismaClientOptions = {
	datasources: {
		db: {
			url: env.DATABASE_URL
		}
	}
};

export const prisma = new PrismaClient(options) as Prisma.PrismaClient;
