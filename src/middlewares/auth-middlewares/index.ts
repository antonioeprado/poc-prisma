import { validateToken } from "@services";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function receiveToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization.replace("Bearer ", "");
  const status = await validateToken(token);
  if (!status) return res.sendStatus(httpStatus.UNAUTHORIZED);
  next();
}
