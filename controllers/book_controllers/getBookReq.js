const getBookReq = ({ body, params, user, file }) => {

  const payload = {

    name: body.name,

    author: body.author,

    search: body.search,

    bookId: params.bookId,

    userId: user.userId,

    path: file ? file.path : null
    
  }

  return payload

}

module.exports = getBookReq 
