'use server'
import {auth} from '@/auth'
import prisma from '@/lib/prisma'

export async function getUserDetails() {
  const session = await auth()

  if (!session?.user?.email) {
    throw new Error('User not authenticated')
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  })

  if (!user) {
    throw new Error('User not found')
  }

  const {password, ...userWithoutPassword} = user

  return userWithoutPassword
}
