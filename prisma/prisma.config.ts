// No need for `defineConfig` from Prisma
// You can keep the `DATABASE_URL` configuration here manually, or just rely on `.env`

import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
})
