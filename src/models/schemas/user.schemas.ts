import {z} from 'zod'

export const UpdateUserSchema = z.object({
  title: z.string().min(2),
  bio: z.string().min(2),
})
