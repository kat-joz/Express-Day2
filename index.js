let nbs = require ("express")
let server = nbs()

function Swindon (request, response){
    response.send("Hello")
}

function Manchester (request, response){
    response.send("World")
}

server.get('/nbs', Swindon)
server.get('/abc', Manchester)
server.listen(3000)