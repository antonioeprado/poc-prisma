import { Families, userFamilyRelations } from "@prisma/client";
import { FamilyRequestsType } from "@protocols";
import {
  registerRequestToEnter,
  findUserFamilies,
  findOwnedFamily,
  registerNewFamily,
  getAllFamilyRequests,
  AcceptRequest,
  DenyRequest,
} from "@repositories";

export async function requestToEnterFamily(
  userId: number,
  ownerId: number
): Promise<userFamilyRelations> {
  const error = await verifyIfMember(userId, ownerId);
  if (error.status) throw new Error(error.message);
  await verifyIfOwner(userId);
  return registerRequestToEnter(userId, ownerId);
}

export async function verifyIfMember(userId: number, ownerId: number) {
  const alreadyInFamily = await findUserFamilies(userId);
  const error = { status: false, message: "" };
  alreadyInFamily.forEach((family) => {
    if (family.familyOwner === ownerId && !family.request) {
      error.status = true;
      error.message = `You're already a member of ${family.Family.familyName}`;
      return;
    } else if (family.familyOwner === ownerId && family.request) {
      error.status = true;
      error.message = `You already sent a request to join ${family.Family.familyName}`;
      return;
    }
  });
  return error;
}

export async function verifyIfOwner(userId: number): Promise<boolean> {
  const ownedFamily = await findOwnedFamily(userId);
  if (ownedFamily) return true;
  return false;
}

export async function createFamily(
  familyName: string,
  ownerId: number
): Promise<Families> {
  const error = await verifyIfOwner(ownerId);
  if (error) throw new Error("You can only own one family!");
  const newFamily = await registerNewFamily(familyName, ownerId);
  return newFamily;
}

export async function familyRequests(
  userId: number
): Promise<FamilyRequestsType[]> {
  const familyRequests = await getAllFamilyRequests(userId);
  if (!familyRequests) throw new Error();
  return familyRequests;
}

export async function verifyAnswer(
  answer: string,
  requestId: number,
  userId: number
) {
  const owner = await verifyIfOwner(userId);
  if (!owner) {
    throw new Error("You're not the owner of this family!");
  } else if (answer === "accept") {
    AcceptRequest(requestId, false);
  } else if (answer === "deny") {
    DenyRequest(requestId);
  } else {
    throw new Error("Invalid answer!");
  }
}
