import { validateToken } from "@services";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function receiveToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization.replace("Bearer ", "");
  try {
    const userId = await validateToken(token);
    res.locals.user = userId;
    next();
  } catch (error) {
    return res.sendStatus(httpStatus.UNAUTHORIZED);
  }
}
