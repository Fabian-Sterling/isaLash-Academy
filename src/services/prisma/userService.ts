import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient();

export async function createUser(email: string, password: string) {
  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return newUser;
}

