const bookSearch = (bookList, searchParam) => {
  return bookList.filter((book) => book.name.toLowerCase().includes(searchParam.toLowerCase()))
}

module.exports = bookSearch