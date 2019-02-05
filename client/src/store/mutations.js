export const mutations = {
    setUser: (state, payload) => state.user = payload,
    setCategories: (state, payload) => state.categories = payload,
    setLoading: (state, payload) => state.loading = payload,
    clearUser: state => state.user = null
};