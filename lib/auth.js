import bcrypt from "bcryptjs"
import { prisma } from "./prisma"

export async function hashPassword(password) {
  return await bcrypt.hash(password, 12)
}

export async function verifyPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword)
}

export async function createUser(email, name, password) {
  const hashedPassword = await hashPassword(password)

  return await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      role: "user",
    },
  })
}

export async function getUserByEmail(email) {
  return await prisma.user.findUnique({
    where: { email },
  })
}
