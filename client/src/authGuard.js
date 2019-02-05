import store from './store';

// check for valid token
export default (to, from, next) => {
    if(store.getters.user)
        return next();

    next({ path: '/sign_in' });
};