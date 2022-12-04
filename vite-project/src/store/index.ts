import { defineStore } from 'pinia'
import { Names } from './store-name'

export const useTestStore = defineStore(Names.TEST, {
  state: () => {
    return {
      current: 1,
      name: 'aibo',
    }
  },
  getters: {
  },
  actions: {
  }
})

