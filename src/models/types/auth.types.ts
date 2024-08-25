import {z} from 'zod'
import {RegisterSchema} from '../schemas/auth.schemas'

export type TRegister = z.infer<typeof RegisterSchema>
