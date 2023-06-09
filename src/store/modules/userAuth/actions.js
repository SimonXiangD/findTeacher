export default {
    async login(context, payLoad) {
        const api_key = 'AIzaSyDa-gUqM9dxkm7RtTTGXSu2UYvxeTrpJtg'
        return await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api_key}`,
            {
                method: 'POST',
                body: JSON.stringify({
                    email: payLoad.email,
                    password: payLoad.password,
                    returnSecureToken: true,
                })
            })
            .then(d => d.json())
            .then(response => {
                console.log(response)
                // console.log('妈妈生的2')
                if (response.error) {
                    return Promise.resolve({
                        error: true,
                        errorMessage: response.error.message || '验证失败'
                    })
                }
                else {
                    context.commit('setUser', {
                        token: response.idToken,
                        expiration: response.expiresIn,
                        userId: response.localId
                    })

                    localStorage.setItem('token', response.idToken)
                    localStorage.setItem('userId', response.localId)

                    return Promise.resolve({
                        error: false
                    })
                }
                // console.log(response)
            })

    },

    async signup(context, payLoad) {
        const api_key = 'AIzaSyDa-gUqM9dxkm7RtTTGXSu2UYvxeTrpJtg'
        return await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api_key}`,
            {
                method: 'POST',
                body: JSON.stringify({
                    email: payLoad.email,
                    password: payLoad.password,
                    returnSecureToken: true,
                })
            })
            .then(d => d.json())
            .then(response => {
                console.log(response)
                // console.log('妈妈生的2')
                if (response.error) {
                    return Promise.resolve({
                        error: true,
                        errorMessage: response.error.message || '验证失败'
                    })
                }
                else {
                    context.commit('setUser', {
                        token: response.idToken,
                        expiration: response.expiresIn,
                        userId: response.localId
                    })

                    localStorage.setItem('token', response.idToken)
                    localStorage.setItem('userId', response.localId)

                    return Promise.resolve({
                        error: false
                    })
                }
                // console.log(response)
            })
        // .catch(
        //     err => {
        //         // console.log(err.message)
        //         // setTimeout(() => {
        //         console.log(err)
        //         // throw err;
        //         // }, 0)
        //     }
        // )


    },


    tryLogin(context) {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        const curTime = new Date().getTime();
        if (curTime > localStorage.getItem('expiresIn')) {
            alert('登录已超时！')
            return;
        }
        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId,
                expiration: null,
            })
        }
    },

    logout(context) {
        context.commit('setUser', {
            token: null,
            userId: null,
            expiration: null,
        })
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
    }

}