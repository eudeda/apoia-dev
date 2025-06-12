"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";

const createUsernameSchema = z.object({
  username: z.string({ message: "O nome de usuário é obrigatório" }),
});

type CreateUsernameSchema = z.infer<typeof createUsernameSchema>;

export async function getInfoUser(data: CreateUsernameSchema) {
  const schema = createUsernameSchema.safeParse(data);

  if (!schema.success) {
    return null;
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        username: data.username,
      },
      select: {
        id: true,
        name: true,
        username: true,
        bio: true,
        image: true,
        connectedStripeAccountId: true,
      },
    });

    return user;
  } catch (err) {
    return null;
  }
}
