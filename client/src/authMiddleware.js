import store from './store';

// if the user has not been authenticated, show signIn, signUp, forgotPassword, resetPassword
export const beforeAuthenticate = (to, from, next) => {
    if(!store.getters.user)
        return next();

    next({ path: '/' });
};

// after signIn check for valid token
export const afterAuthenticate = (to, from, next) => {
    if(store.getters.user)
        return next();

    next({ path: '/sign_in' });
};