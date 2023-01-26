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

export function validateHeaders<T>(schema: ObjectSchema<T>) {
  return validateBySchema(schema, "headers");
}

function validateBySchema(
  schema: ObjectSchema,
  type: "body" | "params" | "headers"
) {
  return (req: Request, res: Response, next: NextFunction) => {
    const requestType = type === "headers" ? req[type].token : req[type];
    const { error } = schema.validate(requestType, { abortEarly: false });

    if (!error) {
      next();
    } else {
      res
        .status(httpStatus.BAD_REQUEST)
        .send(invalidPayload(error.details.map((err) => err.message)));
    }
  };
}
