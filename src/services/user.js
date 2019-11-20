'use strict';

import store from '../store';

export async function login() {
    // ...
    const userToken = Math.random() + '';
    localStorage.setItem('userToken', userToken);
    store.commit('setUserToken', userToken);
}
