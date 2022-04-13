const getUserReq = (req) => {
    const info = {

      name: req.body.name,
  
      email: req.body.email,

      userId: req.user.userId
  
    }
  
    return info
  }

module.exports = getUserReq