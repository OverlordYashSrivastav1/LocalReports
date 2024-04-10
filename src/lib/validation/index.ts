import { z } from "zod"

export const SignUpValidation = z.object({
    name: z.string().min(2, {message: "atleast 3 chars"}),
    username: z.string().min(2,{message: "atleast 2 chars"}),
    email: z.string().min(8,{message: "atleast 8 chars"}),
    password: z.string().min(8,{message: "atleast 8 chars"}),
  }) 