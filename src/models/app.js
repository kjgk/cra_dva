/* global window */
/* global document */
/* global location */
/* eslint no-restricted-globals: ["error", "event"] */

export default {
  namespace: 'app',
  state: {

  },
  subscriptions: {


  },
  effects: {

    * fetch (action, { put, select }) {
      const { app } = yield (select(_ => _))
    },

  },
  reducers: {
    updateState (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },

  },
}
