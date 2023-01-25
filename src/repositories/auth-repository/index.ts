import { prisma } from "@config";
import { PrismaPromise, Sessions } from "@prisma/client";

export async function createSession(token: string, userId: number) {
  await prisma.sessions.create({
    data: {
      token,
      userId,
    },
  });
}

export function findSession(token: string): PrismaPromise<Sessions> {
  return prisma.sessions.findFirst({ where: { token } });
}
