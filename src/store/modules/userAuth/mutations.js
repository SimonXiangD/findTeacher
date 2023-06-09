export default {
    setUser(state, payLoad) {
        state.token = payLoad.token
        state.userId = payLoad.userId
        state.expiration = payLoad.expiration
        localStorage.setItem('expiresIn', new Date().getTime() + 1000 * 60 * 60)
    }
}