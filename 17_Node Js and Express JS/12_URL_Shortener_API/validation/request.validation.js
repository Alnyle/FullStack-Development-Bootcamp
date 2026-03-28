import { object, z } from 'zod';


const passwordValidation = z
    .string()
    .min(8, { message: "Password should have minimum of 8 characters" })
    .max(15, { message: "Password is too long" })
    .regex(/^(?=.*[A-Z]).{8,}$/, {
    message:
      "Should Contain at least one uppercase letter and have a minimum length of 8 characters.",
  });

const emailValidation = z.email({ message: "Invalid email address" });

export const signupPostRequestBodySchema = z.object({
    firstname: z.string(),
    lastname: z.string().optional(),
    email: emailValidation,
    password: passwordValidation,
})

export const loginPostRequestBodySchema = z.object({
    email: emailValidation,
    password: passwordValidation,
})


export const shortenPostRequestBodySchema = z.object({
    url: z.url(),
    code: z.string().optional(),
})