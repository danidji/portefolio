import {CredentialsSignin, NextAuthConfig} from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import {compare} from 'bcryptjs'

import prisma from '@/lib/prisma'

export default {
  providers: [
    Credentials({
      name: 'Credentials',

      credentials: {
        email: {label: 'Email', type: 'email'},
        password: {label: 'Password', type: 'password'},
      },

      authorize: async credentials => {
        const email = credentials.email as string | undefined
        const password = credentials.password as string | undefined

        if (!email || !password) {
          throw new CredentialsSignin('Please provide both email & password')
        }

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        })

        if (!user) {
          throw new Error('Invalid email or password')
        }

        if (!password) {
          throw new Error('Invalid email or password')
        }

        const isMatched = await compare(password, user.password)

        if (!isMatched) {
          throw new Error('Password did not matched')
        }

        const userData = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        }

        return userData
      },
    }),
  ],
} satisfies NextAuthConfig
