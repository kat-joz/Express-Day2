let nbs = require("express")
let server = nbs()

function homePage(req,res){
    res.write("<h1> <center> Welcome to my home page </center> </h1>");
    res.write("<b> List of departments </b> <br><br>");
    res.write("<a href = 'http://127.0.0.1:3000/department/101'> Human Resource Department </a> <br>");
    res.write("<a href = 'http://127.0.0.1:3000/department/102'> IT Department </a> <br>");
    res.write("<a href = 'http://127.0.0.1:3000/department/103'> Sales Department </a> <br>")
}

function employeeList(req,res){
    let departmentName = ""

    if (req.params.dept==101){
        departmentName = "Human Resource Department"
    }

    if (req.params.dept==102){
        departmentName = "IT Department"
    }

    if (req.params.dept==103){
        departmentName = "Sales Department"
    }

    res.write(`<h1> <center> ${departmentName} </center> </h1>`)
}

server.get('/', homePage);
server.get('/department/:dept', employeeList);
server.listen(3000)


