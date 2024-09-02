import {StateCreator} from 'zustand'

import {EMenuItems, THeaderContent} from '@/models'

type State = {
  actualLocation: EMenuItems | null
  headerContent: THeaderContent | null
}
type Action = {
  setActualLocation: (location: EMenuItems) => void
  setHeaderContent: (content: THeaderContent | null) => void
}
export type AppSlice = State & Action

const createAppSlice: StateCreator<AppSlice> = set => ({
  actualLocation: null,
  setActualLocation: location => set({actualLocation: location}),
  headerContent: null,
  setHeaderContent: content => set({headerContent: content}),
})

export default createAppSlice
