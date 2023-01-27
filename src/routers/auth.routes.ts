import { receiveToken, validateHeaders } from "@middlewares";
import { tokenSchema } from "@schemas";
import { Router } from "express";

const authRouter = Router();

authRouter.all("/", validateHeaders(tokenSchema), receiveToken);

export { authRouter };
