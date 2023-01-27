import {
  AnswerRequestType,
  FamilyCreationType,
  UserValidated,
} from "@protocols";
import {
  createFamily,
  familyRequests,
  requestToEnterFamily,
  verifyAnswer,
} from "@services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function enterFamily(req: Request, res: Response) {
  const { ownerId } = req.params;
  const { userId } = res.locals.user as UserValidated;
  try {
    const enterFamilyRequest = await requestToEnterFamily(
      userId,
      Number(ownerId)
    );
    res.status(httpStatus.CREATED).send(enterFamilyRequest);
  } catch (error) {
    return res.status(httpStatus.CONFLICT).send(`${error}`);
  }
}

export async function postFamily(req: Request, res: Response) {
  const { familyName } = req.body as FamilyCreationType;
  const { userId } = res.locals.user as UserValidated;
  try {
    const createdFamily = await createFamily(familyName, userId);
    res.status(httpStatus.CREATED).send(createdFamily);
  } catch (error) {
    res.status(httpStatus.CONFLICT).send(error);
  }
}

export async function getAllRequests(req: Request, res: Response) {
  const { userId } = res.locals.user as UserValidated;
  try {
    const myFamilyRequests = await familyRequests(userId);
    res.status(httpStatus.OK).send(myFamilyRequests);
  } catch (error) {
    res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function answerFamilyRequest(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals.user as UserValidated;
  const { answer } = req.body as AnswerRequestType;
  try {
    await verifyAnswer(answer, Number(id), userId);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(`${error}`);
  }
}
