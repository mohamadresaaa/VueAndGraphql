import store from './store';

// access control level
export const adminLevel = (to, from, next) => {
    if(store.getters.user && store.getters.user.role === 'admin')
        return next();
    return next({ path: '/sign_in' });
};