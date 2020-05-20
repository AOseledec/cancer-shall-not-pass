const state = () => ({
  popupShow: false,
});

const mutations = {
  togglePopup(state) {
    return (state.popupShow = !state.popupShow);
  },
};

const getters = {
  getPopupShow(state) {
    return state.popupShow;
  },
};

export { state, mutations, getters };
