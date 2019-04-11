// const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../knexfile')['development'];    // require environment's settings from knexfile
const knex = require('knex')(configuration); 

module.exports = async (context) => {
    const result = await knex.select('*').from('users').where('user', 'like', '%'+context.query.name+'%');
    context.body = result || {message: 'Not Found'};
}
