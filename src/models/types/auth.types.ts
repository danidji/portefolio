import {z} from 'zod'
import {LoginSchema, RegisterSchema} from '../schemas/auth.schemas'

export type TRegister = z.infer<typeof RegisterSchema>

export type TLogin = z.infer<typeof LoginSchema>
