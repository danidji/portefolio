import {StateCreator} from 'zustand'

type State = {}
type Action = {}
export type AppSlice = State & Action

const createAppSlice: StateCreator<AppSlice> = set => ({})

export default createAppSlice
