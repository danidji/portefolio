'use server'

import {signIn} from '@/auth'
import prisma from '@/lib/prisma'
import {EErrorCode, TLogin, TRegister} from '@/models'
import {hash} from 'bcryptjs'
import {CredentialsSignin} from 'next-auth'

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

export const loginUser = async (data: TLogin) => {
  const {email, password} = data

  try {
    await signIn('credentials', {
      redirect: false,
      // redirectTo: '/backoffice/dashboard',
      callbackUrl: '/',
      email,
      password,
    })
  } catch (error) {
    console.log('error', error)

    const someError = error as CredentialsSignin
    console.log('someError', someError)

    return someError.cause
  }
}
