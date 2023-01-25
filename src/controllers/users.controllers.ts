import { User, UserSignIn } from "@protocols";
import { createUser, loginUser } from "@services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export function signUp(req: Request, res: Response) {
  const user: User = req.body;
  try {
    createUser(user);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    res.status(httpStatus.CONFLICT).send(error);
  }
}

export async function signIn(req: Request, res: Response) {
  const user: UserSignIn = req.body;
  try {
    const token = await loginUser(user);
    res.status(httpStatus.OK).send({ token });
  } catch (error) {
    if (error.name === "wrongInfo") {
      return res.status(httpStatus.UNAUTHORIZED).send(error.message);
    }
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }
}
