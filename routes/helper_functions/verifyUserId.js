const verifyUserId = (credential, message) => {
  if (!credential) {
    const error = new Error()

    error.status = 401

    error.message = message

    throw error
  }

  return
}

module.exports = { verifyUserId }
