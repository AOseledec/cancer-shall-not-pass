export const state = () => ({
  quiz: {},
});

export const mutations = {};

export const getters = {
  getPopupShow(state) {
    return state.quiz;
  },
};
