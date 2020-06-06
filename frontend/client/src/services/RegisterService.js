import Api from '@/services/Api'
export default {
  register (credentials) {
    console.log('you are in register api')
    return Api().post('register', credentials)
  }
}
