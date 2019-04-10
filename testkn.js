const Koa = require('koa');
const app = new Koa();

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'nodeApp',
      password : 'nodeApp',
      database : 'training'
    }
});

const findUser = async (context, next) => {

    if(!context.query.name){
        context.body = 'Input is required!'
    }else {
        await next(); 
    }
    
}

const run = async (context) => {
    const result = await knex.select('*').from('users').where('user', 'like', '%'+context.query.name+'%');
    context.body = result || {message: 'Not Found'};
}


app.use(findUser);
app.use(run);
app.listen(2005);