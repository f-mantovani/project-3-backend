const getUserReq = ({ body, user, file }) => {

    const payload = {

      name: body.name,
  
      email: body.email,

      userId: user.userId,

      path: file ? file.path : null
  
    }
  
    return payload
    
  }

module.exports = getUserReq