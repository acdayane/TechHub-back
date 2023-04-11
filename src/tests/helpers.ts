import * as jwt from "jsonwebtoken";
import { Users } from "@prisma/client";
import { createSession, createUser } from "./factories/usersFactory";
import prisma from "config/database";

export async function cleanDb() {
  await prisma.users.deleteMany({});
  await prisma.comments.deleteMany({});
}

export async function generateValidToken(user?: Users) {
  const incomingUser = user || (await createUser());
  const token = jwt.sign({ userId: incomingUser.id }, process.env.JWT_SECRET);

  await createSession(token);

  return token;
}