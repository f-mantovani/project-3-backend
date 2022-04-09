const validateSignup = ( name, email, password ) => {
  if(!name || !email || !password) {
    const error = new Error
    error.status = 400
    error.message = "Alls fields are required"
    throw error
  }
  return
}
const checkingUserExistence = ( user ) => {
  if(user) {
    const error = new Error
    error.status = 400
    error.message = "User already exists"
    throw error
  }
  return
}

module.exports = { validateSignup, checkingUserExistence}