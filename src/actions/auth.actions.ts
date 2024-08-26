'use server'

import prisma from '@/lib/prisma'
import {EErrorCode, TRegister} from '@/models'
import {hash} from 'bcryptjs'

export const registerUser = async (data: TRegister) => {
  const {email, password, firstname, lastname} = data

  try {
    const existingUser = await prisma.user.findFirst()

    if (existingUser) {
      return {
        error: EErrorCode.ALREADY_USER,
      }
    }

    const hashedPassword = await hash(password, 10)

    await prisma.user.create({
      data: {
        email,
        firstName: firstname,
        lastName: lastname,
        password: hashedPassword,
      },
    })
  } catch (error: any) {
    return {
      error: error.message,
    }
  }
}
