import { create } from 'zustand'
import {devtools, persist} from 'zustand/middleware'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))


const useAppStore = create(
    devtools(
        persist(useStore, {
            name: "count",
        })
    )
)


export default useAppStore; 