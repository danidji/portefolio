import {StateCreator} from 'zustand'

import {TUser} from '@/models'

type State = {
  user: TUser | null
}
type Action = {
  setUser: (user: TUser) => void
  clearUser: () => void
}

export type UserSlice = State & Action

const createUserSlice: StateCreator<UserSlice> = set => ({
  user: null,
  setUser: user => set({user}),
  clearUser: () => set({user: null}),
})

export default createUserSlice
