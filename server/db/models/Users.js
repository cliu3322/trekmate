const bookshelf = require('./bookshelf.js')

const Users = bookshelf.Model.extend({
  tableName: 'users',
  idAttribute: 'id',
  hasTimestamps: true
})



//Users database can now be used with JS
module.exports = Users