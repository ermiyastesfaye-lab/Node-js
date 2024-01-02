let http = require("node:http")
let fs = require("node:fs")

let server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/plain"})
        res.end("Home page")
    }
    else if(req.url === "/about"){
        res.writeHead(200, {"Content-Type": "text/plain"})
        res.end("About page")
    }
    else if(req.url === "/json"){
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify({
            firstName: "Ermiyas",
            lastName: "Tesfaye"
        }))
    }
    else{
        res.writeHead(404)
        res.end("Page not found")
    }   



    // let name = "Ermiyas"
    // res.writeHead(200, {"Content-Type": "text/html"})
    // let html = fs.readFileSync("./index.html", "utf-8")
    // html = html.replace("{name}", name)
    // res.end(html)
})

server.listen(3000, "localhost", () => {
    console.log("Server running on port 3000")
})