import { prisma } from "@config";
import { Families, PrismaPromise, userFamilyRelations } from "@prisma/client";
import { FamilyRequestsType, userFamiliesType } from "@protocols";

export function findUserFamilies(
  userId: number
): PrismaPromise<userFamiliesType[]> {
  return prisma.userFamilyRelations.findMany({
    select: {
      familyOwner: true,
      Family: { select: { familyName: true } },
      request: true,
    },
    where: { userId },
  });
}

export function findOwnedFamily(userId: number) {
  return prisma.userFamilyRelations.findFirst({
    select: { Family: true },
    where: { familyOwner: userId },
  });
}

export function registerRequestToEnter(
  userId: number,
  ownerId: number
): PrismaPromise<userFamilyRelations> {
  return prisma.userFamilyRelations.create({
    data: {
      familyOwner: ownerId,
      userId,
    },
  });
}

export function registerNewFamily(
  familyName: string,
  familyOwner: number
): PrismaPromise<Families> {
  return prisma.families.create({
    data: {
      familyName,
      familyOwner,
    },
  });
}

export function getAllFamilyRequests(
  userId: number
): PrismaPromise<FamilyRequestsType[]> {
  return prisma.userFamilyRelations.findMany({
    select: { id: true, User: { select: { name: true } }, createdAt: true },
    where: { familyOwner: userId, request: true },
  });
}

export function AcceptRequest(requestId: number, answer: boolean) {
  prisma.userFamilyRelations.updateMany({
    where: { id: requestId, request: true },
    data: { request: answer },
  });
}

export function DenyRequest(requestId: number) {
  prisma.userFamilyRelations.deleteMany({
    where: { id: requestId, request: true },
  });
}
