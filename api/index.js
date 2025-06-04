const fastify = require('fastify')({logger:true});

const runMigrations = require('./db/migrate');

async function start(){

    try{
        await runMigrations();

        fastify.get('/', async (requestAnimationFrame, reply) => { 
            return{status: 'Servidor On'};
        });
        
        await fastify.listen({port: 3000});
        
        console.log("On na porta http://localhost:3000")
    }
    catch(err){
        console.log("erro")
        console.error(err)
        process.exit(1)
    }
}
start()