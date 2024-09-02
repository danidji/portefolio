import {create} from 'zustand'

import createAppSlice, {AppSlice} from './app.slices'
import createUserSlice, {UserSlice} from './user.slices'

type StoreType = AppSlice & UserSlice

const useAppStore = create<StoreType>()((...a) => ({
  ...createAppSlice(...a),
  ...createUserSlice(...a),
}))

export default useAppStore
