import {
  answerFamilyRequest,
  enterFamily,
  getAllRequests,
  postFamily,
} from "@controllers";
import { Router } from "express";

const familiesRouter = Router();

familiesRouter.post("/create", postFamily);
familiesRouter.post("/enter/:ownerId", enterFamily);
familiesRouter.get("/requests", getAllRequests);
familiesRouter.patch("/requests/:id", answerFamilyRequest);

export { familiesRouter };
