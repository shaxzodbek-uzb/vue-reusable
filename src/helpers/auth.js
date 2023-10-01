import driverHttpAxios from '@websanova/vue-auth/src/drivers/http/axios.1.x.js';
import driverRouterVueRouter from '@websanova/vue-auth/src/drivers/router/vue-router.2.x.js';
import { createAuth } from '@websanova/vue-auth/src/v3.js';
import { api } from '@/helpers/axios';
// import { useModuleStore } from '@/store/modules';

export default (app, router) => {

    app.use(createAuth({
        plugins: {
            http: api,
            router: router,
        },
        drivers: {
            http: driverHttpAxios,
            auth: {
                request: function (req, token) {
                    this.drivers.http.setHeaders.call(this, req, {
                        Authorization: 'Bearer ' + token
                    });
                },
                response: function (res) {
                    return res.data.access_token;
                }
            },
            router: driverRouterVueRouter,
        },
        options: {
            authRedirect: { path: '/login' },
            forbiddenRedirect: { path: '/403' },
            notFoundRedirect: { path: '/' },
            tokenDefaultKey: 'access_token',
            // tokenImpersonateKey: 'access_token',
            rolesKey: 'type',
            notFoundRedirect: { name: 'not-fount' },
            registerData: { url: 'auth/register', method: 'POST', redirect: '/login', autoLogin: true },
            loginData: { url: 'auth/login', method: 'POST', redirect: '/', fetchUser: true, staySignedIn: true },
            logoutData: { url: 'auth/logout', method: 'POST', redirect: '/login', makeRequest: false },
            fetchData: { url: 'auth/me', method: 'GET', enabled: true },
            refreshData: { url: 'auth/refresh', method: 'GET', enabled: false, interval: 30 },
            impersonateData: { url: 'auth/impersonate', method: 'POST', redirect: '/', fetchUser: true },
            unimpersonateData: { url: 'auth/unimpersonate', method: 'POST', redirect: '/admin', fetchUser: true, makeRequest: false },
            oauth2Data: { url: 'auth/social', method: 'POST', redirect: '/', fetchUser: true },
            parseUserData: (data) => {
                // const store = useModuleStore()
                // store.setModuleState(data.modules)
                return data.user || {}
            }
        }
    }));
}