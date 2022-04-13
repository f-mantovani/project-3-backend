const getUserReq = (req) => {
    const payload = {

      name: req.body.name,
  
      email: req.body.email,

      userId: req.user.userId
  
    }
  
    return payload
  }

module.exports = getUserReq