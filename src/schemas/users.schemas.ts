import { User, UserSignIn } from "@protocols";
import Joi from "joi";

export const signInSchema = Joi.object<UserSignIn>({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

export const signUpSchema = Joi.object<User>({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  name: Joi.string().min(3).max(24),
});
