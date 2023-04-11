import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";
import { Users } from "@prisma/client";
import prisma from "config/database";

export async function createUser(params: Partial<Users> = {}): Promise<Users> {
  const incomingPassword = params.password || faker.internet.password(6);
  const hashedPassword = await bcrypt.hash(incomingPassword, 4);

  return prisma.users.create({
      data: {
          name: faker.name.firstName(),
          email: params.email || faker.internet.email(),
          password: hashedPassword,
      }
  });
}

export async function createSession(token: string) {
  const user = await createUser();

  return ({
    data: {
      token: token,
      userId: user.id,
    }
  });
}