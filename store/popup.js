export const state = () => ({
  popupShow: false,
});

export const mutations = {
  togglePopup(state) {
    return (state.popupShow = !state.popupShow);
  },
};

export const getters = {
  getPopupShow(state) {
    return state.popupShow;
  },
};
