export default class AuthService {
    isAuth = false

    signIn() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.isAuth = true
                resolve('Connected')
            }, 2000)
        })
    }

    signOut() {
        this.isAuth = false
    }
}