import {create} from 'zustand'

import createAppSlice, {AppSlice} from './app.slices'

type StoreType = AppSlice

const useAppStore = create<StoreType>()((...a) => ({
  ...createAppSlice(...a),
}))

export default useAppStore
