const getBookReq = ({ body, params, user, file }) => {

  const payload = {

    name: body.name,

    author: body.author,

    year: body.year,

    sinopsis: body.sinopsis,

    search: params.search,

    bookId: params.bookId,

    userId: user.userId,

    path: file ? file.path : null
    
  }

  return payload

}

module.exports = getBookReq 
