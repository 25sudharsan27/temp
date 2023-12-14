const http = require('http');

const server = http.createServer((req,res)=>{
    //Another method is 
    // res.write("Welcome to our home page")
    // res.end()
    switch (req.url){
        case '/':
            res.end("Welcome to our home page")
            break;
        case '/about':
            res.end("Hey there, you now landed in about page");
            break;
        default:
            res.end(`<h1>Oops! You landed in a wrong page it may create page crash</h1>
            <a href="/">Back to home</a>`)
    }
    // if(req.url==='/'){
    //     res.end("Welcome to our home page")
    // }
    // if(req.url==='/about'){
    //     res.end("Hey there, you now landed in about page");
    // }
    // // res.end(`<h1>Oops! You landed in a wrong page it may create page crash</h1>
    // // <a href="/">Back to home</a>`)
})

server.listen(5000)