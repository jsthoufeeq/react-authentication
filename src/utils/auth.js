const auth = {
  isAuthenticated: false,
  token: null,
  setToken(token) {
    this.isAuthenticated = true
    this.token = token;
  },
  getToken() {
    this.isAuthenticated = true
    return this.token;
  },
  signout() {
    this.isAuthenticated = false
    this.token = null
  }
}

export default auth;
