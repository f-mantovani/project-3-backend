const getAuthReq = ({ body }) => {

  const payload = {

    name: body.name,

    email: body.email,

    password: body.password
    
  }

  return payload

}

module.exports = getAuthReq 