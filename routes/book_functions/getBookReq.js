const getBookReq = (req) => {

  const payload = {

    name: req.body.name,

    author: req.body.author,

    bookId: req.params.bookId,

    userId: req.user.userId,
    
  }

  return payload

}

module.exports = getBookReq 
