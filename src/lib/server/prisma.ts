import type { PrismaClient as TypedPrismaClient } from '@prisma/client';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { PrismaClient } = require('@prisma/client');

export const prisma = new PrismaClient() as TypedPrismaClient;
