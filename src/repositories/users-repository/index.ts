import { prisma } from "@config";
import { PrismaPromise, Users } from "@prisma/client";
import { User } from "@protocols";

export function findUserByEmail(email: string): PrismaPromise<Users> {
  return prisma.users.findFirst({
    where: {
      email,
    },
  });
}

export function registerUser(data: User): PrismaPromise<User> {
  return prisma.users.create({
    data,
  });
}
