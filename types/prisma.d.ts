import { Prisma } from "@prisma/client";

declare global {
  namespace PrismaJson {
    type UserCreateInput = Prisma.UserCreateInput;
    type UserUpdateInput = Prisma.UserUpdateInput;
    type User = Prisma.User;
  }
}
