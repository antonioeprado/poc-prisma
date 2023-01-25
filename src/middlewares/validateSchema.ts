import { invalidPayload } from "@errors/users-errors";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";

export function validateBody<T>(schema: ObjectSchema<T>) {
  return validateBySchema(schema, "body");
}

export function validateParams<T>(schema: ObjectSchema<T>) {
  return validateBySchema(schema, "params");
}

function validateBySchema(schema: ObjectSchema, type: "body" | "params") {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type], { abortEarly: false });
    if (!error) next();
    res
      .status(httpStatus.BAD_REQUEST)
      .send(invalidPayload(error.details.map((err) => err.message)));
  };
}
