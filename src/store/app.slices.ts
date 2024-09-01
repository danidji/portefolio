import {StateCreator} from 'zustand'

import {EMenuItems} from '@/models'

type State = {
  actualLocation: EMenuItems | null
}
type Action = {
  setActualLocation: (location: EMenuItems) => void
}
export type AppSlice = State & Action

const createAppSlice: StateCreator<AppSlice> = set => ({
  actualLocation: null,
  setActualLocation: location => set({actualLocation: location}),
})

export default createAppSlice
