import { signIn, signUp } from "@controllers/users.controllers";
import { validateBody } from "@middlewares";
import { signInSchema, signUpSchema } from "@schemas";
import { Router } from "express";

const usersRouter = Router();

usersRouter.post("/sign-up", validateBody(signUpSchema), signUp);
usersRouter.post("/sign-in", validateBody(signInSchema), signIn);

export { usersRouter };
