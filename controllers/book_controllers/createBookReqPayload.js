const createBookReqPayload = (req) => {
  const info = {
    name: req.body.name,

    author: req.body.author,

    bookId: req.params.bookId,

    userId: req.user.userId,
  }

  return info
}

module.exports = { createBookReqPayload }
