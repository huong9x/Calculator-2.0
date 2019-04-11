module.exports = async (context, next) => {

    if(!context.query.name){
        context.body = 'Input is required!'
    }else {
        await next(); 
    }
    
}
