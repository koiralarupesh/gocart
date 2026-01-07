import { PrismaClient } from '@prisma/client'

// Just initialize Prisma Client without manually passing the datasourceUrl
export const prisma = new PrismaClient()
