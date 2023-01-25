import { createSession, findSession } from "@repositories/auth-repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function validatePassword(
  password: string,
  hash: string
): Promise<boolean> {
  const isValid = await bcrypt.compare(password, hash);
  if (isValid) return true;
  else return false;
}
export async function createToken(userId: number): Promise<string> {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await createSession(token, userId);
  return token;
}

export async function validateToken(token: string): Promise<boolean> {
  const isValid = await findSession(token);
  if (!isValid) throw new Error("Invalid token!");
  return true;
}
