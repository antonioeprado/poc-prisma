import { receiveToken, validateHeaders } from "@middlewares";
import { tokenSchema } from "@schemas/auth.schemas";
import { Router } from "express";

const authRouter = Router();

authRouter.all("/", validateHeaders(tokenSchema), receiveToken);

export { authRouter };
