const validateSignup = ( name, email, password ) => {
  if(!name || !email || !password) {
    const error = new Error
    error.status = 400
    error.message = "Alls fields are required"
    throw error
  }
  return
}
const verifyCredentials = ( credential, status,message) => {
  if(credential) {
    const error = new Error
    error.status = status
    error.message = message
    throw error
  }
  return
}

module.exports = { validateSignup, verifyCredentials }