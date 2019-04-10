const knex = require('knex')({
    dialect: 'sqlite3',
    connection: {
      filename: './data.db'
    }
  });
   
  // Create a table
  knex.schema.createTable('users', function(table) {
    table.increments('id');
    table.string('user_name');
  })
   
   
  // Then query the table...
  .then(function() {
    return knex.insert({user_name: 'Huong'}).into('users');
  })

   
  // Finally, add a .catch handler for the promise chain
  .catch(function(e) {
    console.error(e);
  });