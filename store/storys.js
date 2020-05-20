import axios from 'axios';

export const state = () => ({
  storys: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  async fetchStorys(state) {
    return await axios
      .get('api-test.p7lux.ru/streams')
      .then(res =>
        state.commit('setState', { name: 'storys', value: res.data })
      )
      .catch(err => new Error(err));
  },
};

export const getters = {
  getStorys(state) {
    return state.storys;
  },
};
