"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";

const createUsernameSchema = z.object({
  slug: z.string().min(1, "Slug do creator é obrigatório"),
  name: z.string().min(1, "O nome precisa ter pelo menos 1 letra."),
  message: z.string().min(5, "A mensagem precisa ter pelo menos 5 letras"),
  price: z.number().min(1500, "Selecione um valor maior que R$15"),
  creatorId: z.string(),
});

type CreatePaymentSchema = z.infer<typeof createUsernameSchema>;

export async function createPayment(data: CreatePaymentSchema) {
  const schema = createUsernameSchema.safeParse(data);

  if (!schema.success) {
    return {
      data: null,
      error: schema.error.issues[0].message,
    };
  }

  try {
    console.log(data);
  } catch (err) {
    return {
      data: null,
      error: "Falha ao criar o pagamento, tente mais tarde",
    };
  }
}
