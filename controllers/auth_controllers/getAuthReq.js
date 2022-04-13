const getAuthReq = (req) => {

  const payload = {

    name: req.body.name,

    email: req.body.email,

    password: req.body.password
    
  }

  return payload

}

module.exports = getAuthReq 