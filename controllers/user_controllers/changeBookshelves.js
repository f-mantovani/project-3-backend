const changeBookshelves = (user, bookId, status, oldStatus ) => {
  const userMinusOld = user[oldStatus].filter((book) => book.toString() !== bookId)
  user[oldStatus] = userMinusOld
  const verifyBook = user[status].map((book) => book._id.toString()).indexOf(bookId)
  if (verifyBook === -1) {
    user[status].push(bookId)
  }
  return user
}

module.exports = changeBookshelves