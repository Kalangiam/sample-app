const ApiRoutes = {
    USER_REGISTER: {
        path: '/users/register',
        authenticate: false
    },
    USER_LOGIN: {
        path: '/users/login',
        authenticate: false
    },
    FORGET_PASSWORD: {
        path: '/users/forget-password',
        authenticate: false
    },
    RESET_PASSWORD: {
        path: '/users/reset-password',
        authenticate: false
    }
}

export default ApiRoutes