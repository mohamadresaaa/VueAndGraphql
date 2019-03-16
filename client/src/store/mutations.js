export default {
    setUser: (state, payload) => state.user = payload,
    clearUser: state => state.user = null,
    setCategories: (state, payload) => state.categories = payload,
    setTodos: (state, payload) => state.todos = payload,
    setNotes: (state, payload) => state.notes = payload,
    setLoading: (state, payload) => state.loading = payload,
    setAuthError: (state, payload) => state.authError = payload,
    setMessage: (state, payload) => state.message = payload,
    clearMessage: state => state.message = null
};