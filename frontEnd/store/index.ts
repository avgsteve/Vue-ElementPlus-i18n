import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  locale: string
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      count: 0,
      locale: 'en'
    }
  },
  getters: {
    getCurrentLocale(state) {
      return state.locale;
    }
  },
  actions: {
    changeLocalAction({ commit }, locale) {
      console.log('changeLocalAction: ', locale);
      commit('changeLocale', locale);
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    changeLocale(state, payload) {
      console.log('changeLocale payload: ', payload);
      state.locale = payload;
    }
  }
})