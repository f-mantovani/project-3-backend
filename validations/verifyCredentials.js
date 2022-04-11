const verifyCredentials = (credential, status, message) => {
  if(credential) {
    const error = new Error
    error.status = status
    error.message = message
    throw error
  }
  return
}

module.exports = { verifyCredentials }