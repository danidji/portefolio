import z from 'zod'

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstname: z.string().min(2),
  lastname: z.string().min(2),
})

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})
