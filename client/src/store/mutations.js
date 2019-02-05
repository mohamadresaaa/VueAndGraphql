export default {
    setUser: (state, payload) => state.user = payload,
    clearUser: state => state.user = null,
    setCategories: (state, payload) => state.categories = payload,
    setLoading: (state, payload) => state.loading = payload,
    setError: (state, payload) => state.error = payload,
    clearError: state => state.error = null
};