import { defineStore } from 'pinia';
import {
  Sender,
  Receiver,
  Position,
  Company,
  Introduction,
  Behavior,
  Conclusion,
  Experience,
} from './schemas/StateSchema';

export const useCounterStore = defineStore('coverLetter', {
  state: () => ({
    reciver: {
      name: 'reciver',
      value: 'Human Resource',
      defaultValue: 'Human Resource',
      inputType: 'input',
      icon: 'setting',
      description: '',
    } as Receiver,
    position: {
      name: 'position',
      value: '',
      defaultValue: '',
      inputType: 'input',
      icon: 'setting',
      description: '',
    } as Position,
    company: {
      name: 'company',
      value: '',
      defaultValue: '',
      inputType: 'input',
      icon: 'setting',
      description: '',
    } as Company,
    introduction: {
      name: 'introduction',
      value: '',
      defaultValue: '',
      inputType: 'editor',
      icon: 'setting',
      description: '',
    } as Introduction,
    experience: {
      name: 'experience',
      value: '',
      defaultValue: '',
      inputType: 'editor',
      icon: 'setting',
      description: '',
    } as Experience,
    behavior: {
      name: 'behavior',
      value: '',
      defaultValue: '',
      inputType: 'editor',
      icon: 'setting',
      description: '',
    } as Behavior,
    conclusion: {
      name: 'conclusion',
      value: '',
      defaultValue: '',
      inputType: 'editor',
      icon: 'setting',
      description: '',
    } as Conclusion,
    sender: {
      name: 'sender',
      value: 'Jiaan (Wilson) Nie',
      defaultValue: 'Jiaan (Wilson) Nie',
      inputType: 'input',
      icon: 'setting',
      description: '',
    } as Sender,
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
    resetToDefault(state) {
      return (state.sender.value = state.sender.defaultValue);
    },
  },
});
