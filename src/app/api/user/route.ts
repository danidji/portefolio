import {NextResponse} from 'next/server'

import {auth} from '@/auth'
import prisma from '@/lib/prisma'

export async function GET() {
  const session = await auth()

  if (!session?.user?.email) {
    return NextResponse.json({error: 'User not authenticated'}, {status: 401})
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  })

  if (!user) {
    return NextResponse.json({error: 'User not found'}, {status: 404})
  }

  const {password, ...userWithoutPassword} = user

  return NextResponse.json(userWithoutPassword)
}
