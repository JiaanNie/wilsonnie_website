import { stat } from 'fs';
import { defineStore } from 'pinia';
import { Sender } from './schemas/StateSchema';

export const useCounterStore = defineStore('coverLetter', {
  state: () => ({
    sender: {
      value: 'Human Resource',
      defaultValue: 'Human Resource'
    } as Sender

  }),

  getters: {
    doubleCount (state) {
      return state.counter * 2;
    },
    resetToDefault (state) {
      return state.sender.value = state.sender.defaultValue
    }

  },

  actions: {
    increment () {
      this.counter++;
    }
  }
});
