const getUserReq = ({ body, user, file, params }) => {

    const payload = {

      name: body.name,
  
      email: body.email,

      status: body.status,

      oldStatus: body.oldStatus,

      userId: user.userId,

      bookId: params.bookId,

      path: file ? file.path : null
  
    }
  
    return payload
    
  }

module.exports = getUserReq