let nbs = require("express")
let server = nbs()

function addition(request, response){
    let num1 = parseInt(request.params.A);
    let num2 = parseInt(request.params.B);
    let result = num1 + num2;
    response.send ("The result is " + result);
}

server.get("/add/:A/:B", addition);
server.listen(3000)