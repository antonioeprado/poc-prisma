import { Users } from "@prisma/client";

export type User = Omit<Users, "id" | "createdAt">;
export type UserSignIn = Omit<User, "name">;
