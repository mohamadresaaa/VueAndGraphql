export default {
    setUser: (state, payload) => state.user = payload,
    clearUser: state => state.user = null,
    setCategories: (state, payload) => state.categories = payload,
    setTodos: (state, payload) => state.todos = payload,
    setLoading: (state, payload) => state.loading = payload,
    setError: (state, payload) => state.error = payload,
    setAuthError: (state, payload) => state.authError = payload,
    clearError: state => state.error = null
};