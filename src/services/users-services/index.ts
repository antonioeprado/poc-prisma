import { userNotRegistered, wrongInfo } from "@errors/users-errors";
import { User, UserSignIn } from "@protocols";
import { findUserByEmail, registerUser } from "@repositories";
import bcrypt from "bcrypt";
import { validatePassword, createToken } from "@services";

export async function createUser(user: User): Promise<User> {
  const passwordHash = await bcrypt.hash(user.password, 12);
  const newUser: User = {
    email: user.email,
    name: user.name,
    password: passwordHash,
  };
  const isRegistered = await registerUser(newUser);
  if (!isRegistered) throw new Error(`Failed to register ${user.name}`);
  return isRegistered;
}

export async function loginUser(user: UserSignIn): Promise<string> {
  const registeredUser = await findUserByEmail(user.email);
  if (!registeredUser) throw userNotRegistered();
  const passwordCheck = await validatePassword(
    user.password,
    registeredUser.password
  );
  if (!passwordCheck) {
    throw wrongInfo();
  }
  return await createToken(registeredUser.id);
}
