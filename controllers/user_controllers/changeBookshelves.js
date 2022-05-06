const changeBookshelves = (user, bookId, status, oldStatus ) => {
  const userMinusOld = user[oldStatus].filter((book) => book.toString() !== bookId)
  user[oldStatus] = userMinusOld
  user[status].push(bookId)
  console.log(user)
  return user
}

module.exports = changeBookshelves