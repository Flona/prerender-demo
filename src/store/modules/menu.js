const state = {
    styleType: 'dark'
};

const mutations = {
    CHANGE_MENU_STYLE_TYPE: (state, type) => {
        state.styleType = type;
    }
};

const actions = {
    changeMenuStyleType({ commit }, type) {
        commit('CHANGE_MENU_STYLE_TYPE', type);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
