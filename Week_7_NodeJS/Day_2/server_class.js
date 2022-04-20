const http = require ('http');

let students = {
    student1: "Oliver",
    student2: "Dheeksha",
    student3: "Wayne",
    student4: "Henry"
}

const menu =
{
    "menu": {
        "id": "file",
        "value": "File",
        "popup": {
            "menuitem": [
                { "value": "New", "onclick": "CreateNewDoc()" },
                { "value": "Open", "onclick": "OpenDoc()" },
                { "value": "Close", "onclick": "CloseDoc()" }
            ]
        }
    }
}
const server = http.createServer((req, res)=>{
    
    if (req.url == "/studentlist"){
        console.log("Student list requested");
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        let json_msg = JSON.stringify(students);
        res.end(json_msg)
    }
    else if (req.url == "/welcome"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<html><body><h1>Welcome!</h1></body></html>")
    }
    else if (req.url == "/menu"){
    console.log("<Menu requested");
    res.setHeader("Content-Type", "application/json")
    res.statusCode = 200;
    json_menu = JSON.stringify(menu)
    res.end(json_menu);
    }
    else {
        console.log("Request received");
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;
        // res.writeHead(200);
        res.end("<h1>This is the potato</h1>")
    }

})
server.listen(3000);