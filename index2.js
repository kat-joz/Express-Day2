let nbs = require ("express")
let server = nbs()

//This function is named and can be called repeatedly by different paths (e.g. qa1 and qa2)
function qaFunction (request, response){
    response.send("Hello")
}

//This function doesn't have a name and can only be executed within this function; cannot be called again for a different path
server.get('/nbs', function(request, response){
    response.send("World")
})

server.get('/qa1', qaFunction)
server.get('/qa2', qaFunction)
server.listen(3000)