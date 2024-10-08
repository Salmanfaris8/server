// import json-serve
const jsonServer = require('json-server')

// create server
const mpSrever = jsonServer.create()

// set up path for db.json file
const router = jsonServer.router("db.json")

// create middleware
const middleware = jsonServer.defaults()

// define a port for running json file
const PORT = 3000 || Process.env.PORT

// use middleware ,router 
mpSrever.use(middleware)
mpSrever.use(router)

// run server in given to resolve client request 
mpSrever.listen(PORT,()=>{
    console.log(`MP sever is started at port ${PORT} and waiting for client request!!!`);
})