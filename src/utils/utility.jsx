import { z } from "zod";


export const schema = z.object({
    recipient: z
      .string()
      .min(1, "Recipient address is required")
      .regex(/^0x[a-fA-F0-9]{40}$/, "Invalid Ethereum address"),
    amount: z
      .string()
      .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
        message: "Amount must be a positive number",
      }),
  });