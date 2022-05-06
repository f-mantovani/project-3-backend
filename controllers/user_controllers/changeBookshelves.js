const changeBookshelves = (user, bookId, status, oldStatus ) => {
  const userRemoveToRead = user.booksToRead.filter((book) => book._id.toString() !== bookId)
  user.booksToRead = userRemoveToRead
  const userRemoveReading = user.booksReading.filter((book) => book._id.toString() !== bookId)
  user.booksReading = userRemoveReading
  const userRemoveDone = user.booksDone.filter((book) => book._id.toString() !== bookId)
  user.booksDone = userRemoveDone
  const verifyBook = user[status].map((book) => book._id.toString()).indexOf(bookId)
  if (verifyBook === -1) {
    user[status].push(bookId)
  }
  return user
}

module.exports = changeBookshelves