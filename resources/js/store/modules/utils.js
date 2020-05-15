export function loginPage (e, commit) {
    if (e.response && e.response.status && e.response.status == '401') {
      if (window.location.href.includes('/login')==false) {
        commit('auth/LOGOUT')
        window.location.href = '/'
      }
    }
  }