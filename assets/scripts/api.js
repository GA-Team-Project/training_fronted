const store = require('./store')
const config = require('./config')

const getBooks = function () {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET'
  })
}

const showBook = function (data) {
  return $.ajax({
    url: config.apiUrl + '/books/' + data.book.id,
    method: 'GET',
    data
  })
}

const createBook = function (data) {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'POST',
    data
  })
}

const destroyBook = function (id) {
  return $.ajax({
    url: config.apiUrl + `/books/` + id,
    method: 'DELETE'
  })
}

const updateBook = function (data) {
  return $.ajax({
    url: config.apiUrl + '/books/' + data.books.id,
    method: 'PATCH',
    data
  })
}

module.exports = {
  getBooks,
  showBook,
  createBook,
  destroyBook,
  updateBook
}