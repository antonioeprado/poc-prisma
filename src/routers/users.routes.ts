import { signIn, signUp } from "@controllers/users.controllers";
import { Router } from "express";

const usersRouter = Router();

usersRouter.post("/sign-up", signUp);
usersRouter.post("/sign-in", signIn);

export { usersRouter };
